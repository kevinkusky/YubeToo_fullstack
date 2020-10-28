import React from 'react';
import { connect } from "react-redux";
import { entityAsArray } from "../../reducers/selectors";
import { fetchVideos } from "../../actions/videos";
import VideoIndexItem from './video_index_item';

class TrendingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popIndex: [],
        };
        this.indexSort = this.indexSort.bind(this);
    }

    componentDidMount(){
        this.indexSort(this.props.videos);
    }


    indexSort(videoList){
        let sortedList = videoList.sort((a,b) => (a.views > b.views) ? -1 : 1);
        this.setState({ popIndex: sortedList });
    }

    render() {
        return (
            <div>
                <h2 className='index-header'>Whats Hot</h2>
                <div className='videos-list'>
                    {this.state.popIndex.map(video => (
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

export default connect(mSTP)(TrendingIndex);