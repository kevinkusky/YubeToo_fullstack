import React from 'react';
import { connect } from "react-redux";

import { fetchVideoComments } from '../../actions/comments';
import { entityAsArray } from "../../reducers/selectors";

import CommentIndexItem from './comment_item';
import ReplyIndex from './reply_index';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments.filter(
          comment => comment.commentable_type === 'Video'
      ),
    };

  }

  componentDidMount() {
    this.props.fetchComments(this.props.videoId);
  }

  componentDidUpdate(preProps, preState) {
    if (
      Object.values(preProps.comments).length !==
      Object.values(this.props.comments).length
    ) {
      this.setState({ comments: this.props.comments.filter(
          comment => comment.commentable_type === 'Video'
      ) });
    }
  }

  render() {

    return (
      <div className="comment-index">
        {this.state.comments.length > 0 ? (
          <div className="comment-list">
            {this.state.comments.map((comment) => {
                if (comment.replies.length < 1){
                    return (
                      <CommentIndexItem
                        type="comment"
                        comment={comment}
                        commentId={comment.id}
                        key={comment.id}
                        replyParentId={comment.id}
                      />
                    );
                } else {
                    return (
                      <>
                        <CommentIndexItem
                          type="comment"
                          comment={comment}
                          commentId={comment.id}
                          replyParentId={comment.id}
                          key={comment.id}
                        />
                        <ReplyIndex
                            replies={comment.replies}
                            parentCommentId={comment.id} 
                        />
                      </>
                    );
            }})}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
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