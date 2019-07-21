import React from 'react'
import localStyles from './styles.module.css'
import Title from '../Title'
import Row from 'react-bootstrap/Row'


const TitledPanel = (props) => {

    const renderButtonPanel = () => {
        return(
            <div id={localStyles.buttonWrapper}>
                {props.buttonComponent}
            </div>
        )
    }

    return (
        <div id={localStyles.wrapper}>
                <div id={localStyles.subWrapper}>
                    <div id={localStyles.header}
                    style={{
                        justifyContent: props.lang === 'eng'
                        ? 'flex-start'
                        : 'flex-end'
                    }}
                    >
                        <Row>
                            <Title 
                            main={props.title}
                            sub={props.subtitle}
                            dir={props.lang === 'heb' ? 'rtl' : 'ltr'}/>
                        </Row>
                    </div>
                {props.children}
                </div>
                {
                    props.buttonComponent
                    ? renderButtonPanel()
                    : null
                }
        </div>
    )
}

export default TitledPanel