import React from 'react'
import { Parallax, Background } from 'react-parallax'
import localStyles from './styles.module.css'
import { connect } from 'react-redux';

import Loading from '../../components/Loading'
import EstimateSquares from '../../components/EstimateSquares'
import BannerText from '../../components/BannerText'
import { Row, Col } from 'react-bootstrap'

class HomePage extends React.Component{
    
    render(){
        return(
            <div id={localStyles.wrapper}>
                <Parallax
                blur={5}
                bgImage={'http://rainbowvalleyinc.com/wp-content/uploads/2014/05/Rainbow-Valley_Williams_01.jpg'}
                bgImageAlt="the cat"
                strength={1000}
                >
                    <div id={localStyles.logoWrapper}>
                        <img id={localStyles.logo}/>
                    </div>
                </Parallax>
                <Loading language={this.props.language}/>

                <EstimateSquares/>
                <BannerText>
                    <Row>
                        <Col xs={6}>
                            <img src=''/>
                        </Col>
                        <Col xs={6}>
                        If you’re shopping for a new accessory dwelling unit or a secondary home, you’ve come to the right place! California Modulars is a leading Northern California ADU home builder. We’ve been perfecting the art of building quality, affordable, and customizable modular homes in california.

As a locally owned and operated company based in San Jose, California, we have always aimed to provide our customers with personalized service, plentiful options, and a superior level of quality.
                        </Col>
                    </Row>
                </BannerText>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
    }
}

export default connect(mapStateToProps)(HomePage)