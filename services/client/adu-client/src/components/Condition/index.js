import React from 'react'

const Condition = (props) => {

    const redirectIfFalse = () => {
        if(!props.is && props.redirect){
            window.location.href = '/'
        }
    }

    redirectIfFalse()

    return(
        <React.Fragment>
            {
                props.is
                ? props.children
                : null
            }
        </React.Fragment>
    )
}

export default Condition