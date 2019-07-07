import React from 'react'
import localStyles from './styles.module.css'
import { connect } from 'react-redux'
import AdminPageHeader from '../../../components/AdminPageHeader'
import CircleDisplay from '../../../components/CircleDisplay'

class AdminMainPanel extends React.PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{fontSize: '50px'}}>
                <AdminPageHeader 
                changeTab={(tab) => this.setState({ tab })} 
                lang={this.props.language}
                />
                <div id={localStyles.circlesWrapper}>
                    <CircleDisplay color='#00c1f9' mainText='120' subText='Orders to Date'/>
                    <CircleDisplay color='#ffb734' mainText='30' subText='Orders This Month'/>
                    <CircleDisplay color='#ff4185' mainText='10' subText='Orders This Week'/>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminMainPanel)
