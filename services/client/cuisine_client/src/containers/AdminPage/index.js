
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import localStyles from './styles.module.css'
import AdminMenu from '../AdminMenu'
import FlexPanel from '../../components/FlexPanel'
import Condition from '../../components/Condition'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import roles from '../../constants/Roles'
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom'

import MainPanel from '../AdminPanels/MainPanel'

// Items Panels
import CreateItems from '../AdminPanels/Items/CreateItems'
import ModifyItems from '../AdminPanels/Items/ModifyItems'

// Menus Panel
import CreateMenus from '../AdminPanels/Menus/CreateMenus'
import ModifyMenus from '../AdminPanels/Menus/ModifyMenus'


class AdminPage extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            tab: null
        }
    }

    styles(){
        return {
            paddingLeft: this.props.language === 'eng' ? 0 : '40px',
            paddingRight: this.props.language === 'heb' ? 0 : '40px'
        }
    }

    content(){
        var components = [
            <Col xs={10} id={localStyles.mainContent}>
            <Route exact path={`${this.props.match.path}`} component={MainPanel}/>
            <Route path={`${this.props.match.path}/items/create`} component={CreateItems} />
            <Route path={`${this.props.match.path}/items/modify`} component={ModifyItems} />

            <Route path={`${this.props.match.path}/menus/create`} component={CreateMenus} />
            <Route path={`${this.props.match.path}/menus/modify`} component={ModifyMenus} />
            </Col>
        ]
        if (this.props.language === 'eng'){
            components.unshift(<AdminMenu/>)
        } else {
            components.push(<AdminMenu/>)
        }
        return components
    }
    
    render(){
        return(
            <div id={localStyles.wrapper}>
            <Condition 
            is={this.props.user.role === roles.ADMIN}
            redirect
            >
                <Row>
                    {this.content()}
                </Row>
            </Condition>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.profile,
        language: state.global.language
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)