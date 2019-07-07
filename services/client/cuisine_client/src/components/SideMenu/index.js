import React, { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink, withRouter } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import localStyles from './styles.module.css'
import setPadding from '../../utils/padding'

const SideMenu = (props) => {
    const { location, match } = props
    const [mainOpen, toggleSideMenu] = useState(true)
    const [closed, toggleList] = useState([])

    const styles = () => {
        var styles = {
            ...determineWidth()
        }
        if (props.styles){
            styles = {
                styles,
                ...props.styles
            }
        }
        return styles
    }

    const determineWidth = () =>{
        return {
            width: mainOpen
            ? '18vw'
            : 0
        }
    }

    const createNavIconText = (nav) => {
        if (props.lang === 'eng'){
            return(
                <p id={localStyles.navTitle}>
                    <span id={localStyles.icon}>
                        {nav.icon || null}
                    </span>
                    {nav.title}
                </p>
            )
        } else {
            return(
                <p id={localStyles.navTitle}>
                    {nav.title}
                    <span id={localStyles.icon}>
                        {nav.icon || null}
                    </span>
                </p>
            )
        }
    }

    const mapNavs  = () => {
        return props.navs.map((nav, index) => {
            return(
                nav.list 
                ?   <React.Fragment>
                    <div id={localStyles.navWrapper}
                    style={{
                        textAlign: props.lang === 'eng' ? 'left' : 'right'
                    }}
                    onClick={() => {
                        if (closed.findIndex(i => i === index) === -1) toggleList([...closed, index])
                        else toggleList(closed.filter(i => i != index))
                    }}
                    >
                    {
                        createNavIconText(nav)
                    }
                    </div>
                    <SlideDown className={localStyles.navList}>
                        {closed.findIndex(i => i === index) === -1 ? mapLinks(nav.list) : null}
                    </SlideDown>
                    </React.Fragment>
                : <NavLink
                    to={match.path + nav.link}
                    activeStyle={{
                    textDecoration: 'none',
                    color: 'black'
                    }}
                    >
                        <p id={localStyles.navTitle}>
                        {nav.icon || null}
                        {nav.title}</p>
                    </NavLink>
            )
        })
    }

    const mapLinks = (links) => {
        const navs = links.map(nav => {
            return(
                <p id={localStyles.link}>
                    {nav.icon || null}
                <NavLink
                to={match.path + nav.link}
                activeStyle={{
                    fontWeight: 500,
                    color: 'black'
                    }}
                >
                    {nav.title}
                </NavLink>
                </p>
            )
        })

        return navs
    }

    const renderButton = () => {
        return (
            <button
            onClick={() => toggleSideMenu(!mainOpen)}
            id={localStyles.button}
            style={{
                float: props.lang === 'eng' ? 'right' : 'left'
            }}
            >
                <FontAwesomeIcon icon={faBars}/>
            </button>
        )
    }

    return(
        <Col xs={9} md={2} id={localStyles.wrapper} style={styles()}
            >
            {renderButton()}
            <div id={localStyles.content}>
            {
                props.navs.length
                ? mapNavs()
                : null
            }
            </div>
        </Col>
    )
}

export default withRouter(SideMenu)