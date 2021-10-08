import { useEffect, useState } from 'react'

const useFetch = (url,method,headers) => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(()=>{
        const requestFetch = async () =>{
       try{
           
           setLoading(true)
           setError(false)
         const response = await fetch(url,{
               method: method ,
               headers:  headers
           })
          const data = await response.json() 
           setLoading(false)
           setResult(data)
           
       console.log('data',result)

       } catch(err){
        console.log(err)
        setLoading(false)
        setError(true)
       }
    }


       requestFetch()
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   
    console.log('result',result)
    return {
        loading,
        error,
        result
    }
}

export default useFetch
