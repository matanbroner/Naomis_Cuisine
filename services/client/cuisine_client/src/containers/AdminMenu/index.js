
import React from 'react'
import { connect } from 'react-redux';
import localStyles from './styles.module.css'
import links from './links'
import SideMenu from '../../components/SideMenu'

class AdminMenu extends React.PureComponent{
    render(){
        return(
            <SideMenu
            navs={links(this.props.lang)}
            lang={this.props.lang}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.global.language
    }
}

export default connect(mapStateToProps)(AdminMenu)