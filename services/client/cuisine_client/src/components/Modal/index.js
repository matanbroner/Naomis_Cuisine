import React from 'react';
import SkyLight from 'react-skylight';

import Title from '../Title'

const Modal = (props) => {

    const dialogStyles = {
        padding: '30px',
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

    return(
        <SkyLight 
          hideOnOverlayClicked={props.hideOnOverlayClicked}
          ref={props.setRef} 
          title={renderTitle()}
          transitionDuration={500}
          dialogStyles={dialogStyles} 
          closeButtonStyle={closeButtonStyle}
        >
            {props.children}
        </SkyLight>
    )
}

export default Modal