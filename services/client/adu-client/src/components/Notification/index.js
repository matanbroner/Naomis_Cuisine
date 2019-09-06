import React from 'react'
import localStyles from './styles.module.css'

const Notification = (props) => {
    return(
        <span id={localStyles.wrapper}>{props.count}</span>
    )
}

export default Notification