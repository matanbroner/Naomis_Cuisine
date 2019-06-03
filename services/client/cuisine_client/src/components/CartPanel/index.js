import React, {useState} from 'react'
import AnimateHeight from 'react-animate-height';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faPlus } from '@fortawesome/free-solid-svg-icons'
import localStyles from './styles.module.css'
import allContent from './content.json'
import { date } from '../../assets/functions/getDate'
import CartItem from '../CartItem'

const CartPanel = (props) => {
    const [extraInfo, setExtraInfo] = useState(false);
    const content = allContent[props.lang]
    const client = {
        sandbox:    'AS3dUAcyFnjFrRyyGziBzlaclxkIOH1tKInxumZmzmNJdcoIHn0ymAVXZApial1kBV94H_r8xYoLwUCh',
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    const paypalButtonStyles = {
        layout:  'horizontal',
        color:   'blue',
        label:   'checkout',
        height: 55
    }
    
    const renderInterface = () => {
        return(
            <React.Fragment>
                <div id={localStyles.orderParamsHeader}>
                    <p>{content.order.header} - {date()}</p>
                </div>
                <div id={localStyles.itemsWrapper}>
                    {props.items}
                </div>
                <hr id={localStyles.finalizedParamsDivider}/>
                <div id={localStyles.finalizedParamsWrapper}>
                    <p>({props.totals.quantity} {content.order.items})</p>
                    <p>{content.order.total} ${props.totals.price}</p>
                </div>
                <hr className={localStyles.fullLengthDivide}/>
                <div id={localStyles.checkoutWrapper}>
                    {renderAdditionalInfoBox()}
                    <PaypalExpressBtn style={paypalButtonStyles} env ={"sandbox"} client={client} currency={'USD'} total={1.00} />
                </div>
            </React.Fragment>
        )
    }
    const renderEmptyCart = () => {
        return(
            <div id={localStyles.emptyCartWrapper}>
                <FontAwesomeIcon icon={faShoppingBasket} size="6x" color="gray"/>
                <p id={localStyles.emptyCartPrompt}>{content.emptyCart}</p>
            </div>
        )
    }
    const renderAdditionalInfoBox = () => {
        return(
            <React.Fragment>
                <AnimateHeight
                    duration={ 500 }
                    height={ extraInfo ? 220 : 0 } // see props documentation bellow
                    >
                        <textarea 
                            id={localStyles.additionalInfo}
                            cols="40" 
                            rows="5"
                            style={{direction: props.lang === 'heb' ? 'rtl' : 'ltr'}}
                            />
                    </AnimateHeight>
                    <button id={localStyles.extraInfoButton} onClick={() => setExtraInfo(!extraInfo)}>
                        {
                            extraInfo
                            ? <span>- {content.order.extraInfoButtonRemove}</span>
                            : <span>+ {content.order.extraInfoButtonAdd}</span>
                        }
                    </button>
            </React.Fragment>
        )
    }
    return (
        <div id={localStyles.wrapper}>
            <div style={{display: props.lang === 'heb' ? 'none' : null}} id={localStyles.pulltabConnector}/>
            <div id={localStyles.contentWrapper}>
                <p id={localStyles.title}>{content.title}</p>
                <hr className={localStyles.fullLengthDivide}/>
                {
                    props.items.length
                    ? renderInterface()
                    : renderEmptyCart()
                }
            </div>
            <div style={{display: props.lang === 'eng' ? 'none' : null}} id={localStyles.pulltabConnector}/>
        </div>
    )
}

export default CartPanel