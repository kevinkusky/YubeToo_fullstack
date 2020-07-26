import React from 'react';
import TopNav from '../navs/topnav';
import {withRouter} from 'react-router';

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
        this.navigateToSplash = this.navigateToSplash.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNextFile = this.handleNextFile.bind(this);
    }

    navigateToSplash(){
        this.props.history.push('/');
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }

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

    handleNextFile(e){
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

    render(){
        // refactor preview to be a title card upload
        const preview = this.state.titlecardUrl ? <img height='200px' width='200px' src={this.state.titlecardUrl}/> : null;
        return (
            <div>
                <TopNav />
                <form onSubmit={this.handleSubmit}>
                    <h3>Upload Video</h3>
                    <input type="file" onChange={this.handleFile}/>
                    <h3>Upload Preview Image</h3>
                    <input type="file" onChange={this.handleNextFile}/>
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