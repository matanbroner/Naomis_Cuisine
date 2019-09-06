import React from 'react';
import {Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import AnimateHeight from 'react-animate-height'
import {Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {
    HOME_PAGE,
    ABOUT_PAGE,
    LOGIN_PAGE
} from '../../constants/Url'
import Condition from '../../components/Condition'
import './styles.css'
import roles from '../../constants/Roles'
import content from './content.json'
import { connect } from 'react-redux';

class NavigationBar extends React.PureComponent{
    constructor(props){
        super()

        this.state = {
            opacity: 1,
            models: false,
            search: false
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', () => { // blur navbar on scroll
            let opacity = 1 - (0.001 * window.pageYOffset )
            if (this.state.opacity >= 0.5 && opacity >= 0.5)
                this.setState({opacity})
        });
      }

    renderModelsDropdown(){
        return(
            <NavDropdown title="Models" id="basic-nav-dropdown" 
            onMouseEnter={() => this.setState({models: true})}
            onMouseLeave={() => this.setState({models: false})}
            >
            <AnimateHeight
                    duration={ 500 }
                    height={ this.state.models ? null : 0 } // see props documentation bellow
                    >
                        <NavDropdown.Item onClick={() => this.props.history.push("/model")} >Model 750</NavDropdown.Item>
                        <NavDropdown.Item >Model 980</NavDropdown.Item>
                        <NavDropdown.Item >Model 124</NavDropdown.Item>
                        <NavDropdown.Item >Model 865</NavDropdown.Item>
                        <NavDropdown.Item >Model 231</NavDropdown.Item>
            </AnimateHeight>
            </NavDropdown>
        )
    }


    renderLinks(){
        const routes = content.links
        var links = [
            <Nav.Link key={routes.home} as={Link} to={HOME_PAGE}>{routes.home}</Nav.Link>,
            <Nav.Link key={routes.about} as={Link} to={ABOUT_PAGE}>{routes.about}</Nav.Link>,
            <Nav.Link key={routes.media} as={Link} to={ABOUT_PAGE}>{routes.media}</Nav.Link>,
            this.renderModelsDropdown(),
            <Nav.Link key={'Log In'} as={Link} to={LOGIN_PAGE}>{
                <div>
                    <span id='navLoginHeaderText'>Log In</span>
                    <FontAwesomeIcon  icon={faUser}/>
                </div>
            }</Nav.Link>
            // <Condition is={this.props.user.role === roles.ADMIN}>
            //     <Nav.Link key={routes.admin} as={Link} to={ADMIN_PAGE}>{routes.admin}</Nav.Link>
            // </Condition>
        ]
        return links
    }

    render(){
        return (
            <div>
                <Navbar style={{opacity: this.state.opacity}} fixed="top" id={this.props.isPageTop ? null : 'scrolledNav'} expand="lg">
                <Navbar.Brand href="#home">Affordable ADU Experts</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {this.renderLinks()}
                    </Nav>
                </Navbar.Collapse>
                {/* <FontAwesomeIcon color="white" size="2x" icon={faUser}/> */}
                </Navbar>
            </div>
          );
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = state => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar))


