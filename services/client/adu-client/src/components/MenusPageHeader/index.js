import React from 'react'
import Col from 'react-bootstrap/Col'
import localStyles from './styles.module.css'
import Title from '../Title'
import HoverDropdown from '../HoverDropdown'
import allContent from './content.json'

const MenusPageHeader = (props) => {
    const content = allContent[props.lang]

    const defaultStyles = {
        dropdown: {
            justifyContent: 'flex-end'
        }
    }

    const getDays = () => {
        const keys = Object.keys(content.days)
        return keys.map(key => content.days[key])
    }

    return(
        <Col xs={11}>
        <div id={localStyles.wrapper}>
            <div id={localStyles.dropdown} style={defaultStyles.dropdown}>
                <HoverDropdown 
                title={content.dropdownTitle} 
                right={props.lang === 'eng'} 
                items={getDays()}/>
            </div>
            <Title 
            main={content.title}
            sub={content.subtitle} 
            dir={props.lang === 'heb' ? 'rtl' : 'ltr'}/>
        </div>
        </Col>
    )
}

export default MenusPageHeader