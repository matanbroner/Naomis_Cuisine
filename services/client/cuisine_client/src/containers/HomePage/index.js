import React from 'react'
import { connect } from 'react-redux';
import { setProfile } from '../../actions/User'

let new_prof = {
    name: 'Jean Boulanger'
}

class HomePage extends React.Component{
    render(){
        return(
            <div>
                Home Page!
                <button onClick={() => {
                    this.props.dispatch(setProfile(new_prof))
                }}>
                    Click me for Redux!
                </button>
                <div>
                    {this.props.profile.name}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        profile: state.user.profile
    }
}

export default connect(mapStateToProps)(HomePage)