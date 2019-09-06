import React from 'react'
import localStyles from './styles.module.css'

import Form from 'react-bootstrap/Form'

import FormRow from '../../FormRow'
import FormCol from '../../FormCol'
import FormInput from '../../FormInput'
import FormSelect from '../../FormSelect'
import Button from '../../Button'

const QuoteCustomerInfo = (props) => {

    const timeToBuild = () => {
        return [
            {
                label: '1 month to 3 months',
                value: '1-3 Months'
            },
            {
                label: '3 months to 6 months',
                value: '3-6 Months'
            },
            {
                label: '6 months to 1 year',
                value: '6-12 Months'
            },
            {
                label: 'Over 1 year',
                value: '12+ Months'
            }
        ]
    }

    const financeRequired = () => {
        return [
            {
                label: 'Yes',
                value: true
            },
            {
                label: 'No',
                value: false
            }
        ]
    }

    return (
        <Form id={localStyles.formWrapper}>
            <FormRow>
                <FormCol
                xs={12}
                xl={6}
                >
                    <FormInput
                    label={'Name'}
                    required
                    type="text"
                    onChange={(v) => props.onChange('name', v)}
                    />
                </FormCol>
                <FormCol
                xs={12}
                xl={6}
                >
                    <FormInput
                    label={'Email'}
                    required
                    type="text"
                    onChange={(v) => props.onChange('email', v)}
                    />
                </FormCol>
            </FormRow>
            <FormRow>
                <FormCol
                xs={12}
                xl={6}
                >
                    <FormInput
                    label={'Phone'}
                    required
                    type="phone"
                    onChange={(v) => props.onChange('phone', v)}
                    />
                </FormCol>
                <FormCol
                xs={12}
                xl={6}
                >
                    <FormInput
                    label={'Address'}
                    type="text"
                    required
                    onChange={(v) => props.onChange('address', v)}
                    />
                </FormCol>
            </FormRow>
            <FormRow>
                <FormCol
                xs={12}
                xl={4}
                >
                    <FormInput
                    label={'City'}
                    type="text"
                    onChange={(v) => props.onChange('city', v)}
                    />
                </FormCol>
                <FormCol
                xs={12}
                xl={4}
                >
                    <FormInput
                    label={'State'}
                    type="text"
                    required
                    onChange={(v) => props.onChange('state', v)}
                    />
                </FormCol>
                <FormCol
                xs={12}
                xl={4}
                >
                    <FormInput
                    label={'Zip'}
                    type="number"
                    required
                    onChange={(v) => props.onChange('zip', v)}
                    />
                </FormCol>
            </FormRow>
            <FormRow>
                <FormCol
                xs={12}
                xl={6}
                >
                    <FormSelect
                    label="HOW FAR IN THE FUTURE DO YOU WANT TO START BUILDING?"
                    onChange={(v) => props.onChange('time_to_build', v)}
                    items={timeToBuild()}
                    />
                </FormCol>
                <FormCol
                xs={12}
                xl={6}
                >
                    <FormSelect
                    label="FINANCE REQUIRED"
                    onChange={(v) => props.onChange('finance_required', v)}
                    items={financeRequired()}
                    />
                </FormCol>
            </FormRow>
            <FormRow className={localStyles.submitRow}>
                <Button
                onClick={() => console.log}
                className={localStyles.submitButton}
                label='SUBMIT'
                />
            </FormRow>
        </Form>
    )
}

export default QuoteCustomerInfo