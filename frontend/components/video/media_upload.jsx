import React from 'react';
import Dropzone from 'react-dropzone';

import VideoDrop from "@material-ui/icons/PublishOutlined";
import PicDrop from "@material-ui/icons/ImageOutlined";

class MediaUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoFile: [],
      videoUrl: [],
      titlecardFile: [],
      titlecardUrl: [],
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
            const newVideoFile = videoFile[0];

            fileReader.onloadend = () => {
                if (this.state.videoFile.length < 1) {
                    //update photoFiles and photoUrls in state
                    this.setState({
                        titlecardFile: this.state.videoFile.concat(newVideoFile),
                        titlecardUrl: this.state.videoUrl.concat(URL.createObjectURL(newVideoFile))
                    });
                } else {
                    //set drop zone error in state
                    this.setState({ errors: 'May only upload 1 video at a time' });
                }
            };
            fileReader.readAsDataURL(newVideoFile);
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
            const photoFile = titlecardFile[0];

            fileReader.onloadend = () => {
                if (this.state.titlecardFile.length < 1) {
                    //update photoFiles and photoUrls in state
                    this.setState({
                        titlecardFile: this.state.titlecardFile.concat(photoFile),
                        titlecardUrl: this.state.titlecardUrl.concat(URL.createObjectURL(photoFile))
                    });
                } else {
                    //set drop zone error in state
                    this.setState({ errors: 'each video may only have 1 title image' });
                }
            };
            fileReader.readAsDataURL(photoFile);
        }
    }

    // handleDrop(photoFiles) {
    //     //update photoFiles array as user drag photoFiles to drop zone
    //     if (photoFiles) {
    //         //set drop zone error to empty if there is any error
    //         if (this.state.errors.length !== 0) {
    //             this.setState({ errors: "" })
    //         }

    //         for (let index = 0; index < photoFiles.length; index++) {
    //             let fileReader = new FileReader();
    //             const photoFile = photoFiles[index];

    //             fileReader.onloadend = () => {
    //                 if (this.state.photoFiles.length < 10) {
    //                     //update photoFiles and photoUrls in state
    //                     this.setState({
    //                         photoFiles: this.state.photoFiles.concat(URL.createObjectURL(photoFile)),
    //                         photoUrls: this.state.photoUrls.concat(photoFile)
    //                     });
    //                 } else {
    //                     //set drop zone error in state
    //                     this.setState({ errors: "Sorry, no more than 10" })
    //                 }
    //             };
    //             fileReader.readAsDataURL(photoFile);
    //         }
    //     }
    // }

  render() {
    return (
      <div>
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

        <Dropzone onDrop={this.handlePicDrop}>
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "drop-zone" })}>
                    <input {...getInputProps()} />
                    <div className="dropzone-target">
                        {/* <p>test for drop zone</p> */}
                        <PicDrop />
                    </div>
                </div>
            )}
        </Dropzone>
      </div>
    );
  }
};

export default MediaUpload;