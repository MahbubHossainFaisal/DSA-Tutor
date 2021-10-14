import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Type.module.css'


const Type = ({img,type,name}) => {
    return (
        <div className={classes.type}>
            
                <img src={img} alt={name}  />
                <div className={classes.qmeta}>
                    <p style={{ fontSize: '25px' , color: '#297F87', fontWeight:'900'}}>{type}</p>
                    <p style={{ fontSize: '20px', fontWeight: '700' }}>{name}</p>
                </div>
           
        </div>
    )
}

export default Type
