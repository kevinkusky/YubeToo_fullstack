import React from 'react';
import VideoIndexItem from './video_index_item';

class NewIndex extends React.Component {
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
        const newVids = this.state.videos.reverse();
        return (
            <div>
                <h2 className='index-header'>All Recomendations</h2>
                <div className='videos-list'>
                    {newVids.map(video => (
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

export default NewIndex;