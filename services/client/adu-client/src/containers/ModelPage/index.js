import React from 'react'
import localStyles from './styles.module.css'
import { connect } from 'react-redux'

import ModelDetailsPanel from '../../components/ModelDetailsPanel'
import ModelPriceBuilder from '../../components/ModelPriceBuilder'
import TitledText from '../../components/TitledText'
import Title from '../../components/Title'

class ModelPage extends React.PureComponent{

    lorem(){
        return 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
    }

    renderModelPriceBuilder(){
        return(
            <div id={localStyles.priceBuilderWrapper}>
                <ModelPriceBuilder
                />
            </div>
        )
    }

    render(){
        return(
            <div id={localStyles.wrapper}>
                <Title
                main="Model 750"
                sub="A modern twist on a classic cabin."
                />
                <ModelDetailsPanel/>
                <iframe 
                title="A 3D model" 
                width="100%" 
                height="480" 
                src="https://sketchfab.com/models/d313271816dd43c6b19075519a24e476/embed?autostart=1&amp;preload=1" 
                frameborder="0" 
                allow="autoplay; fullscreen; vr" 
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"/>
                <TitledText
                title={'Here is a Title!'}
                text={this.lorem()}
                />
                {this.renderModelPriceBuilder()}

            </div>

        )
    }
}

export default connect(null)(ModelPage)
