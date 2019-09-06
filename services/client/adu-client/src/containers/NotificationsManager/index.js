import React from 'react'
import 'react-notifications/lib/notifications.css';
import './styles.module.css'

import { 
    NotificationContainer,
    NotificationManager 
} from 'react-notifications';
import {
    removeNotification
} from '../../actions/Notifications'
import { connect } from 'react-redux'

class NotificationsManager extends React.PureComponent {

    mapNotifications(){
        if(this.props.bank.length){
            return this.props.bank.map(item => {
                NotificationManager[item.status](
                    <p style={{
                        textAlign: this.props.language === 'heb' ? 'right' : null,
                        direction: this.props.language === 'heb' ? 'rtl' : null
                    }}>
                        {item.text[this.props.language]}
                    </p>,
                    null,
                    3000,
                    this.props.removeNotification(item.id)
                )
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <NotificationContainer/>
                {this.mapNotifications()}
                {this.props.children}
            </React.Fragment>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        bank: state.notifications.bank,
        language: state.global.language
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeNotification: (id) => dispatch(removeNotification(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsManager)