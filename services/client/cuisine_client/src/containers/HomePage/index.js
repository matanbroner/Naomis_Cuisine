import React from 'react'
import { Parallax, Background } from 'react-parallax'
import localStyles from './styles.module.css'
import Loading from '../../components/Loading'
import { setProfile } from '../../actions/User'
import { connect } from 'react-redux';

class HomePage extends React.Component{
    
    render(){
        return(
            <div id={localStyles.wrapper}>
                <Parallax
                blur={2}
                bgImage={'https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/media/restaurants/bavel_dtla_dishes.jpg?h=a1e1a043&itok=Pd84rCI2'}
                bgImageAlt="the cat"
                strength={1000}
                >
                    <div id={localStyles.logoWrapper}>
                        <img id={localStyles.logo}/>
                    </div>
                </Parallax>
                <Loading language={this.props.language}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        profile: state.user.profile,
        language: state.global.language
    }
}

export default connect(mapStateToProps)(HomePage)