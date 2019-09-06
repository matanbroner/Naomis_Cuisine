import React from 'react'
import Flag from 'react-flagkit'
import localStyles from './styles.module.css'

const LanguageToggler = (props) => {
    const languages = [
        {
            id: 'eng',
            country: 'US'
        },
        {
            id: 'heb',
            country: 'IL'
        }
    ]
    const renderSquares = () => {
        return languages.map(lang => {
            return(
                <div id={localStyles.flagWrapper} key={lang.country}>
                <Flag
                country={lang.country}
                size={34}
                onClick={() => props.trigger(lang.id)}
                />
                </div>
            )
        })
    }
    return(
        <div id={localStyles.wrapper}>
            {renderSquares()}
        </div>
    )
}

export default LanguageToggler