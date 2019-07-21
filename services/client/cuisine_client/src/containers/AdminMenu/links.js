import allContent from './content.json'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faHamburger, faCalendar } from '@fortawesome/free-solid-svg-icons' 

const links = (lang) => {
    const content = allContent[lang]
    return(
        [
            {
                title:  content.items.manage,
                icon: <FontAwesomeIcon icon={faHamburger}/>,
                list: [
                    {
                        title: content.items.create,
                        link: '/items/create'
                    },
                    {
                        title: content.items.modify,
                        link: '/items/modify'
                    }
                ]
            },
            {
                title:  content.menus.manage,
                icon: <FontAwesomeIcon icon={faClipboardList}/>,
                list: [
                    {
                        title: content.menus.create,
                        link: '/menus/create'
                    },
                    {
                        title: content.menus.modify,
                        link: '/menus/modify'
                    }
                ]
            }
        ]
    )
}

export default links