import React from 'react';
import Dropzone from 'react-dropzone';

import VideoDrop from "@material-ui/icons/PublishOutlined";
import PicDrop from "@material-ui/icons/ImageOutlined";

class MediaUpload extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   videoFile: [],
    //   videoUrl: [],
    //   titlecardFile: [],
    //   titlecardUrl: [],
    // };

    // this.handlePicDrop = this.handlePicDrop.bind(this);
    // this.handleVideoDrop = this.handleVideoDrop.bind(this);
  }

//   handleVideoDrop(videoFile) {
//     //update videoFiles array as user drag videoFiles to drop zone
//     if (videoFile) {
//       //set drop zone error to empty if there is any error
//       if (this.state.errors.length !== 0) {
//         this.setState({ errors: "" });
//       }

//       let fileReader = new FileReader();
//       const newVideoFile = videoFile[0];

//       fileReader.onloadend = () => {
//         if (this.state.videoFile.length < 1) {
//           //update photoFiles and photoUrls in state
//           this.setState({
//             videoFile: this.state.videoFile.concat(newVideoFile),
//             videoUrl: this.state.videoUrl.concat(
//               URL.createObjectURL(newVideoFile)
//             ),
//           });
//         } else {
//           //set drop zone error in state
//           this.setState({ errors: "May only upload 1 video at a time" });
//         }
//       };
//       fileReader.readAsDataURL(newVideoFile);
//     }
//   }

//     handlePicDrop(titlecardFile) {
//         //update titlecardFiles array as user drag videoFiles to drop zone
//         if (titlecardFile) {
//             //set drop zone error to empty if there is any error
//             if (this.state.errors.length !== 0) {
//                 this.setState({ errors: "" });
//             }

//             let fileReader = new FileReader();
//             const newPicFile = titlecardFile[0];

//             fileReader.onloadend = () => {
//             if (this.state.titlecardFile.length < 1) {
//                 //update photoFiles and photoUrls in state
//                 this.setState({
//                     titlecardFile: this.state.titlecardFile.concat(newPicFile),
//                     titlecardUrl: this.state.titlecardUrl.concat(URL.createObjectURL(newPicFile)),
//                 });
//             } else {
//                 //set drop zone error in state
//                 this.setState({ errors: "May only upload 1 titlecard at a time" });
//             }
//             };
//             fileReader.readAsDataURL(newPicFile);
//         }
//     }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.props.handleVideoDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })}>
              <input {...getInputProps()} />
              <div className="dropzone-target">
                <VideoDrop />
              </div>
            </div>
          )}
        </Dropzone>
        <Dropzone onDrop={this.props.handlePicDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })}>
              <input {...getInputProps()} />
              <div className="dropzone-target">
                <PicDrop />
              </div>
            </div>
          )}
        </Dropzone>
        {/* <button className={} onClick={}>Next Step</button> */}
      </div>
    );
  }
};

export default MediaUpload;