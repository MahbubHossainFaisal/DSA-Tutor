import React from 'react'
import classes from '../../styles/Answers.module.css'
import CheckBox from '../Form/inputFields/CheckBox'
const Answers = ({options=[], handleChange}) => {
    return (
        <div className={classes.answers}>
            {options.map((option,index) =>(
                <CheckBox classname={classes.answer}
                 text={option.title} value={index} checked={option.checked}
                 onChange={(e)=> handleChange(e,index)} />
            ))}
        </div>
    )
}

export default Answers
