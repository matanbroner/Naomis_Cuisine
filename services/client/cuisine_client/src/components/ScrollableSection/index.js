import React from 'react'
import localStyles from './styles.module.css'


const ScrollableSection = (props) => {

    const reverse = () => {
        if(props.reverse){
            if(props.horizontal){
                return 'row-reverse'
            } else {
                return 'column-reverse'
            }
        } else {
            return null
        }
    }

    const styles = {
        display: `${props.horizontal ? 'flex' : null}`,
        height: props.height || 'auto',
        width: props.width || 'auto',
        flexDirection: reverse()
    }

    const renderItems = () => {
        return props.children.map(item => {
            return(
                <div className={localStyles.card} style={{
                    width: props.cardWidth
                }}>
                    {item}
                </div>
            )
        })
    }

    return(
        <div className={localStyles.scrolling_wrapper_flexbox} style={styles}>
            {renderItems()}
        </div>
    )
}

export default ScrollableSection