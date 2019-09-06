import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import localStyles from './styles.module.css'

const Incrementer = (props) => {
    return(
        <React.Fragment>
            <div id={localStyles.incrementButtonGroup}>
            <button className={localStyles.incrementButton} onClick={() => props.inc()}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </button>
            <p id={localStyles.incrementValue}>{props.quantity}</p>
            <button className={localStyles.incrementButton} onClick={() => props.dec()}>
                <FontAwesomeIcon icon={faArrowDown}/>
            </button>
            </div>
        </React.Fragment>
    )
}

export default Incrementer