import React from 'react'
import localStyles from './styles.module.css'
import Title from '../Title'
import allContent from './content.json'

const MenusPageHeader = (props) => {
    const content = allContent[props.lang]

    const fetchDaysButtonsWrapperStyles = () => {
        return {
            float: props.lang === 'heb' ? 'left' : 'right',
            marginLeft: props.lang === 'heb' ? '10%' : '0',
            marginRight: props.lang === 'eng' ? '10%' : '0'
        }
    }

    const renderDaysOfWeek = () => {
        var days = Object.keys(content.days)
        if (props.lang === 'heb') days = days.reverse()
        return days.map(day => {
            return(
                <button key={day} className={localStyles.dayButton}>
                    {content.days[day]}
                </button>
            )
        })
    }

    return(
        <div id={localStyles.wrapper}>
            <div id={localStyles.daysButtonsWrapper} style={fetchDaysButtonsWrapperStyles()}>
                {renderDaysOfWeek()}
            </div>
            <Title 
            main={content.title}
            sub={content.subtitle} 
            dir={props.lang === 'heb' ? 'rtl' : 'ltr'}/>
        </div>
    )
}

export default MenusPageHeader