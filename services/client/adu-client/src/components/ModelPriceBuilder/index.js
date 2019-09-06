import React from 'react'
import SelectComponent from '../SelectComponent'
import localStyles from './styles.module.css'

import  { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import AnimateHeight from 'react-animate-height'

import QuoteCustomerInfo from '../Forms/QuoteCustomerInfo'
import Button from '../Button'

class ModelPriceBuilder extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            price: 3000000,
            form: {},
            next: false
        }
    }

    modifyFormState(key, val){
        this.setState({
            form: {
                ...this.state.form,
                [key]: val
            }
        })
    }

    renderExplanatoryText(){
        return(
            <p id={localStyles.explainText}>
                The price builder gives you an estimation depending on the information you provide it. 
                Don’t consider this price to be a quote but just an estimation depending on your property type and the finish materials that you have chosen for your ADU model. 
                But, it is important to understand what these costs include and what they exclude.
            </p>
        )
    }

    renderCostAnalysis(){
        return(
            <div id={localStyles.costAnalysisBody}>
                <p className={localStyles.costHeader}>Included Costs:</p>
                <ul>
                    <li>Design & Architecture Fees</li>
                    <li>Structural, MEP & Title 24 Engineering</li>
                    <li>Permit Processing</li>
                    <li>Mobilization & Construction</li>
                    <li>Project Management of all of the items above. You only deal with California Modulars local area representative.</li>
                </ul>
                <p className={localStyles.costHeader}>Excluded Costs:</p>
                <ul>
                    <li>Financing</li>
                    <li>Permit and other City fees (San Jose/Santa Clara estimate coming soon)</li>
                    <li>Soils Engineering (typically not required)</li>
                    <li>Landscaping Design or Install (typically not required</li>
                    <li>Fire sprinklers</li>
                    <li>Survey</li>
                    <li>Insurance</li>
                </ul>
            </div>
        )
    }

    renderSelectGroups(){
        return(
            <React.Fragment>
                <div className={localStyles.selectGroup}>
                    <p className={localStyles.selectTitle}>ADU Model</p>
                    <SelectComponent/>
                </div>
                <div className={localStyles.selectGroup}>
                    <p className={localStyles.selectTitle}>Lot Compexity</p>
                    <SelectComponent/>
                </div>
                <div className={localStyles.selectGroup}>
                    <p className={localStyles.selectTitle}>Finish Material</p>
                    <SelectComponent/>
                </div>
            </React.Fragment>
        )
    }

    renderPrice(){
        return(
            <Row>
                <Col xs={12} xl={this.state.next ? 12 : 9} id={localStyles.priceCol}>
                    <div id={localStyles.priceWrapper}>
                        <div id={localStyles.priceCylinderMain}>
                            Total:
                            <div id={localStyles.priceCylinderSub}>
                                <span id={localStyles.priceNumber}>{this.state.price.toLocaleString()}</span>
                                <FontAwesomeIcon icon={faDollarSign}/>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col id={localStyles.nextButtonWrapper} xs={12} xl={3} className={this.state.next ? localStyles.hidden : null}>
                    { this.renderNextButton() }
                </Col>
            </Row>
        )
    }

    renderNextButton(){
        return(
            <Button
            onClick={() => this.setState({next: true})}
            label='NEXT'
            />
        )
    }

    renderCustomerDetailForm(){
        return(
            <AnimateHeight
                    duration={ 600 }
                    className={localStyles.customerInfoForm}
                    height={ this.state.next ? null : 0 } // see props documentation bellow
                    >
                        <QuoteCustomerInfo
                        onChange={(key, val) => this.modifyFormState(key, val)}
                        />
            </AnimateHeight>
        )
    }

    render(){
        return(
            <React.Fragment>
                <Row id={localStyles.wrapper}>
                    <Col xs={12} lg={7}>
                    {this.renderSelectGroups()}
                    {this.renderExplanatoryText()}
                    {this.renderPrice()}
                    </Col>
                    <Col xs={12} lg={5}>
                        {this.renderCostAnalysis()}
                    </Col>
                </Row>
                <Row id={localStyles.wrapper}>
                    {this.renderCustomerDetailForm()}
                </Row>
            </React.Fragment>
        )
    }
}

export default ModelPriceBuilder