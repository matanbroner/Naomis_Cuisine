import React from 'react'
import Form from 'react-bootstrap/Form'

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
                style={
                    {
                        ...props.bodyStyles,
                        textAlign: props.lang !== 'eng' ? 'right' : null,
                        direction: props.lang !== 'eng' ? 'rtl' : null
                    }
                }
                />
            )
        } else {
            return (
                <Form.Control 
                onChange={e => props.onChange(e.target.value)}
                type={props.type} 
                placeholder={props.placeholder} 
                min={props.min}
                step={props.step}
                rows={props.rows}
                style={
                    {
                        ...props.bodyStyles,
                        textAlign: props.lang !== 'eng' ? 'right' : null,
                        direction: props.lang !== 'eng' ? 'rtl' : null
                    }
                }
                />
            )
        }
    }

    return[
        <Form.Label
        style={{
            direction: props.lang !== 'eng' ? 'rtl' : null
        }}
        >{props.label}</Form.Label>,
        renderContent()
    ]
}

export default FormInput
