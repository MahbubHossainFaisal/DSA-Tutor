import { get, getDatabase,  orderByKey, query, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
const UseQuestions = (videoID) => {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [questions,setQuestions] = useState([])

    useEffect(() => {
       //fetching data from database
        async function fetchQuestions(){
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions")
            //query
            const quizQuery = query(
                quizRef,
                orderByKey(),
            )

            try{
            setError(false)
            setLoading(true)
            //request api from firebase database
           const snapshot = await get(quizQuery)
           setLoading(false)

           if(snapshot.exists()){
            setQuestions((prevQuestions) =>{
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
            fetchQuestions()
       },2000)
    }, [videoID])

    return{
        loading,
        error,
        questions,
    }
}

export default UseQuestions
