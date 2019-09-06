import React from 'react'
import localStyles from './styles.module.css'

const BannerText = (props) => {
    return(
        <div id={localStyles.wrapper}>
            {props.children}
        </div>
    )
}

export default BannerText