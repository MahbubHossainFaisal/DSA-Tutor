import React from 'react'
import CheckBox from '../Form/inputFields/CheckBox'
import classes from '../../styles/Answers.module.css'
const Answers = () => {
    return (
        <div className={classes.answers}>
            <CheckBox classname={classes.answer} text="Test Answer" />
        </div>
    )
}

export default Answers
