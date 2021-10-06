import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import UseAnswers from '../../hooks/useAnswers'
import Analysis from '../result/Analysis'
import Summary from '../result/Summary'
import _ from 'lodash'
const Result = () => {
    const {id} = useParams()
    const {location} = useHistory()
    const {state} = location
    const {qna} = state

    const {loading,error,answers} = UseAnswers(id)
    //console.log(answers)


    const calculate = () =>{
        let score =0;
        answers.forEach((question,index1) =>{
            
            let correctIndex = [], checkedIndex =[]

            question.options.forEach((option,index2)=>{
                if(option.correct) correctIndex.push(index2)
                if(qna[index1].options[index2].checked) {
                    checkedIndex.push(index2)
                    option.checked = true
                }
            })

            if(_.isEqual(correctIndex,checkedIndex)){
                score += 5
            }
        })
        return score
    }
    const userScore = calculate()
    return (
        <React.Fragment>
            {loading && <h3>Loading...</h3>}
            {error && <h3>There was an error!</h3>}
            {answers && answers.length>0 && (
                <>
                <Summary score={userScore} noq={answers.length} />
                <Analysis answers={answers} />
                </>
            )}
            

        </React.Fragment>
    )
}

export default Result
