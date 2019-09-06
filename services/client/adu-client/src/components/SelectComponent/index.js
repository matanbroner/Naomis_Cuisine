import React, { useState } from 'react'
import localStyles from './styles.module.css'
import AnimateHeight from 'react-animate-height'

const options = [
    { 
        label: 'Model 750',
        sub: '2 rooms, 2 bath, 1500 sqft.',
        value: 6300
    },
    { 
        label: 'Model 900',
        value: 6300
    },
    { 
        label: 'Model 870',
        sub: '1 rooms, 2 bath, 35000 sqft.',
        value: 6300
    },
    { 
        label: 'Model 123',
        sub: '5 rooms, 0 bath, 1500 sqft.',
        value: 6300
    }
  ]

const SelectComponent = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [hasText, setLabel] = useState(null)
    
    const renderSelectHead = () => {
        return(
            <div id={localStyles.headWrapper}>
                <div 
                className={localStyles.blockOption} 
                id={localStyles.selectHead}
                onClick={() => setOpen(!isOpen)}
                >
                    {
                        hasText ?
                        renderOptionText(hasText)
                        : <span id={localStyles.defaultText}>Select...</span>
                    }
                </div>
            </div>
        )
    }

    const renderSelectOptions = () => {
        return (
            <AnimateHeight
                    duration={ 600 }
                    height={ isOpen ? null : 0 } // see props documentation bellow
                    >
                        <div>
                        {mapOptions()}
                        </div>
            </AnimateHeight>
        )
    }

    const mapOptions = () => {
        return options.map((option) => {
            return(
                <div 
                    className={`${localStyles.option} ${localStyles.blockOption}`} 
                    onClick={() => {
                        setLabel(option)
                        setOpen(!isOpen)
                    }}
                >
                    {renderOptionText(option)}
                </div>
            )
        })
    }

    const renderOptionText = (option) =>{
        return(
            <div className={localStyles.optionTextGroup}>
                <p className={localStyles.label}>
                        {option.label}
                </p>
                <p className={localStyles.subLabel}>
                    {option.sub}
                </p>
            </div>
        )
    }

    return(
        <div id={localStyles.wrapper}>
            {renderSelectHead()}
            {renderSelectOptions()}
        </div>
    )
}

export default SelectComponent