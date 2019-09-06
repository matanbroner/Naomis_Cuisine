import React from 'react'
import localStyles from './styles.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap' 

import TabbedText from '../../components/TabbedText'
import Gallery from '../../components/Gallery'

class ModelDetailsPanel extends React.Component {

    constructor(props){
        super(props)
    }

    renderBasicInfoIcons(){
        return(
            <div id={localStyles.basicInfoWrapper}>
                <div className={localStyles.basicInfoParam}>
                    <FontAwesomeIcon color='#00995c' size='4x' icon={faBed}/>
                    <span className={localStyles.basicInfoParamText}> 2 Bed </span>
                </div>
                <div className={localStyles.basicInfoParam}>
                    <FontAwesomeIcon color='#00995c' size='4x' icon={faBath}/>
                    <span className={localStyles.basicInfoParamText}>3 Bath</span>
                </div>
                <div className={localStyles.basicInfoParam}>
                    <FontAwesomeIcon color='#00995c' size='4x' icon={faRulerCombined}/>
                    <span className={localStyles.basicInfoParamText}>1200 Square Foot</span>
                </div>
            </div>
        )
    }

    renderDetailsTabs(){
        return(
            <TabbedText
            keys={['Lighting', 'Spacious Rooms', 'Garden Area']}
            active={0}
            // onChange={(tab) => this.setState({tab})}
            lang='eng'/>
        )
    }

    lorem(){
        return 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    }

    renderTextDetails(){
        return(
            <Row>
                <Col xs={12} md={6}>
                    <div id={localStyles.tabbedInfoWrapper}>
                    {this.renderDetailsTabs()}
                    <p id={localStyles.tabbedInfoBody}>{this.lorem()}</p>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Gallery/>
                </Col>
            </Row>
        )
    }

    render(){
        return(
            <Row id={localStyles.wrapper}>
                <Col xs={12} md={2}>
                    { this.renderBasicInfoIcons() }
                </Col>
                <Col xs={12} md={10}>
                    { this.renderTextDetails() }
                </Col>
            </Row>
        )
    }
}

export default ModelDetailsPanel