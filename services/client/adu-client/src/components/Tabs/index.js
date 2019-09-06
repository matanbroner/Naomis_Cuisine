import React from 'react'
import localStyles from './styles.module.css'

import Nav from 'react-bootstrap/Nav'

const Tabs = (props) => {

    const renderItems = () => {
        var tabs = props.keys.map((key, index) => {
            return(
                <Nav.Item 
                id={props.active === index ? localStyles.active : null}
                className={localStyles.tab}
                onClick={() => props.onChange(index)}
                >
                    <Nav.Link active={props.active === index}>{key}</Nav.Link>
                </Nav.Item>
            )
        })
        if (props.lang === 'heb'){
            tabs = tabs.reverse()
        }
        return(
            <Nav id={localStyles.tabWrapper} justify variant="tabs">
                {tabs}
            </Nav>
        )
    }

    return(
        <div id={localStyles.wrapper}>
            {renderItems()}
        </div>
    )
}

export default Tabs