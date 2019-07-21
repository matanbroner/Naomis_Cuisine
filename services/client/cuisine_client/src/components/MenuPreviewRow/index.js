import React from 'react'
import localStyles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ScrollableSection from '../ScrollableSection'
import CardDisplay from '../CardDisplay'

const MenuPreviewRow = (props) => {

    const renderItems = () => {
        return props.items.map(item => {
            return (
                <div id={localStyles.cardWrapper}>
                    <CardDisplay
                        text={item.name}
                        image={item.photo} 
                    />
                </div>
            )
        })
    }

    const renderButton = () => {
        return(
            <div id={localStyles.buttonWrapper}>
                <div
                id={localStyles.singleButton} 
                onClick={() => props.infoModal()}>
                    <FontAwesomeIcon size="2x" icon={faInfoCircle}/>
                </div>
                 <div 
                 id={localStyles.singleButton} 
                 onClick={() => props.scheduleModal()}
                 style={{visibility: !props.isActive ? null : 'hidden'}}>
                    <FontAwesomeIcon size="2x" icon={faCalendarCheck}/>
                </div>
            </div>
        )
    }
    

    return (
            <div id={localStyles.wrapper} style={{opacity: props.isActive ? 1 : '0.5'}}>
                {
                    props.lang === 'heb'
                    ? null
                    : renderButton()
                }
                <ScrollableSection 
                reverse={props.lang === 'heb' ? true : false} 
                horizontal 
                cardWidth="200px" >
                    {renderItems()}
                </ScrollableSection>
                {
                    props.lang === 'heb'
                    ? renderButton()
                    : null
                }
            </div>
    )
}

export default MenuPreviewRow