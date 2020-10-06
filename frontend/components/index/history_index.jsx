import React from "react";
import { connect } from "react-redux";
import { videosAsArray } from "../../reducers/selectors";
import VideoIndexItem from "./video_index_item";

class HistoryIndex extends React.Component {
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
        <h2 className="index-header">{`${this.props.currentUser}'s Watched videos`}</h2>
        <div className="videos-list">
          {this.state.videos.map((video) => (
            <VideoIndexItem
              video={video}
              key={video.id}
              user={this.props.currentUserId}
              creator={video.creator.username}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mSTP = ({ session }) => ({
  currentUserId: session.currentUser ? session.currentUser.id : null,
  currentUser: session.currentUser.username,
  videos: entityAsArray(session.currentUser.videosViewed),
});

export default connect(mSTP)(HistoryIndex);
