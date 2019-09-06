import React from 'react'
import localStyles from './styles.module.css'

import SliderComponent from '../SliderComponent'

import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTools } from '@fortawesome/free-solid-svg-icons'

class EstimateSquares extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            squareFeet: 0,
            multiplier: 1
        }
    }

    moneyString(init, multiplier){
        return '$' + ((init + (this.state.squareFeet * multiplier)) * this.state.multiplier).toLocaleString()
    }

    renderTextSquares(){
        return(
            <Col xs={12} md={6} id={localStyles.squaresWrapper}>
                <Row>
                    <Col xs={6} style = {{
                        backgroundColor: '#35754d',
                        borderTopLeftRadius: '15px'
                    }} className={localStyles.estimateSquare}>
                        <p className={localStyles.squareTitle}>Square Title</p>
                        <p className={localStyles.squareCost}>{this.moneyString(120000, 1000)}</p>
                        <p className={localStyles.squareAsterisk}>* 30 years / 5% interest rate / 20% down payment</p>
                    </Col>
                    <Col xs={6} style = {{
                        backgroundColor: '#7f0828',
                        borderTopRightRadius: '15px'
                    }} className={localStyles.estimateSquare}>
                        <p className={localStyles.squareTitle}>Square Title</p>
                        <p className={localStyles.squareCost}>{this.moneyString(800, 50)}</p>
                        <p className={localStyles.squareAsterisk}>* 30 years / 5% interest rate / 20% down payment</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} style = {{
                        backgroundColor: '#001f6f',
                        borderBottomLeftRadius: '15px'
                    }} className={localStyles.estimateSquare}>
                        <p className={localStyles.squareTitle}>Square Title</p>
                        <p className={localStyles.squareCost}>{this.moneyString(790000, 500)}</p>
                        <p className={localStyles.squareAsterisk}>* 30 years / 5% interest rate / 20% down payment</p>
                    </Col>
                    <Col xs={6} style = {{
                        backgroundColor: '#396200',
                        borderBottomRightRadius: '15px'
                    }} className={localStyles.estimateSquare}>
                        <p className={localStyles.squareTitle}>Square Title</p>
                        <p className={localStyles.squareCost}>{this.moneyString(290, 5)}</p>
                        <p className={localStyles.squareAsterisk}>* 30 years / 5% interest rate / 20% down payment</p>
                    </Col>
                </Row>
            </Col>
        )
    }

    renderTypeButtons(){
        return(
            <Col xs={12} md={6}>
                <Row id={localStyles.buttonWrapper}>
                <Col xs={6}>
                    <div className={localStyles.button} 
                    onClick={() => this.setState({ multiplier: 1 })}>
                    <p>
                    <FontAwesomeIcon icon={faHome} size='5x'/>
                    </p>
                    <p className={localStyles.buttonTitle}>
                        New Construction
                    </p>
                    </div>
                </Col>
                <Col xs={6}>
                    <div className={localStyles.button}
                    onClick={() => this.setState({ multiplier: 0.5 })}>
                    <p>
                    <FontAwesomeIcon icon={faTools} size='5x'/>
                    </p>
                    <p className={localStyles.buttonTitle}>
                        Conversion
                    </p>
                    </div>
                </Col>
                </Row>
                <Row id={localStyles.sliderRow}>
                <SliderComponent
                value={this.state.squareFeet}
                onChange={(squareFeet) => this.setState({ squareFeet })}
                />
                <p id={localStyles.sliderTitle}>Square Feet</p>
                </Row>
            </Col>
        )
    }

    render(){
        return(
            <Row id={localStyles.wrapper}>
                {this.renderTextSquares()}
                {this.renderTypeButtons()}
            </Row>
        )
    }
}   

export default EstimateSquares