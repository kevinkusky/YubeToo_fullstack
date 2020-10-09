import React from 'react';
import { connect } from "react-redux";

import Likes from './likes';
import CommentForm from './comment_form';
// import ReplyIndex from './reply_index';

import { fetchComment } from '../../actions/comments';
import { fetchCommentLikes } from '../../actions/likes';

import CommentControls from "@material-ui/icons/MoreVert";
import ToCloseReplyIndex from '@material-ui/icons/ArrowDropUp';
import ToOpenReplyIndex from '@material-ui/icons/ArrowDropDown';


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment,
      replyOpen: false,
    };

    this.replyHandle = this.replyHandle.bind(this);
  }

//   componentDidMount() {
//   }

//   componentDidUpdate(preProps, preState) {
//     if (preProps.comment.body !== this.props.comment.body) {
//           this.setState({ comment: this.props.comment });
//         } 
//     }
//   }

  replyHandle() {
    this.setState({ replyOpen: !this.state.replyOpen });
  }

  render() {
    const replyClass = () =>
      this.state.replyOpen ? "active-reply" : "close-reply";

    const replyIndexClass = () =>
      this.state.replyIndexOpen ? "active-index" : "close-index";

    const comment = this.state.comment;
    // console.log(comment.replies);
    // debugger
    return (
      <>
        <div className="comment-index-item">
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
          <div className={replyClass()}>
            <CommentForm
              formType="reply"
              replyHandle={this.replyHandle}
              parentId={comment.id}
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
  comment: comments[parseInt(ownProps.commentId)],
});

const mDTP = (dispatch) => ({
  fetchComment: commentId => dispatch(fetchComment(commentId)),
});

export default connect(mSTP, mDTP)(CommentIndexItem);