
import React from 'react'
import localStyles from './styles.module.css'

import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StatsBox = (props) => {
    return(
        <div id={localStyles.wrapper}
        style={{
            background: props.color
        }}
        >
            <Row>
            <Col xs={6}>
                <p id={localStyles.count}>{props.count}</p>
                <p id={localStyles.title}>{props.title}</p>
                <p id={localStyles.context}>In the past {props.context}</p>
            </Col>
            <Col xs={6} id={localStyles.iconCol}>
                <div id={localStyles.icon}>
                    <FontAwesomeIcon color={props.color} icon={props.icon}/>
                </div>
            </Col>
            </Row>

        </div>
    )
}

export default StatsBox