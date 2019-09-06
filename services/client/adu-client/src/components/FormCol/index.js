import React from 'react'
import localStyles from './styles.module.css'
import Col from 'react-bootstrap/Col'

const FormCol = (props) => {
    return (
        <Col xs={props.xs} md={props.md} lg={props.lg} xl={props.xl}>
            {props.children}
        </Col>
    )
}

export default FormCol