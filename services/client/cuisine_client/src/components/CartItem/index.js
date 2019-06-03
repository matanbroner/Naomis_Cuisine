import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import localStyles from './styles.module.css'
import Incrementer from '../Incrementer'

const CartItem = (props) => {
    return(
        <React.Fragment>
            <div id={localStyles.wrapper} style={{flexDirection: props.language === 'heb' ? 'row-reverse' : null}}>
                <div id={localStyles.itemImage} style={{backgroundImage: `url(${props.item.coverPhoto})`}}/>
                <div id={localStyles.itemParams}>
                    <Incrementer 
                    quantity={props.item.quantity} 
                    inc={() => props.inc(props.item)}
                    dec={() => props.dec(props.item)}
                    />
                    <p>{props.item.name}</p>
                    <p id={localStyles.price}>${(props.item.price * props.item.quantity).toFixed(2)}</p>
                </div>
                <button id={localStyles.removeButton} onClick={() => props.remove(props.item)}>
                    <FontAwesomeIcon icon={faTimes} size="1x"/>
                </button>
            </div>
        </React.Fragment>
    )
}

export default CartItem