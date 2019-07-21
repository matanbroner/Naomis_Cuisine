import React from 'react'
import Modal from '../../Modal'
import DatePicker from '../../DatePicker'
import localStyles from './styles.module.css'
import allContent from './content.json'


import {
    dateFormat
} from '../../../utils/date'

const MenuScheduleModal = (props) => {
    const content = allContent[props.lang]
    const setRef = (ref) => {
        props.setRef(ref)
    }

    return(
        <Modal
        setRef={setRef}
        title={content.title}
        lang={props.lang}
        hideOnOverlayClicked
        >
            <div id={localStyles.wrapper} style={{
                textAlign: props.lang === 'heb' ? 'right' : 'left',
                direction: props.lang === 'heb' ? 'rtl' : 'ltr'
            }}>
                <div id={localStyles.dateWrapper}>
                    <DatePicker
                    onChange={(date) => props.setDate(date)}
                    lang={props.lang}
                    />
                </div>
                <p id={localStyles.selectedDate}>
                {
                    props.date
                    ? content.youChose + dateFormat(props.date, props.lang)
                    : content.pickADate
                }
                </p>
            </div>
        </Modal>
    )
}

export default MenuScheduleModal