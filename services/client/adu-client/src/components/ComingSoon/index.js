import React from 'react'
import localStyles from './styles.module.css'

import { Row, Col } from 'react-bootstrap'

const ComingSoon = () => {
    return(
        <Row>
            <Col
            id={localStyles.colWrapper}
            xs={12}>
                <div id={localStyles.photo}/>
                <p id={localStyles.text}>
                    COMING SOON!
                </p>
            </Col>
        </Row>
    )
}

export default ComingSoon