import React from 'react'
import localStyles from './styles.module.css'
import ComingSoon from '../../components/ComingSoon'

class AboutPage extends React.PureComponent {

    render(){
        return(
            <div id={localStyles.wrapper}>
                <div id={localStyles.comingSoonWrapper}>
                <ComingSoon/>
                </div>
            </div>
        )
    }
}

export default AboutPage