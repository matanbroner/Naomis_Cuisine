import React from 'react'
import localStyles from './styles.module.css'

const Button = (props) => {
    return(
        <div 
        id={localStyles.button}
        className={props.className}
        onClick={() => props.onClick()}
        >
            {props.label}
        </div>
    )
}

export default Button