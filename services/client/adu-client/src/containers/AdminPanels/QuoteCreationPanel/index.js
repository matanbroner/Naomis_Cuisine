
import React from 'react'
import localStyles from './styles.module.css'

import Title from '../../../components/Title'
import ModelPriceBuilder from '../../../components/ModelPriceBuilder'
import PhotoUpload from '../../../components/PhotoUpload'

import { Row, Col } from 'react-bootstrap'

class AdminQuoteCreationPanel extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    renderDropdownPanel(){
        return(
            <ModelPriceBuilder/>
        )
    }

    render(){
        return(
            <div id={localStyles.wrapper}>
                <Title
                main="Create a Quote"
                sub="The first step to success"
                />
                <Row>
                    <Col xs={12}>
                        {this.renderDropdownPanel()}
                    </Col>
                </Row>
                <Row>
                
                </Row>
            </div>
        )
    }
}

export default AdminQuoteCreationPanel