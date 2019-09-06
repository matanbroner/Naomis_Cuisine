import React from 'react'
import localStyles from './styles.module.css'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

class PhotoUplaoder extends React.PureComponent {

    constructor(props){
        super(props)

        this.setUploaderRef = this.setUploaderRef.bind(this);
    }

    setUploaderRef(node) { // receives reference to component as argument
        this.uploader = node;
    }

     // specify upload params and url for your files
     getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    handleChangeStatus = async ({ meta, file }, status) => { 
        switch(status){
            case 'getting_upload_params': {
                this.props.notifyStatus(1)
                break;
            }
            case 'done': {
                this.props.notifyStatus(-1)
                break;
            }
        }
    }


    setUploaderRef = (node) => { // receives reference to component as argument
        this.uploader = node;
    }

    uploaderHandleSubmit = (files, allFiles) => {
        if(allFiles.length !== 0){
            allFiles.map(f => {
                // superagent
                // .post(process.env.REACT_APP_SUBMIT_PROJECT_URL + '/api/photos/add/' + this.state.editingId)
                // .set({'Authorization': localStorage.jwtToken})
                // .attach('upload', f.file)
                // .then(res => this.updateUpload())
            })
            allFiles.forEach(f => f.remove())
        }
        else{
        }
    }

    submit = () => {
        console.log('Submitting!')
        //this.uploaderHandleSubmit()
    }


    render(){
        return(
            <Dropzone
                getUploadParams={this.getUploadParams}
                onChangeStatus={this.handleChangeStatus}
                onSubmit={this.uploaderHandleSubmit}
                accept="image/*"
                ref={this.setUploaderRef}
                inputContent = {this.props.prompt}
                styles={{
                    inputLabel: {
                        color: '#dbbde7'
                    },
                    submitButton: {
                        display: 'none'
                    }
                }}
                />
        )
    }
}

export default PhotoUplaoder