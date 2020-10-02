import React from 'react';
import { connect } from "react-redux";

import { fetchVideoComments } from '../../actions/comments';
import CommentIndexItem from './comment_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: []
        };
    }

    componentDidMount(){
        this.props.fetchComments(this.props.videoId).then(
            commentObject => this.setState({comments: commentObject.comments})
        );
    }

    // componentDidUpdate(preProps, preState){
    //     if(preProps.comments.length !== this.props.comments.length){
    //         this.setState({comments: this.props.comments});
    //     }
    // }

    // componentDidUpdate(){
    //     this.props.fetchComments(this.props.videoId);
    // }

    render(){
        console.log(this.props);
        console.log(this.state);
        return(
            <div className='comment-index'>
                {this.state.comments.length > 0 ?
                    <div className='comment-list'>
                        {this.state.comments.map(comment => (
                            <CommentIndexItem
                                comment={comment}
                                key={comment.id}
                            />
                        ))}
                    </div> :
                    <div></div>
                }
            </div>
        )
    }
}

const mSTP = ({ entities: { comments }}, ownProps) => ({
    comments: comments,
});

const mDTP = dispatch => ({
    fetchComments: videoId => dispatch(fetchVideoComments(videoId))
});

// export default connect(null, mDTP)(CommentIndex);
export default connect(mSTP, mDTP)(CommentIndex);