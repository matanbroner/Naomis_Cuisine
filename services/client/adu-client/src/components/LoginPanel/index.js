import React from 'react'
import localStyles from './styles.module.css'
import content from './content.json'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import ReactCodeInput from 'react-code-input'

const LoginPanel = (props) => {
    const renderTabs = () => {
        var tabs = [
            <Nav.Item 
            id={props.tab === 0 ? localStyles.active : null}
            className={localStyles.tab}
            onClick={() => props.tabChange(0)}
            >
                <Nav.Link active={props.tab === 0}>{content.logIn}</Nav.Link>
            </Nav.Item>,
            <Nav.Item 
            id={props.tab === 1 ? localStyles.active : null}
            className={localStyles.tab}
            onClick={() => props.tabChange(1)}
            >
                <Nav.Link active={props.tab === 1}>{content.register}</Nav.Link>
            </Nav.Item>
        ]
        return(
            <Nav id={localStyles.tabWrapper} justify variant="tabs">
                {tabs}
            </Nav>
        )
    }

    const renderLoginForm = () => {
        return(
            <Form className={localStyles.form} id={localStyles.loginForm}>
                <Form.Group controlId="email">
                    <Form.Label>{content.email}</Form.Label>
                    <Form.Control type="email" placeholder={content.emailPlaceholder} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>{content.password}</Form.Label>
                    <Form.Control type="password" placeholder={content.passwordPlaceholder} />
                </Form.Group>
                <div id={localStyles.forgotPassword}>
                    {content.forgotPassword}
                </div>
            </Form>
        )
    }

    const renderRegisterForm = () => {
        return(
            <React.Fragment>
            <Form className={localStyles.form} id={localStyles.registerForm}>
                <Form.Group controlId="name">
                    <Form.Label>{content.name}</Form.Label>
                    <Form.Control type="text" placeholder={content.namePlaceholder} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>{content.email}</Form.Label>
                    <Form.Control type="email" placeholder={content.emailPlaceholder} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>{content.password}</Form.Label>
                    <Form.Control type="password" placeholder={content.passwordPlaceholder} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>{content.confirmPassword}</Form.Label>
                    <Form.Control type="password" placeholder={content.confirmPasswordPlaceholder} />
                </Form.Group>
            </Form>
            <div id={localStyles.horizontalBreakWrapper}/>   
            <p id={localStyles.regCodeText}>Registration Code</p>
            <div id={localStyles.buttonWrapper}>
                <div id={localStyles.buttonWrapperCol}>
                <ReactCodeInput 
                autoFocus={false}
                onChange={(val) => console.log(val)}
                type='password' 
                fields={5} />
                </div>
            </div>
            </React.Fragment>
        )
    }

    const renderSubmitButton = (action) =>{
        let label = (function(tab) {  
            switch(tab) {
              case 0:
                return content.logIn;
              case 1:
                return content.register;
            }
          })(props.tab)
        return(
            <button 
            id={localStyles.submit}
            disabled={false}
            onClick={()=> props.onLogin()}>
                {label}
            </button>
        )
    }

    const renderPanel = () => {
        switch(props.tab){
            case 0: return renderLoginForm();
            case 1: return renderRegisterForm()
        }
    }

    return(
        <div id={localStyles.wrapper}>
            <div id={localStyles.logoWrapper}>
                <img id={localStyles.logo}/>
            </div>
            <div id={localStyles.formWrapper}>
                <div id={localStyles.formSubWrapper}>
                {renderTabs()}
                {renderPanel()}
                </div>
                {renderSubmitButton()}
            </div>
        </div>
    )
}

export default LoginPanel