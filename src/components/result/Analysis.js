import React from 'react'
import Questions from '../quiz/Questions'
import classes from '../../styles/Analysis.module.css'
const Analysis = ({answers}) => {
    return (
          <div className={classes.analysis}>
          <h1>Question Analysis</h1>
          
          <Questions answers={answers}/>
          </div>
    )
}

export default Analysis
