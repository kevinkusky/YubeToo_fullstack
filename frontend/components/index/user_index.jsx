import React from "react";
import { connect } from "react-redux";
import { videosAsArray } from "../../reducers/selectors";
import { fetchVideos } from "../../actions/videos";
import VideoIndexItem from "./video_index_item";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: this.props.videos,
    };
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.videos.length !== this.props.videos.length) {
      this.setState({ videos: this.props.videos });
    }
  }

  render() {
    return (
      <div className="videos-index">
        <h2 className="index-header">My Videos</h2>
        <div className="videos-list">
          {this.state.videos.map((video) => (
            <VideoIndexItem
              video={video}
              key={video.id}
              user={this.props.currentUser}
              creator={this.props.creator}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mSTP = (state) => ({
  currentUser: state.session.currentUser ? state.session.currentUser.id : null,
  creator: state.session.currentUser.username,
  videos: videosAsArray(state.session.currentUser.userVideos),
});
ß
export default connect(mSTP)(UserIndex);
