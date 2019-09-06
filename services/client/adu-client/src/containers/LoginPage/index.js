import React from 'react'
import { connect } from 'react-redux'
import {
    appendNotification
} from '../../actions/Notifications'
import {
    Welcome
} from '../../constants/NotificationTypes'
import localStyles from './styles.module.css'
import LoginPanel from '../../components/LoginPanel'

class LoginPage extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            tab: 0
        }
    }
    
    render(){
        return(
            <div id={localStyles.wrapper}>
                <LoginPanel
                tab={this.state.tab}
                tabChange={(tab) => this.setState({ tab })}
                onLogin={() => this.props.appendNotification(Welcome)}
                />
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        appendNotification: (notification) => dispatch(appendNotification(notification))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)