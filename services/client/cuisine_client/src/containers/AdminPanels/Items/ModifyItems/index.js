import React from 'react'
import { connect } from 'react-redux'
import localStyles from './styles.module.css'

import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ReactSearchBox from 'react-search-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencilAlt,
    faHandPointLeft
} from '@fortawesome/free-solid-svg-icons'

import TitledPanel from '../../../../components/TitledPanel'
import ItemForm from '../../../../components/Forms/Item'
import PhotoUpload from '../../../../components/PhotoUpload'
import LoadingText from '../../../../components/LoadingText'
import CardDisplay from '../../../../components/CardDisplay'

import allContent from './content.json'


const test_data = [
    {
        id: 1234,
        name: 'Banana Bread With Raisins and Cherries',
        photo: 'https://www.davidlebovitz.com/wp-content/uploads/2007/09/Banana-bread-recipe-5.jpg',
        search: {
            key: 'banana',
            value: 'Banana Bread'
        }
    }
]

class AdminModifyItems extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            upload_count: 0,
            editing: false,
            form: {}
        }
    }

    isHebrew(){
        return this.props.language === 'heb'
    }

    isEditing(){
        return this.state.editing
    }

    modifyFormState(arg, value){
        this.setState({form: {
            ...this.state.form,
            [arg]: value
        }})
    }

    createSearchOptions(){
        return test_data.map(item => item.search)
    }
    
    renderItems(){
        let rows = []
        for(let j=0; j<=10; j++){
            let items = []
            for (let i=0; i<=5; i++){
                items.push(
                    <Col xs={2} id={localStyles.itemWrapper}>
                        <CardDisplay
                        text={test_data[0].name}
                        image={test_data[0].photo}/>
                            <button id={localStyles.editButton}
                            onClick={() => this.setState({editing: true})}
                            >
                                    <FontAwesomeIcon icon={faPencilAlt}/>
                                    <span>Edit</span>
                            </button>
                    </Col>
                    
                )
            }
            rows.push(
                <Row 
                id={localStyles.itemsRow}>
                    {items}
                </Row>
            )
        }
        if(!this.state.editing){
            return rows
        }
    }

    renderItemsPanel(){
        return(
            <div 
            id={localStyles.itemPanel}
            style={{
                maxWidth: this.state.editing ? 0 : null
            }}
            >
                {this.renderItems()}
            </div>
        )
    }

    renderEditingPanel(content){
        return(
            <div 
            id={localStyles.editPanel}
            style={{
                maxWidth: !this.state.editing ? 0 : null, 
                height: !this.state.editing ? 0 : null
            }}
            >
                {this.renderBackButton(content.back)}
                <ItemForm
                language={this.props.language}
                content={content.form}
                modifyFormState={(arg, val) => this.modifyFormState(arg, val)}
                />
                {
                this.renderUploadZone(content.form.upload)
                }
            </div>
        )
    }

    renderUploadZone(prompt){
        return (
            <div>
                <PhotoUpload
                ref={e => this.uploader = e}
                notifyStatus={(num) => this.modifyUploadCount(num)}
                prompt={prompt}
                />
            </div>
        )
    }

    renderSubmitButton(content){
        return(
            <button 
            id={localStyles.submit}
            disabled={this.state.upload_count === 0 ? false : true}
            onClick={this.finalize}>
                {
                this.state.upload_count === 0
                ? content.submit
                : <LoadingText text={content.loadingPhotos} lang={this.props.language}/>
                }
            </button>
        )
    }

    renderBackButton(prompt){
        let components = [
            <FontAwesomeIcon icon={faHandPointLeft} flip={this.isHebrew() ? 'horizontal' : null}/>,
            <span>{prompt}</span>
        ]
        if(this.isHebrew()){
            components = components.reverse()
        }
        return(
            <button 
                id={localStyles.backButton} 
                onClick={() => this.setState({editing: !this.state.editing})}
                style={{float: this.isHebrew() ? 'right' : null}}>
                {components}
            </button>
        )
    }

    render(){
        const content = allContent[this.props.language]

        return(
            <TitledPanel
            title={content.title}
            lang={this.props.language}
            buttonComponent={this.state.editing ? this.renderSubmitButton(content) : null}
            >
                {
                    this.renderEditingPanel(content)
                }
                {
                    this.renderItemsPanel()
                }
            </TitledPanel>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.global.language
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminModifyItems)