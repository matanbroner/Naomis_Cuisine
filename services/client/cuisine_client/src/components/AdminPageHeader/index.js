import React from 'react'
import Col from 'react-bootstrap/Col'
import Title from '../Title'
import localStyles from './styles.module.css'
import allContent from './content.json'

const AdminPageHeader = (props) => {
    const content = allContent[props.lang]

    return(
        <Col xs={11}>
        <div id={localStyles.wrapper}>
            <Title 
            main={content.title}
            sub={content.subtitle} 
            dir={props.lang === 'heb' ? 'rtl' : 'ltr'}/>
            
        </div>
        </Col>
    )
}

export default AdminPageHeader