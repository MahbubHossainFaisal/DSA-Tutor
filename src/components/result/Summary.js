import React from 'react'
import classes from '../../styles/Summary.module.css'
import image from '../../assets/images/success.png'
const Summary = () => {
    return (
       <div className={classes.summary}>
          <div class={classes.point}>
            {/* progress bar will be placed here */}
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.score}>
            <img src={image} alt="Success" />
          </div>
        </div>
    )
}

export default Summary
