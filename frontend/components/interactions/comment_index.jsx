import React from 'react';
import { connect } from "react-redux";

import { fetchVideoComments } from '../../actions/comments';
import { entityAsArray } from "../../reducers/selectors";

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
        return(
            <div className='comment-index'>
                {this.state.comments.length > 0 ?
                    <div className='comment-list'>
                    {this.state.comments.map(comment => (
                        <CommentIndexItem
                            comment={comment}
                            commentId={comment.id}
                            key={comment.id}
                        />
                    ))}
                    </div>:
                    <div></div>
                }
            </div>

            //             <div className='comment-index'>
            //     {this.state.comments.length > 0 ?
            //         {this.state.comments.map(comment => (
            //             <div className='comment-list'>
            //                 <CommentIndexItem
            //                     type='comment'
            //                     comment={comment}
            //                     commentId={comment.id}
            //                     key={comment.id}
            //                 />
            //                 {comment.replies.length > 0 ?
            //                     {comment.replies.map(reply => (
            //                         <CommentIndexItem 
            //                             type='reply'
            //                             comment={reply}
            //                             commentId={reply.id}
            //                             key={reply.id}
            //                         />
            //                     ))} :
            //                     <div></div>
            //                 }
            //             </div>
            //         ))} :
            //         <div></div>
            //     }
            // </div>
        )
    }
}

const mSTP = ({ entities: { comments }}, ownProps) => ({
    videoId: parseInt(ownProps.videoId),
    comments: entityAsArray(comments)
});

const mDTP = dispatch => ({
    fetchComments: videoId => dispatch(fetchVideoComments(videoId)),
    
});

export default connect(mSTP, mDTP)(CommentIndex);