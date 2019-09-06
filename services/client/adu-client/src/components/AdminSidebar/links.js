import {
    faUserTag,
    faCogs,
    faEdit,
    faListUl,
    faTachometerAlt,
    faHome,
    faCity
} from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        [
            {
                title: "Site Activity",
                link: "/activity",
                icon: faTachometerAlt
            },
            {
                title: "Customers",
                link: "/customers",
                icon: faUserTag
            },
            {
                title: "All Models",
                link: "/model/all",
                icon: faCity
            },
            {
                title: "Create a Model",
                link: "/model/new",
                icon: faHome
            },
            {
                title: "Create a Quote",
                link: "/quotes/new",
                icon: faEdit
            },
            {
                title: "Open Quotes",
                link: "/quotes/all",
                icon: faListUl
            },
            {
                title: "Settings",
                link: "/settings",
                icon: faCogs
            }
        ]
    )
}