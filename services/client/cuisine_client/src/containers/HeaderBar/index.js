import React from 'react'
import localStyles from './styles.css'
import { connect } from 'react-redux';


class HeaderBar extends React.PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        language: state.global.language
    }
}

export default connect(mapStateToProps)(HeaderBar)