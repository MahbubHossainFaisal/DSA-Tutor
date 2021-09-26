import {useEffect, useState} from 'react'
import {getDatabase,ref,query,orderByKey,get} from 'firebase/database'
const UseVideoList = () => {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [videos,setVideos] = useState([])
    useEffect(() => {
       //fetching data from database
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db, "videos")
            //query
            const videoQuery = query(
                videosRef,
                orderByKey()

            )

            try{
            setError(false)
            setLoading(true)
            //request api from firebase database
           const snapshot = await get(videoQuery)
           setLoading(false)

           if(snapshot.exists()){
            setVideos((prevVideos) =>{
                //converting objects to array
                return [...prevVideos, ...Object.values(snapshot.val())]
            } )
           }else{
                //
           }
        }catch(err){
            console.log(err)
            setLoading(false)
            setError(true)
        }

        }

        
        fetchVideos()
    }, [])

    return{
        loading,
        error,
        videos,
    }
}

export default UseVideoList
