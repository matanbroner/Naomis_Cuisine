import React from 'react'
import Form from 'react-bootstrap/Form'
import allContent from './content.json'

const FormSelect = (props) => {
    const content = allContent[props.lang]
    const mapOptions = (items) => {
        return Object.keys(items).map(i => <option>{items[i]}</option>)
    }

    return[
        <Form.Label>{props.label}</Form.Label>,
            <Form.Control
            as="select"
            onChange={(e) => props.onChange(e.target.value)}
            style={{
            direction: props.lang !== 'eng' 
            ? 'rtl' : 'ltr'
            }}>
            <option selected disabled>{content.select}</option>
            { mapOptions(props.items) }
            </Form.Control>
    ]
}

export default FormSelect