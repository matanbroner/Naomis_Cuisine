import React from 'react'
import localStyles from './styles.module.css'
import Col from 'react-bootstrap/Col'

const FormCol = (props) => {
    return (
        <Col style={{
            textAlign: props.lang !== 'eng' ? 'right' : null
        }}>
            {props.children}
        </Col>
    )
}

export default FormCol