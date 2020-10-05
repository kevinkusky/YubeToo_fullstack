import React from 'react';
import { connect } from "react-redux";

import { fetchVideoComments } from '../../actions/comments';
import { commentsAsArray } from '../../reducers/selectors';
import CommentIndexItem from './comment_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: this.props.comments
        };
    }

    componentDidMount(){
        this.props.fetchComments(this.props.videoId);
    }
    
    componentDidUpdate(preProps, preState){        
        if(Object.values(preProps.comments).length !== Object.values(this.props.comments).length){
            this.setState({comments: this.props.comments});
        }
    }

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
    videoId: parseInt(ownProps.videoId),
    comments: commentsAsArray(comments)
});

const mDTP = dispatch => ({
    fetchComments: videoId => dispatch(fetchVideoComments(videoId))
});

export default connect(mSTP, mDTP)(CommentIndex);