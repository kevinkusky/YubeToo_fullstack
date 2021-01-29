import React from "react";
import { connect } from "react-redux";
import { entityAsArray } from "../../reducers/selectors";
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
        {this.state.videos.length > 0 ?
          <div className="videos-list">
            {this.state.videos.map((video) => (
              <VideoIndexItem
                video={video}
                key={video.id}
                user={this.props.currentUser}
                creator={video.creator.username}
              />
            ))}
          </div> :
          <span>You have yet to upload any videos.  Please feel free to share your content</span>
        }
      </div>
    );
  }
}

const mSTP = (state) => ({
  currentUser: state.session.currentUser ? state.session.currentUser.id : null,
  videos: entityAsArray(state.session.currentUser.userVideos),
});

export default connect(mSTP)(UserIndex);
