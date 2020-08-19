import React from 'react';
import VideoIndexItem from './video_index_item';

class PopularIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: this.props.videos
        };

    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    componentDidUpdate(preProps, preState) {
        if (preProps.videos.length !== this.props.videos.length) {
            this.setState({ videos: this.props.videos });
        }
    }

    render() {
        // const popVids = this.state.videos.sort
        return (
            <div>
                <h2 className='index-header'>All Recomendations</h2>
                <div className='videos-list'>
                    {this.state.videos.map(video => (
                        <VideoIndexItem
                            video={video}
                            key={video.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default PopularIndex;