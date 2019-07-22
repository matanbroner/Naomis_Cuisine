import React from 'react'
import { connect } from 'react-redux'
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
                lang={this.props.language}
                />
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        language: state.global.language
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)