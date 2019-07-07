import React from 'react'
import localStyles from './styles.module.css'

const CircleDisplay = (props) => {
    return (
        <div id={localStyles.wrapper}>
            <div id={localStyles.circle}
            style={{
                background: props.color
            }}
            >
                <p>{props.mainText}</p>
            </div>
            <div id={localStyles.subWrapper}>
                {props.subText}
            </div>
        </div>
    )
}

export default CircleDisplay