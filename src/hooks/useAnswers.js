import { get, getDatabase,  orderByKey, query, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
const UseAnswers = (videoID) => {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [answers,setAnswers] = useState([])

    useEffect(() => {
       //fetching data from database
        async function fetchAnswers(){
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "/questions")
            //query
            const answerQuery = query(
                answerRef,
                orderByKey(),
            )

            try{
            setError(false)
            setLoading(true)
            //request api from firebase database
           const snapshot = await get(answerQuery)
           setLoading(false)

           if(snapshot.exists()){
            setAnswers((prevQuestions) =>{
                //converting objects to array
                return [...prevQuestions, ...Object.values(snapshot.val())]
            } )
           }

        }catch(err){
            console.log(err)
            setLoading(false)
            setError(true)
        }

        }

        
       setTimeout(()=>{
            fetchAnswers()
       },2000)
    }, [videoID])

    return{
        loading,
        error,
        answers,
    }
}

export default UseAnswers
