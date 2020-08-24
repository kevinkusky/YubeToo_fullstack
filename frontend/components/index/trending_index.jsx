import React from 'react';
import VideoIndexItem from './video_index_item';

class TrendingIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tempVideos: this.props.videos,
            popIndex: []
        };
    }

    componentDidMount() {
        // this.props.fetchVideos().then(res =>
        //     this.props.indexSort(res)
        // );
        this.props.fetchVideos();
        this.props.indexSort(tempVideos);
    }

    componentDidUpdate(preProps, preState) {
        if (preProps.videos.length !== this.props.videos.length) {
            this.setState({ videos: this.props.videos });
        }
    }

    indexSort(videoList){
        if (tempIndex.length < 2 ) return videoList;
        const sort = (x, y) => (x < y ? -1 : 1);

        const pivot = videoList[0];

        let left = videoList.slice(1).filter((video) => 
            sort(video.props.viewCount, pivot.props.viewCount) === -1)
        ;
        let right = videoList.slice(1).filter((video) =>
            sort(video.props.viewCount, pivot.props.viewCount) !== -1)
        ;

        left = this.indexSort(left);
        right = this.indexSort(right);

        this.setState({popIndex: left.concat([pivot]).concat(right)});
    }

    render() {
        return (
            <div>
                <h2 className='index-header'>All Recomendations</h2>
                <div className='videos-list'>
                    {this.state.popIndex.map(video => (
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

export default TrendingIndex;