import React from 'react'
import { DSA } from '../db/dsa'
import { Link } from 'react-router-dom'
import Type from './Type'
const Menu = () => {
    return (
        <div>
            
           { DSA.map((el) =>(<Link to={{ pathname: `/dsa/${el.url}` }}>
                <Type key={el.name} img={el.img} type={el.type} name={el.name} />
                </Link>))}
            
        </div>
    )
}

export default Menu
