import React from 'react'
import localStyles from './styles.module.css'
import allContent from './content.json'

import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

const LoginPanel = (props) => {
    const content = allContent[props.lang]
    console.log(content)
    const renderTabs = (content) => {
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
        if (props.lang === 'heb'){
            tabs = tabs.reverse()
        }
        return(
            <Nav id={localStyles.tabWrapper} justify variant="tabs">
                {tabs}
            </Nav>
        )
    }

    const renderLoginForm = (content) => {
        return(
            <Form className={localStyles.form} id={localStyles.loginForm}>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <div id={localStyles.forgotPassword}>
                    Forgot your password?
                </div>
            </Form>
        )
    }

    const renderRegisterForm = (content) => {
        return(
            <React.Fragment>
            <Form className={localStyles.form} id={localStyles.registerForm}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
            </Form>
            <div id={localStyles.horizontalBreakWrapper}>
                <span id={localStyles.horizontalBreakText}>
                    or
                </span>
            </div>
            <div id={localStyles.buttonWrapper}>
                <div id={localStyles.buttonWrapperCol}>
                    <p>Register with Paypal </p>
                    <button id={localStyles.paypalButton}>
                        <FontAwesomeIcon size="2x" icon={faPaypal}/>
                    </button>
                </div>
            </div>
            </React.Fragment>
        )
    }

    const renderSubmitButton = (action) =>{
        return(
            <button 
            id={localStyles.submit}
            disabled={!props.submitCondition}
            onClick={()=> props.submitAction()}>
                Submit
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
                {renderTabs(content)}
                {
                    renderPanel()
                }
                </div>
                {renderSubmitButton(content)}
            </div>
        </div>
    )
}

export default LoginPanel