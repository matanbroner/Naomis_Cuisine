import React from 'react'
import Form from 'react-bootstrap/Form'
import localStyles from './styles.module.css'

const FormInput = (props) => {

    const renderContent = () => {
        if (props.custom){
            return(
                <div className="form-control">
                    {props.custom}
                </div>
            )
        } else if (props.type === 'textarea'){
            return (
                <textarea 
                className="form-control" 
                rows={props.rows}
                placeholder={props.placeholder} 
                onChange={e => props.onChange(e.target.value)}
                />
            )
        } else {
            return (
                <Form.Control
                id={localStyles.formInput} 
                onChange={e => props.onChange(e.target.value)}
                type={props.type} 
                placeholder={props.placeholder} 
                required={props.required}
                min={props.min}
                step={props.step}
                rows={props.rows}
                />
            )
        }
    }

    const label = () => {
        var label = props.label
        if(props.required){
            label += ' (required)'
        }

        return label
    }

    return[
        <Form.Label id={localStyles.formLabel}>
            {label()} 
        </Form.Label>,
        renderContent()
    ]
}

export default FormInput
