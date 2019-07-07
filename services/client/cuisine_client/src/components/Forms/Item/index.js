import React from 'react'
import localStyles from './styles.module.css'
import Form from 'react-bootstrap/Form'

import FormInput from '../../FormInput'
import FormRow from '../../FormRow'
import FormCol from '../../FormCol'
import FormSelect from '../../FormSelect'

const ItemForm = (props) => {

    const renderMainForm = (content) => {
        return(
            <React.Fragment>
                <Form id={localStyles.form}>
                    <FormRow lang={props.language}>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.name + ' ' + content.v_english}
                            type="text"
                            onChange={(v) => props.modifyFormState('name_eng', v)}
                            />
                        </FormCol>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.name + ' ' + content.v_hebrew}
                            type="text"
                            onChange={(v) => props.modifyFormState('name_heb', v)}
                            />
                        </FormCol>
                    </FormRow>
                    <FormRow lang={props.language}>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.available}
                            type="date"
                            onChange={(v) => props.modifyFormState('date', v)}
                            />
                        </FormCol>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.serves}
                            type="number"
                            onChange={(v) => props.modifyFormState('serves', v)}
                            />
                        </FormCol>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.price}
                            type="number"
                            min="0.01" 
                            step="0.01"
                            onChange={(v) => props.modifyFormState('price', v)}
                            />
                        </FormCol>
                        <FormCol lang={props.language}>
                            <FormSelect
                            onChange={(v) => props.modifyFormState('type', v)}
                            label={content.type}
                            lang={props.language}
                            items={content.types}
                            />
                        </FormCol>
                    </FormRow>
                    <FormRow lang={props.language}>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.description + ' ' + content.v_english}
                            type="textarea"
                            rows={5}
                            onChange={(v) => props.modifyFormState('description', v)}
                            />
                        </FormCol>
                        <FormCol lang={props.language}>
                            <FormInput
                            lang={props.language}
                            label={content.description + ' ' + content.v_hebrew}
                            type="textarea"
                            rows={5}
                            onChange={(v) => props.modifyFormState('description', v)}
                            />
                        </FormCol>
                    </FormRow>
                </Form>
            </React.Fragment>
        )
    }

    return(
        <div>
            {
                renderMainForm(props.content)
            }
        </div>
    )
}

export default ItemForm