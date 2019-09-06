import React from 'react'
import localStyles from './styles.module.css'

const TitledText = (props) => {

    return(
        <div id={localStyles.wrapper}>
            <h4 id={localStyles.title}>{props.title.toUpperCase()}</h4>
            <p id={localStyles.body}>{props.text}</p>
        </div>
    )
}

export default TitledText