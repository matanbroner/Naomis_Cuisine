import React from 'react'
import localStyles from './styles.module.css'

const Tabs = (props) => {

    const activeTabStyles = {
        fontWeight: 800,
        borderBottom: '3px solid #d686e4'
    }

    const renderItems = () => {
        return Object.keys(props.items).map(tab => {
            return (
                <button 
                id={localStyles.tab} 
                onClick={() => props.changeTab(tab)}
                style={tab === props.activeTab ? {...activeTabStyles} : null}
                >
                    {props.items[tab]}
                </button>
            )
        })
    }

    return(
        <div id={localStyles.wrapper}>
            {renderItems()}
        </div>
    )
}

export default Tabs