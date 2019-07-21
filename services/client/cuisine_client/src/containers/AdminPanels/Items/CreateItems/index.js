import React from 'react'
import localStyles from './styles.module.css'
import { connect } from 'react-redux'
import {
    createNewItem
} from '../../../../actions/Items'
import TitledPanel from '../../../../components/TitledPanel'
import ItemForm from '../../../../components/Forms/Item'
import PhotoUpload from '../../../../components/PhotoUpload'
import LoadingText from '../../../../components/LoadingText'
import allContent from './content.json'

class AdminCreateItem extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            upload_count: 0,
            form: {}
        }
        this.finalize = this.finalize.bind(this)
    }

    componentDidMount(){
        if(this.props.match.params.id){
            let index = this.props.items.find(item => item.id === this.props.match.params.id)
            if (index !== -1){
                this.setState({form: this.props.items[index]})
            }
        }
    }

    modifyFormState(arg, value){
        this.setState({form: {
            ...this.state.form,
            [arg]: value
        }})
    }

    modifyUploadCount(num){
        let { upload_count } = this.state
        upload_count += num
        this.setState({ upload_count })
    }

    finalize(e){
        e.preventDefault()
        this.props.createNewItem(this.state.form)
        this.uploader.submit()
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

    render(){
        const content = allContent[this.props.language]
        return(
            <TitledPanel
            title={content.title}
            lang={this.props.language}
            buttonComponent={this.renderSubmitButton(content)}>
                <ItemForm
                language={this.props.language}
                content={content.form}
                modifyFormState={(arg, val) => this.modifyFormState(arg, val)}
                />
                {
                this.renderUploadZone(content.form.upload)
                }
            </TitledPanel>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewItem: (item) => dispatch(createNewItem(item))
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.global.language,
        items: state.items.bank
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCreateItem)