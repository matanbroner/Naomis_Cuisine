import React from 'react';
import {Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    HOME_PAGE,
    ABOUT_PAGE,
    MENUS_PAGE
} from '../../constants/Url'
import {
    changeLanguage
} from '../../actions/Global'
import LanguageToggler from '../../components/LanguageToggler'
import './styles.css'
import content from './content.json'
import { connect } from 'react-redux';

class NavigationBar extends React.PureComponent{
    constructor(props){
        super()

        this.state = {
            opacity: 1
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', () => { // blur navbar on scroll
            let opacity = 1 - (0.001 * window.pageYOffset )
            if (this.state.opacity >= 0.5 && opacity >= 0.5)
                this.setState({opacity})
        });
      }

    renderLinks(){
        const routes = content[this.props.language].links
        var links = [
            <Nav.Link key={routes.home} as={Link} to={HOME_PAGE}>{routes.home}</Nav.Link>,
            <Nav.Link key={routes.about} as={Link} to={ABOUT_PAGE}>{routes.about}</Nav.Link>,
            <Nav.Link key={routes.how_it_works} as={Link} to={HOME_PAGE}>{routes.how_it_works}</Nav.Link>,
            <Nav.Link key= {routes.menus} as={Link} to={MENUS_PAGE}>{routes.menus}</Nav.Link>,
            <Nav.Link key={routes.custom} as={Link} to={HOME_PAGE}>{routes.custom}</Nav.Link>,
            <Nav.Link key={routes.profile} as={Link} to={HOME_PAGE}>{routes.profile}</Nav.Link>
        ]
        if (this.props.language === 'eng') return links
        else {
            links = links.reverse()
            return links
        }
    }
    render(){
        return (
            <div>
                <Navbar style={{opacity: this.state.opacity}} fixed="top" id={this.props.isPageTop ? null : 'scrolledNav'} expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {this.renderLinks()}
                    </Nav>
                    <Nav>
                        <LanguageToggler trigger={(lang) => this.props.triggerLanguage(lang)}/>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
          );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerLanguage: (lang) => dispatch(changeLanguage(lang))
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.profile,
        language: state.global.language,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)


