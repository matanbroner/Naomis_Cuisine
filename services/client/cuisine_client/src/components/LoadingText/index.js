import React from 'react'
import localStyles from './styles.module.css'

const LoadingText = (props) => {
    return (
        <span 
        style={{direction: props.lang === 'heb' ? 'rtl': 'ltr'}}
        id={localStyles.wrapper}>
            {props.text}
        </span>
    )
}

export default LoadingText