import React from 'react'
import localStyles from './styles.module.css'

const HoverDropdown = (props) => {
    console.log(props)
    
    const renderItems = () => {
        return props.items.map(item => {
            return(
                <div id={localStyles.item} key={item}>{item}</div>
            )
        })
    }

    return (
        <div id={localStyles.wrapper} style={{float: props.right ? 'right' : null}}>
            <button id={localStyles.button}>{props.title || 'Dropdown'}</button>
            <div id={localStyles.content}>
                {renderItems()}
            </div>
        </div>
    )
}

export default HoverDropdown