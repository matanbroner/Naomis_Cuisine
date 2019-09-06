import React from 'react'
import localStyles from './styles.module.css'

const Title = (props) => {

    const propBasedStyles = {
        float: props.dir === 'rtl' ? 'right' : null,
        direction: props.dir,
        textAlign: props.dir === 'rtl' ? 'right' : null
    }

    const renderMainTitle = () => {
        return props.main
        ? <h1 id={localStyles.main}>{props.main}</h1>
        : null
    }

    const renderSubTitle = () => {
        return props.sub
        ? <h4 id={localStyles.sub}>{props.sub}</h4>
        : null
    }

    return(
        <div id={localStyles.wrapper} style={propBasedStyles}>
            {renderMainTitle()}
            {renderSubTitle()}
        </div>
    )
}

export default Title