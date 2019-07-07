import React from 'react'
import Col from 'react-bootstrap/Col'
import AddToCart from '../AddToCart'
import localStyles from './styles.module.css'


const MenuItem = (props) => {

    return (
        <Col xs={12}>
            <div id={localStyles.wrapper} style={{flexDirection: props.language === 'heb' ? 'row-reverse' : null}}>
                <div style={{backgroundImage: `url(${props.item.coverPhoto}`}} id={localStyles.image}/>
                <div id={localStyles.textParams}>
                    <p id={localStyles.title}>{props.item.name}</p>
                    <p id={localStyles.description}>{props.item.description}</p>
                    <p id={localStyles.serves}>Serves {props.item.serves}</p>
                </div>
                <div id={localStyles.purchaseParams}>
                    <p id={localStyles.price}>{props.item.price}</p>
                    <div id={localStyles.add}>
                        <AddToCart effect={() => props.add(props.item)}/>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default MenuItem