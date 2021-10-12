import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database'
import { useEffect, useState } from 'react'
const UseVideoList = (page) => {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [videos,setVideos] = useState([])
    const [hasMore,setHasMore] = useState(true)
    useEffect(() => {
       //fetching data from database
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db, "videos/array")
            //query
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt(""+page),
                limitToFirst(8)

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
                setHasMore(false)
           }
        }catch(err){
            console.log(err)
            setLoading(false)
            setError(true)
        }

        }

        
       setTimeout(()=>{
            fetchVideos()
       },2000)
    }, [page])

    return{
        loading,
        error,
        videos,
        hasMore
    }
}

export default UseVideoList
