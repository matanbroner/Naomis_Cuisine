import React from 'react'
import localStyles from './styles.module.css'

import Col from 'react-bootstrap/Col'

const CardDisplay = (props) =>{
    return(
        <div id={localStyles.wrapper}>
            <div id={localStyles.imageWrapper}>
                <div 
                id={localStyles.image}
                style={{
                    backgroundImage: `url(${props.image})`
                }}/>
            </div>
            <div id={localStyles.textWrapper}>
                <p id={localStyles.text}>{props.text}</p>
            </div>
        </div>
    )
}

export default CardDisplay