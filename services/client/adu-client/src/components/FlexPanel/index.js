import React from 'react'
import Container from 'react-bootstrap/Container'
import localStyles from './styles.module.css'

const FlexPanel = (props) => {

    return (
        <Container id={localStyles.wrapper}>
            {props.children}
        </Container>
    )
}

export default FlexPanel