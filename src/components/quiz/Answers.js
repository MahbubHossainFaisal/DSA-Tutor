import React from 'react'
import classes from '../../styles/Answers.module.css'
import CheckBox from '../Form/inputFields/CheckBox'
const Answers = ({options=[], handleChange,input}) => {
   
    return (
        <div className={classes.answers}>
            {options.map((option,index) =>(
                <React.Fragment>
                    {input ? (
                        <CheckBox classname={classes.answer}
                        text={option.title} value={index} checked={option.checked}
                        onChange={(e)=> handleChange(e,index)} />
                    ) : (
                        <CheckBox classname={`${classes.answer} ${
                            option.correct ?
                            classes.correct 
                            : option.checked ? classes.wrong : null }`}
                        text={option.title}  defaultChecked = {option.checked}
                        disabled />
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Answers
