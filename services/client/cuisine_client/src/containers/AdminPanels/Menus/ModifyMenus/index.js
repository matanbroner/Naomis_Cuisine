import React from 'react'
import localStyles from './styles.module.css'
import { connect } from 'react-redux'
import {
   setMenuScheduleDate,
   scheduleMenu
} from '../../../../actions/Menus'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TitledPanel from '../../../../components/TitledPanel'
import MenuPreviewRow from '../../../../components/MenuPreviewRow'
import MenuInfoModal from '../../../../components/Modals/MenuInfo'
import MenuScheduleModal from '../../../../components/Modals/MenuSchedule'

import allContent from './content.json'

const test_data = [
    {
        id: 1234,
        name: 'Banana Bread With Raisins and Cherries',
        photo: 'http://clipart-library.com/img1/294226.png',
        search: {
            key: 'banana',
            value: 'Banana Bread'
        }
    },
    {
        id: 4321,
        name: 'Chicken',
        photo: 'https://banner2.kisspng.com/20180422/vsw/kisspng-computer-icons-avatar-clip-art-avatar-clipart-5adc76f00a6fd9.0057593015243978080428.jpg',
        search: {
            key: 'chicken',
            value: 'Chicken'
        }
    },
    {
        id: 9876,
        name: 'Sushi',
        photo: 'https://www.pinclipart.com/picdir/middle/40-401941_big-image-female-avatar-clipart.png',
        search: {
            key: 'sushi',
            value: 'Sushi'
        }
    },
    {
        id: 1234,
        name: 'Banana Bread With Raisins and Cherries',
        photo: 'http://clipart-library.com/img1/294226.png',
        search: {
            key: 'banana',
            value: 'Banana Bread'
        }
    },
    {
        id: 4321,
        name: 'Chicken',
        photo: 'https://banner2.kisspng.com/20180422/vsw/kisspng-computer-icons-avatar-clip-art-avatar-clipart-5adc76f00a6fd9.0057593015243978080428.jpg',
        search: {
            key: 'chicken',
            value: 'Chicken'
        }
    },
    {
        id: 9876,
        name: 'Sushi',
        photo: 'https://www.pinclipart.com/picdir/middle/40-401941_big-image-female-avatar-clipart.png',
        search: {
            key: 'sushi',
            value: 'Sushi'
        }
    },
    {
        id: 1234,
        name: 'Banana Bread With Raisins and Cherries',
        photo: 'http://clipart-library.com/img1/294226.png',
        search: {
            key: 'banana',
            value: 'Banana Bread'
        }
    },
    {
        id: 4321,
        name: 'Chicken',
        photo: 'https://banner2.kisspng.com/20180422/vsw/kisspng-computer-icons-avatar-clip-art-avatar-clipart-5adc76f00a6fd9.0057593015243978080428.jpg',
        search: {
            key: 'chicken',
            value: 'Chicken'
        }
    },
    {
        id: 9876,
        name: 'Sushi',
        photo: 'https://www.pinclipart.com/picdir/middle/40-401941_big-image-female-avatar-clipart.png',
        search: {
            key: 'sushi',
            value: 'Sushi'
        }
    },
    {
        id: 1234,
        name: 'Banana Bread With Raisins and Cherries',
        photo: 'http://clipart-library.com/img1/294226.png',
        search: {
            key: 'banana',
            value: 'Banana Bread'
        }
    },
    {
        id: 4321,
        name: 'Chicken',
        photo: 'https://banner2.kisspng.com/20180422/vsw/kisspng-computer-icons-avatar-clip-art-avatar-clipart-5adc76f00a6fd9.0057593015243978080428.jpg',
        search: {
            key: 'chicken',
            value: 'Chicken'
        }
    },
    {
        id: 9876,
        name: 'Sushi',
        photo: 'https://www.pinclipart.com/picdir/middle/40-401941_big-image-female-avatar-clipart.png',
        search: {
            key: 'sushi',
            value: 'Sushi'
        }
    }
]

class AdminModifyMenu extends React.PureComponent{
    constructor(props){
        super(props)

        this.setInfoModal = this.setInfoModal.bind(this)
        this.setScheduleModal = this.setScheduleModal.bind(this)
    }

    setInfoModal(ref){
        this.infoModal = ref
    }

    setScheduleModal(ref){
        this.scheduleModal = ref
    }

    renderMenuRows(){
        let rows = []
        for (let i = 0; i < 3; i++){
            rows.push(
                <MenuPreviewRow
                lang={this.props.language}
                isActive={false}
                items={test_data}
                infoModal={() => this.infoModal.show()}
                scheduleModal={() => this.scheduleModal.show()}
                />
            )
        }
        return rows
    }

    renderInfoModal(){
        return(
            <MenuInfoModal 
            lang={this.props.language}
            setRef={this.setInfoModal}/>
        )
    }

    renderScheduleModal(){
        return(
            <MenuScheduleModal 
            lang={this.props.language}
            setRef={this.setScheduleModal}
            setDate={(date) => this.props.setMenuScheduleDate(date)}
            schedule={() => this.props.scheduleMenu(this.props.menu.id)}
            date={this.props.schedule.date}
            />
        )
    }

    render(){
        const content = allContent[this.props.language]
        return(
            <TitledPanel
            title={content.title}
            lang={this.props.language}
            >
                {this.renderMenuRows(content)}
                {this.renderInfoModal()}
                {this.renderScheduleModal()}
            </TitledPanel>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.global.language,
        schedule: state.menus.schedule
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuScheduleDate: (date) => dispatch(setMenuScheduleDate(date)),
        scheduleMenu: (id) => dispatch(scheduleMenu(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminModifyMenu)