import React from 'react'
import classes from '../../styles/ProgressBar.module.css'
import Button from '../Form/Button'
import { Link } from 'react-router-dom'
const ProgressBar = ({next,prev,progress,submit}) => {
    return (
         <div className={classes.progressBar}>
          <div className={classes.backButton} onClick={prev}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={classes.rangeArea}>
            <div className={classes.tooltip}>{progress}% complete!</div>
            <div className={classes.rangeBody}>
              <div className={classes.progress} style={{ width: `${progress}%`}}></div>
            </div>
          </div>
         

            <Button className={classes.next} onClick={progress === 100 ? submit : next}>
                <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
         
        </div>

    )
}

export default ProgressBar
