import React from 'react'
import Form from 'react-bootstrap/Form'
import localStyles from './styles.module.css'

const FormRow = (props) => {

    var content = React.Children.toArray(props.children);

    return (
        <Form.Row className={props.className} id={localStyles.wrapper}>
            {content}
        </Form.Row>
    )
}

export default FormRow