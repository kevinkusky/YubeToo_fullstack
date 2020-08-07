import React from 'react';
import SideBar from './sidebar';
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
            <div className='index-page'>
                <SideBar />

                <div className='videos-index'>
                    <h2 className='index-header'>All Recomendations</h2>
                    <div className='videos-list'>
                        {this.state.videos.map(video => (
                            <VideoIndexItem
                                video={video}
                                key={video.id}
                            />
                        ))}
                        {/* <div className='index-preview'>Video 1</div>
                        <div className='index-preview'>Video 2</div>
                        <div className='index-preview'>Video 5</div>
                        <div className='index-preview'>Video 7</div>
                        <div className='index-preview'>Video 8</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div>
                        <div className='index-preview'>Video 9</div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoIndex;