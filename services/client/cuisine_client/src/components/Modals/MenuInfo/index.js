import React from 'react'
import Modal from '../../Modal'
import localStyles from './styles.module.css'
import allContent from './content.json'

import {
    dateFormat
} from '../../../utils/date'

import Table from 'react-bootstrap/Table'

const MenuInfoModal = (props) => {
    const content = allContent[props.lang]
    const setRef = (ref) => {
        props.setRef(ref)
    }

    const tableHead = (content) => {
        var headers = [
            <th>#</th>,
            <th>{content.dateActive}</th>,
            <th>{content.dateInactive}</th>
        ]
        return headers
    }

    const tableBody = (content) => {
        var body = [
            <td>1</td>,
            <td>{dateFormat(new Date('1995-12-17'), props.lang)}</td>,
            <td>{dateFormat(new Date(), props.lang)}</td>
        ]
        return body
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
                <p><strong>{content.createDate}:</strong> June 6, 2019</p>
                <p><strong>{content.itemCount}:</strong> 12</p>
                <p><strong>{content.active}:</strong> No</p>
                <p><strong>{content.scheduledActive}:</strong> Yes</p>
                <p><strong>{content.history}:</strong></p>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    {tableHead(content)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tableBody(content)}
                    </tr>
                </tbody>
                </Table>
            </div>
        </Modal>
    )
}

export default MenuInfoModal