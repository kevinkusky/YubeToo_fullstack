import React from 'react';
import { connect } from "react-redux";
import { entityAsArray } from "../../reducers/selectors";
import { fetchVideos } from "../../actions/videos";
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            videos: this.props.videos
        };
    }

    componentDidMount(){
        this.props.fetchVideos();
    }

    componentDidUpdate(preProps, preState){
        if(preProps.videos.length !== this.props.videos.length){
            this.setState({videos: this.props.videos});
        }
    }

    render(){
        return(
            <div className='videos-index'>
                <h2 className='index-header'>All Recomendations</h2>
                <div className='videos-list'>
                    {this.state.videos.map(video => (
                        <VideoIndexItem
                            video={video}
                            key={video.id}
                            user={this.props.currentUser}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mSTP = (state) => ({
  currentUser: state.session.currentUser ? state.session.currentUser.id : null,
  videos: entityAsArray(state.entities.videos),
});

const mDTP = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP, mDTP)(VideoIndex);