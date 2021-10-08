import _ from 'lodash'
import React, { useEffect, useReducer, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import UseQuestions from '../../hooks/useQuestions'
import Answers from '../quiz/Answers'
import MiniPlayer from '../quiz/MiniPlayer'
import ProgressBar from '../quiz/ProgressBar'
import {useAuth} from '../contexts/AuthContext'
import { getDatabase, set,ref } from '@firebase/database'

const initialState = null;

const reducer = (state, action) =>{
    switch(action.type){
        case 'questions':
            action.value.forEach(question => {
                question.options.forEach(option =>{
                    option.checked = false;
                })
            });
            return action.value
        case 'answer':
            const questions = _.cloneDeep(state)
            
            questions[action.questionID].options[action.optionIndex].checked
            = action.value
            return questions
        default:
            return state
    }
}
const Quiz = () => {
    const {id} = useParams()
    const {loading,error,questions} = UseQuestions(id)
    const [currentQuestion,setCurrentQuestion] = useState(0)

    const history = useHistory()

    const {videoTitle} = history.location.state
    
    //useReducer
    const [qna, dispatch]  = useReducer(reducer, initialState)

    const {currentUser} = useAuth()

    useEffect(() => {
       dispatch({
           type: 'questions',
           value: questions
       })
    }, [questions])

    const handleAnswerChange = (e,index) =>{
        dispatch({
            type: 'answer',
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked
        })
    }

    //handles next question button
    const nextQuestion = () =>{
        if(currentQuestion <= questions.length){
            setCurrentQuestion(prevQuestion => prevQuestion+1)
        }
    }

    //handles previous question button
    const prevQuestion = () =>{
        if(currentQuestion >=1 && currentQuestion<= questions.length){
            setCurrentQuestion(prevQuestion => prevQuestion-1)
        }
    }

    //submit handler when all questions answered
    const submitHandler = async () =>{ 
        const {uid} = currentUser
        const db = getDatabase()
        const resultRef = ref(db, `result/${uid}`)

        await set(resultRef, {
            [id] : qna
        })

        history.push({
            pathname: `/result/${id}`,
            state: {
                qna
            }
        })
    }       

    //calculate percentage of progress
    const progress = questions.length > 0 ? ((currentQuestion+1)/questions.length)*100 : 0
    return (
        <React.Fragment>
            {loading && <h3>Loading...</h3>}
            {error && <h3>There was an error!</h3>}
            {!loading && !error && qna.length > 0 && (
                <React.Fragment> 
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers input={true} options={qna[currentQuestion].options} handleChange={handleAnswerChange} />
                    <ProgressBar next={nextQuestion} prev={prevQuestion} progress={progress} submit={submitHandler} />
                    <MiniPlayer id={id} title={videoTitle} />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Quiz
