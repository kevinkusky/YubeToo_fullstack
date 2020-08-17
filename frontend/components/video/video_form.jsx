import React from 'react';
import {withRouter} from 'react-router';
import Dropzone from 'react-dropzone';

import TopNav from '../navs/topnav';

import VideoDrop from '@material-ui/icons/PublishOutlined';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      creator_id: this.props.currentUser.id,
      errors: "",
      videoFile: null,
      videoUrl: null,
      titlecardFile: null,
      titlecardUrl: null,
    };
    this.handlePicFile = this.handlePicFile.bind(this);
    this.navigateToSplash = this.navigateToSplash.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoDrop = this.handleVideoDrop.bind(this);
  }

  navigateToSplash() {
    // refactor to profile page if/when built
    this.props.history.push("/");
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
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

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[creator_id]", this.state.creator_id);

    if (this.state.videoFile) {
      formData.append("video[video]", this.state.videoFile);
    }
    if (this.state.titlecardFile) {
      formData.append("video[titlecard]", this.state.titlecardFile);
    }

    this.props.createVideo(formData);
  }

  // dropzonehandler

  handleVideoDrop(videoFile) {
    //update videoFiles array as user drag videoFiles to drop zone
    if (videoFile) {
      //set drop zone error to empty if there is any error
      if (this.state.errors.length !== 0) {
        this.setState({ errors: "" });
      }

      let fileReader = new FileReader();
      const videoFile = videoFiles[idx];

      fileReader.onloadend = () => {
        if (this.state.videoFile) {
          //update videoFiles and videoUrls in state
          this.setState({
            videoFile: this.state.videoFile.concat(
              URL.createObjectURL(videoFile)
            ),
            videoUrl: this.state.videoUrl.concat(videoFile),
          });
        } else {
          //set drop zone error in state
          this.setState({ errors: "May only upload 1 video at a time" });
        }
      };
      fileReader.readAsDataURL(videoFile);
    }
  }

  render() {
    // refactor preview to be a title card upload
    const preview = this.state.titlecardUrl ? (
      <img height="200px" width="200px" src={this.state.titlecardUrl} />
    ) : null;
    return (
      <div>
        <TopNav />

        <form onSubmit={this.handleSubmit}>
          <h3>Upload Video</h3>
          <Dropzone onDrop={this.handleVideoDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "drop-zone" })}>
                <input {...getInputProps()} />
                <div className="dropzone-target">
                  {/* <p>test for drop zone</p> */}
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