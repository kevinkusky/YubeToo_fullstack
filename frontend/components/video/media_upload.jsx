import React from 'react';
import Dropzone from 'react-dropzone';

import VideoDrop from "@material-ui/icons/PublishOutlined";
import PicDrop from "@material-ui/icons/ImageOutlined";

class MediaUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoFile: null,
      videoUrl: null,
      titlecardFile: null,
      titlecardUrl: null,
    };

    this.handlePicDrop = this.handlePicDrop.bind(this);
    this.handleVideoDrop = this.handleVideoDrop.bind(this);
  }

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

  handlePicDrop(titlecardFile) {
    //update videoFiles array as user drag videoFiles to drop zone
    if (titlecardFile) {
      //set drop zone error to empty if there is any error
      if (this.state.errors.length !== 0) {
        this.setState({ errors: "" });
      }

      let fileReader = new FileReader();
      const titlecardFile = titlecardFiles[idx];

      fileReader.onloadend = () => {
        if (this.state.titlecardFile) {
          //update videoFiles and videoUrls in state
          this.setState({
            titlecardFile: this.state.titlecardFile.concat(
              URL.createObjectURL(titlecardFile)
            ),
            titlecardUrl: this.state.titlecardUrl.concat(titlecardFile),
          });
        } else {
          //set drop zone error in state
          this.setState({ errors: "May only upload 1 title image per video" });
        }
      };
      fileReader.readAsDataURL(titlecardFile);
    }
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.handleVideoDrop}>
          <VideoDrop />
        </Dropzone>

        <Dropzone onDrop={this.handlePicDrop}>
          <PicDrop />
        </Dropzone>
      </div>
    );
  }
};

export default MediaUpload;