import React from 'react';
import { connect } from "react-redux";
import { videosAsArray } from "../../reducers/selectors";
import { fetchVideos } from "../../actions/videos";
import VideoIndexItem from './video_index_item';

class TrendingIndex extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     popIndex: this.indexSort(this.props.videos)
        // };
        // this.indexSort = this.indexSort.bind(this);
    }


    // indexSort(videoList){
    //     if (this.state.popIndex.length < 2 ) return videoList;
    //     const sort = (x, y) => (x < y ? -1 : 1);

    //     const pivot = videoList[0];

    //     let left = videoList.slice(1).filter((video) => 
    //         sort(video.props.viewCount, pivot.props.viewCount) === -1)
    //     ;
    //     let right = videoList.slice(1).filter((video) =>
    //         sort(video.props.viewCount, pivot.props.viewCount) !== -1)
    //     ;

    //     left = this.indexSort(left);
    //     right = this.indexSort(right);

    //     this.setState({popIndex: left.concat([pivot]).concat(right)});
    // }

    render() {
        return (
            <div>
                <h2 className='index-header'>Whats Hot</h2>
                <div className='videos-list'>
                    {/* {this.state.popIndex.map(video => (
                        <VideoIndexItem
                            video={video}
                            key={video.id}
                            user={this.props.currentUser}
                        />
                    ))} */}
                </div>
            </div>
        )
    }
}

// const mSTP = (state) => ({
//     currentUser: state.session.currentUser ? state.session.currentUser.id : null,
//     videos: videosAsArray(state.entities.videos),
// });

// const mDTP = (dispatch) => ({
//     fetchVideos: () => dispatch(fetchVideos()),
// });

// export default connect(mSTP, mDTP)(TrendingIndex);
export default connect(null)(TrendingIndex);