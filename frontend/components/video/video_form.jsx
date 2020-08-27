import React from 'react';
import {withRouter} from 'react-router';
import Dropzone from 'react-dropzone';

import TopNav from '../navs/topnav';
import MediaStep from './media_upload';

import VideoDrop from '@material-ui/icons/PublishOutlined';

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
      titlecardFile: null,
      titlecardUrl: null,
      step: 1,
    };
    this.handlePicFile = this.handlePicFile.bind(this);
    this.navigateToSplash = this.navigateToSplash.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoDrop = this.handleVideoDrop.bind(this);
    // this.handlePicDrop = this.handlePicDrop.bind(this);
    // this.componentStep = this.componentStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  navigateToSplash() {
    this.props.history.push("/");
  }

  nextStep() {
    if (this.state.step < 3) {
      this.setState({ step: this.state.step + 1 });
    }
  }

  prevStep() {
    if (this.state.step > 1) {
      this.setState({ step: this.state.step - 1 });
    }
  }

    // componentStep() {
    //     switch (this.state.step) {
    //         case 1:
    //         return <MediaStep 
    //             handleVideoDrop={this.handleVideoDrop}
    //             handlePicDrop={this.handlePicDrop} 
    //             nextStep={this.nextStep}/>;
    //         case 2:
    //         return <DetailStep />;
    //         case 3:
    //         return <ConfirmStep />;
    //         default:
    //         return <MediaStep />;
    //     }
    // }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[creator_id]", this.state.creator_id);

    if (this.state.videoFile) {
      formData.append("video[video]", this.state.videoFile[0]);
    }
    if (this.state.titlecardFile) {
      formData.append("video[titlecard]", this.state.titlecardFile);
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
  }

  handlePicFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ titlecardFile: file, titlecardUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

//   handlePicDrop(titlecardFile) {
//     //update titlecardFiles array as user drag videoFiles to drop zone
//     if (titlecardFile) {
//       //set drop zone error to empty if there is any error
//       if (this.state.errors.length !== 0) {
//         this.setState({ errors: "" });
//       }

//       let fileReader = new FileReader();
//       const newPicFile = titlecardFile[0];

//       fileReader.onloadend = () => {
//         if (this.state.titlecardFile.length < 1) {
//           //update photoFiles and photoUrls in state
//           this.setState({
//             titlecardFile: this.state.titlecardFile.concat(newPicFile),
//             titlecardUrl: this.state.titlecardUrl.concat(
//               URL.createObjectURL(newPicFile)
//             ),
//           });
//         } else {
//           //set drop zone error in state
//           this.setState({ errors: "May only upload 1 titlecard at a time" });
//         }
//       };
//       fileReader.readAsDataURL(newPicFile);
//     }
//   }

  // dropzonehandler

  handleVideoDrop(videoFile) {
    //update videoFiles array as user drag videoFiles to drop zone
    if (videoFile) {
      //set drop zone error to empty if there is any error
      if (this.state.errors.length !== 0) {
        this.setState({ errors: "" });
      }

      let fileReader = new FileReader();
      const newVideoFile = videoFile[0];

      fileReader.onloadend = () => {
        if (this.state.videoFile.length < 1) {
          //update photoFiles and photoUrls in state
          this.setState({
              videoFile: this.state.videoFile.concat(newVideoFile),
              videoUrl: this.state.videoUrl.concat(
                  URL.createObjectURL(newVideoFile)
                  ),
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
    // refactor preview to be a title card upload
    return (
      <div>
        <TopNav />

        <form onSubmit={this.handleSubmit}>
            {/* {this.componentSwitch} */}

          <Dropzone onDrop={this.handleVideoDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "drop-zone" })}>
                <input {...getInputProps()} />
                <div className="dropzone-target">
                  <VideoDrop />
                </div>
              </div>
            )}
          </Dropzone>

          <h3>Upload Preview Image</h3>
          <input type="file" onChange={this.handlePicFile} />
          <h4>Preview</h4>
          {preview}

          <input
            type="text"
            value={this.state.title}
            onChange={this.update("title")}
            required=" "
          />
          <label className="upload-labels">Title</label>

          <input
            type="text"
            value={this.state.description}
            onChange={this.update("description")}
          />
          <label className="upload-labels">Description</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(VideoForm);