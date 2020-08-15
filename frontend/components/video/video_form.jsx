import React from 'react';
import {withRouter} from 'react-router';
import Dropzone from 'react-dropzone';

import TopNav from '../navs/topnav';

import VideoDrop from '@material-ui/icons/PublishOutlined';

class VideoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            creator_id: this.props.currentUser.id,
            videoFile: null,
            videoUrl: null,
            titlecardFile: null,
            titlecardUrl: null
        };
        this.handleFile = this.handleFile.bind(this);
        this.handlePicFile = this.handlePicFile.bind(this);
        this.navigateToSplash = this.navigateToSplash.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    navigateToSplash(){
        // refactor to profile page if/when built
        this.props.history.push('/');
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handlePicFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        fileReader.onloadend = () => {
            this.setState({ titlecardFile: file, titlecardUrl: fileReader.result });
        };
        
        if(file){
            fileReader.readAsDataURL(file);
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[creator_id]', this.state.creator_id);
        
        if(this.state.videoFile){
            formData.append('video[video]', this.state.videoFile);
        }
        if(this.state.titlecardFile){
            formData.append('video[titlecard]', this.state.titlecardFile);
        }
        
        this.props.createVideo(formData);
    }
    
    // current file handler for videos
    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ videoFile: file, videoUrl: fileReader.result });
        };

        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    // dropzonehandler

    // handleDrop(videoFile){
    //     if(videoFile){
    //         if(this.state.errors.length !== 0){
    //             this.setState({errors: ''});
    //         }
    //     }
    // }

    render(){
        // refactor preview to be a title card upload
        const preview = this.state.titlecardUrl ? <img height='200px' width='200px' src={this.state.titlecardUrl}/> : null;
        return (
            <div>
                <TopNav />
                <form onSubmit={this.handleSubmit}>
                    <h3>Upload Video</h3>
                    <Dropzone onDrop={this.handleFile}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({className: 'drop-zone'})}>
                                <input {...getInputProps()}/>
                                <div className='dropzone-target'>
                                    <p>test for drop zone</p>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                    {/* <input type="file" onChange={this.handleFile}/> */}
                    <h3>Upload Preview Image</h3>
                    <input type="file" onChange={this.handlePicFile}/>
                <br/>
                    <h4>Preview</h4>
                    {preview}
                <br/>
                <br/>
                    <input 
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        required=' '
                    />
                    <label className='upload-labels'>Title</label>
                <br/>
                    <input 
                        type="text"
                        value={this.state.description}
                        onChange={this.update('description')}
                    />
                    <label className='upload-labels'>Description</label>
                <br/>
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }
}

export default withRouter(VideoForm);