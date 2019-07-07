import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import localStyles from './styles.module.css'

const AddToCart = (props) => {

    return(
        <OverlayTrigger
        key={'key'}
        placement={'top'}
        overlay={
            <Tooltip id={`tooltip-top`}>
            Add this item to your cart!
            </Tooltip>
        }
        >
        <div id ={localStyles.wrapper} onClick={() => props.effect()}>
            <FontAwesomeIcon size="2x" icon={faCartPlus} color="white"/>
        </div>  
        </OverlayTrigger>
    )
}

export default AddToCart