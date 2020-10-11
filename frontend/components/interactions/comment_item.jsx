import React from 'react';
import { connect } from "react-redux";

import Likes from './likes';
import CommentForm from './comment_form';

import { fetchComment } from '../../actions/comments';
// import { fetchCommentLikes } from '../../actions/likes';

import CommentControls from "@material-ui/icons/MoreVert";



class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyOpen: false,
      comment: this.props.comment
    };

    this.replyHandle = this.replyHandle.bind(this);
  }

  componentDidMount() {
      this.props.fetchComment(this.props.commentId);
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.comment.body !== this.props.comment.body) {
        this.setState({ comment: this.props.comment }); 
    }
  }

  replyHandle() {
    this.setState({ replyOpen: !this.state.replyOpen });
  }

  render() {
    const { comment, replyParentId, type, replyIndexClass } = this.props;
    const itemClass = type === 'comment' ? 'comment-index-item' : replyIndexClass;
    const replyClass = this.state.replyOpen ? "active-reply" : "close-reply";

    // console.log(this.props);

    // if(this.props.type === 'reply'){
    //     console.log(this.props);
    //     return(
    //         <div></div>
    //     )
    // }
    // debugger
    return (
      <>
        <div className={itemClass}>
          <div className="comment-details">
            <div className="comment-header">
              <div>
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{comment.commentTime}</span>
              </div>
              <CommentControls
                className="comment-control-button"
                // onClick={}
              />
              {/* <ul className='comment-edit-list'>
                    <li>Edit</li>
                    <li>Delete</li>
                </ul> */}
            </div>
            <div className="comment-body">{comment.body}</div>
            <div className="comment-controls"></div>
          </div>
          <div className="comment-interaction">
            <Likes
              contentType="Comment"
              contentId={comment.id}
            />
            <button onClick={this.replyHandle} className="comment-reply">
              REPLY
            </button>
          </div>
          <div className={replyClass}>
            <CommentForm
              formType="reply"
              replyHandle={this.replyHandle}
              parentId={replyParentId}
            />
          </div>
        </div>
      </>
    );
  }
}

const mSTP = ({ entities: { comments } }, ownProps) => ({
  // currentUser: state.entities.session.currentUser,
  commentId: parseInt(ownProps.commentId),
//   comment: comments[parseInt(ownProps.commentId)],
});

const mDTP = (dispatch) => ({
  fetchComment: commentId => dispatch(fetchComment(commentId)),
});

export default connect(mSTP, mDTP)(CommentIndexItem);