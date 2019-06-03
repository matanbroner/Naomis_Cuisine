import React from 'react'
import MenusPageHeader from '../../components/MenusPageHeader'
import localStyles from './styles.module.css'
import { connect } from 'react-redux';

class MenusPage extends React.PureComponent{
    constructor(props){
        super()
    }

    render(){
        return(
            <div id={localStyles.wrapper}>
                <MenusPageHeader lang={this.props.language}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = state => {
    return {
        language: state.global.language
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenusPage)