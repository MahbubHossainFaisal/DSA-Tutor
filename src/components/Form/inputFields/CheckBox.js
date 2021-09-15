import React from 'react'

const CheckBox = ({classname,text,...rest}) => {
    return (
         <label className={classname}>
              <input type="checkbox" {...rest} />
              <span>{text}</span>
        </label>
    )
}

export default CheckBox
