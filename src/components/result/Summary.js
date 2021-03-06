import React from 'react'
import classes from '../../styles/Summary.module.css'
import successImage from '../../assets/images/success.png'
import useFetch from '../../hooks/useFetch'
const Summary = ({score,noq}) => {


  const getKeyword = () =>{
    if((score/(noq*5))*100 < 40){
      return "bad"
    } else if((score/(noq*5))*100 < 75){
      return "good"
    } else if((score/(noq*5))*100 < 100){
      return "very good"
    }
    else{
      return "excellent"
    }
  }

  

  const {loading, error, result} = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,'GET',{
      Authorization: process.env.REACT_APP_PEXELS_API_KEY
    })
    

  const image = result ? result?.photos[0].src.medium : successImage
  
    return (
       <div className={classes.summary}>
          <div class={classes.point}>
            {/* progress bar will be placed here */}
            <p className={classes.score}>
              Your score is <br />
              {score} out of {noq*5}
            </p>
          </div>
          {loading && <div className={classes.badge}>Loading your badge...</div>}
          {error && <div className={classes.badge}> An error occurred! </div>}
          {!loading && !error && 
          (<div className={classes.score}>
            <img src={image} alt="Success" />
          </div>) }
        </div>
    )
}

export default Summary
