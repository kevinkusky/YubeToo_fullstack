import React from 'react';
import {withRouter} from 'react-router';

import {SPLASH} from '../../util/route_utils';

import TopNav from '../navs/topnav';
import MediaUpload from './media_upload';
import DetailsUpload from './details_upload';
import ConfirmUpload from './confirm_upload';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      creator_id: this.props.currentUser.id,
      errors: "",
      videoFile: [],
      videoUrl: [],
      videoFileName: '',
      titlecardFile: [],
      titlecardUrl: [],
      titlecardFileName: '',
      duration: '',
      step: 1,
    };
    this.navigateToSplash = this.navigateToSplash.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePicDrop = this.handlePicDrop.bind(this);
    this.handleVideoDrop = this.handleVideoDrop.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.update = this.update.bind(this);
  }

  navigateToSplash() {
    this.props.history.push(SPLASH);
  }

  nextStep() {
      if (this.state.step < 3) {this.setState({ step: this.state.step + 1 });}
    }
    
    prevStep() {
        if (this.state.step > 1) {this.setState({ step: this.state.step - 1 });}
    }
    
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        let formData = new FormData();
        formData.append("video[title]", this.state.title);
        formData.append("video[description]", this.state.description);
        formData.append("video[creator_id]", this.state.creator_id);

        // for test purposes until ffmpeg is resolved
        formData.append("video[duration]", '2:10');
        
        if (this.state.videoFile) {
            formData.append("video[video]", this.state.videoFile[0]);
            // const ffmpeg = require('fluent-ffmpeg');
            // ffmpeg.ffprobe(newVideoURL, function(err, metadata){
                // let newVidDuration = metadata.format.duration;
                // console.log(newVidDuration);
            // });
            // formData.append("video[duration", this.state.duration);
    }
    if (this.state.titlecardFile) {
      formData.append("video[titlecard]", this.state.titlecardFile[0]);
    }
    this.props.createVideo(formData);
    // .then(res =>
    //     {
    //         if(res.type !== ERRORS_CREATE_VID){
    //             this.setState({
    //                 title: "",
    //                 description: "",
    //                 creator_id: this.props.currentUser.id,
    //                 errors: "",
    //                 videoFile: [],
    //                 videoUrl: [],
    //             titlecardFile: null,
    //             titlecardUrl: null,
    //         });
    //     }
    // }
    // );
    this.navigateToSplash();
  }

    // dropzonehandler
  handlePicDrop(titlecardFile) {
    //update titlecardFiles array as user drag videoFiles to drop zone
    if (titlecardFile) {
      //set drop zone error to empty if there is any error
      if (this.state.errors.length !== 0) {
        this.setState({ errors: "" });
      }

      let fileReader = new FileReader();
      const newPicFile = titlecardFile[0];

      fileReader.onloadend = () => {
        if (this.state.titlecardFile.length < 1) {
          //update photoFiles and photoUrls in state
          this.setState({
            titlecardFile: this.state.titlecardFile.concat(newPicFile),
            titlecardFileName: newPicFile.name,
            titlecardUrl: this.state.titlecardUrl.concat(
              URL.createObjectURL(newPicFile)
            ),
          });
        } else {
          //set drop zone error in state
          this.setState({ errors: "May only upload 1 titlecard at a time" });
        }
      };
      fileReader.readAsDataURL(newPicFile);
    }
  }

  handleVideoDrop(videoFile) {
    //update videoFiles array as user drag videoFiles to drop zone
    if (videoFile) {
      //set drop zone error to empty if there is any error
      if (this.state.errors.length !== 0) {
        this.setState({ errors: "" });
      }

      let fileReader = new FileReader();
      const newVideoFile = videoFile[0];
      let newVideoURL = URL.createObjectURL(newVideoFile);
      
      fileReader.onloadend = () => {
          if (this.state.videoFile.length < 1) {
          this.setState({
              videoFile: this.state.videoFile.concat(newVideoFile),
              videoFileName: newVideoFile.name,
              videoUrl: this.state.videoUrl.concat(newVideoURL),
                // duration: 
            });
        } else {
          //set drop zone error in state
          this.setState({ errors: "May only upload 1 video at a time" });
        }
      };
      fileReader.readAsDataURL(newVideoFile);
    }
  }

    render() {
        const componentStep = () => {
            switch (this.state.step) {
                case 1:
                    return (
                        <MediaUpload 
                            handleVideoDrop={this.handleVideoDrop}
                            handlePicDrop={this.handlePicDrop} 
                            nextStep={this.nextStep}
                            picMessage={this.state.titlecardFileName}
                            videoMessage={this.state.videoFileName}
                        />
                    );
                case 2:
                return (
                    <DetailsUpload
                        update={this.update}
                        title={this.state.title}
                        description={this.state.description}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                    />
                );
                case 3:
                return (
                    <ConfirmUpload
                        prevStep={this.prevStep}
                        handleSubmit={this.handleSubmit}
                        picMessage={this.state.titlecardFileName}
                        videoMessage={this.state.videoFileName}
                        title={this.state.title}
                        description={this.state.description}
                    />
                );
                default:
                return (
                    <MediaUpload
                        handleVideoDrop={this.handleVideoDrop}
                        handlePicDrop={this.handlePicDrop}
                        nextStep={this.nextStep}
                        picMessage={this.state.titlecardFileName}
                        videoMessage={this.state.videoFileName}
                    />
                );
            }
        }
        return (
            <>
                <TopNav />
                {componentStep()}
            </>
        );
    }
}

export default withRouter(VideoForm);