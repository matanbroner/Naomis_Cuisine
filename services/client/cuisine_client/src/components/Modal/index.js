import React from 'react';
import localStyles from './styles.module.css'

import SkyLight from 'react-skylight';

import Title from '../Title'

const Modal = (props) => {

    const dialogStyles = {
        padding: 0,
        width: '40%',
        borderRadius: '20px',
        left: '60%'
    };
    
    const closeButtonStyle = {
        right: props.lang === 'eng' ? '10px' : null,
        left: props.lang === 'heb' ? '10px' : null,
    }

    const renderTitle = () => {
        return(
            <Title 
            main={props.title}
            sub={props.subtitle}
            dir={props.lang === 'heb' ? 'rtl' : 'ltr'}/>
        )
    }

    const renderSubmitButton = (action) =>{
        return(
            <button 
            id={localStyles.submit}
            disabled={!props.submitCondition}
            onClick={()=> props.submitAction()}>
                {action}
            </button>
        )
    }

    return(
        <SkyLight 
          hideOnOverlayClicked={props.hideOnOverlayClicked}
          ref={props.setRef} 
          transitionDuration={500}
          dialogStyles={dialogStyles} 
          closeButtonStyle={closeButtonStyle}
        >
            <div id={localStyles.wrapper}>
                {renderTitle()}
                {props.children}
            </div>
            {
                props.submitAction
                ? renderSubmitButton(props.submitContent)
                : null
            }
        </SkyLight>
    )
}

export default Modal

