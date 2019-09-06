import React from 'react'
import localStyles from './styles.module.css'
import allContent from './content.json'

const Loading = (props) => {
    const content = allContent[props.language] || {loading: 'Loading'}
    return(
        <div id={localStyles.wrapper}>
            <img id={localStyles.loadingImage}/>
            <p 
            className={localStyles.loading}
            style={{direction: props.language === 'heb' ? 'rtl': 'ltr'}}
            >{props.prompt || content.loading}</p>
        </div>
    )
}

export default Loading