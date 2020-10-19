import React from 'react';
import { connect } from "react-redux";

import CurrentUserIcon from '../session/currentuser_icon';
import Likes from './likes';
import CommentForm from './comment_form';

import { fetchComment, deleteComment } from '../../actions/comments';
import { fetchCommentLikes } from '../../actions/likes';

import CommentControls from "@material-ui/icons/MoreVert";
import DeleteIcon from '@material-ui/icons/DeleteForever';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyOpen: false,
      comment: this.props.comment,
      actionMenu: false,
      commentLikes: this.props.allCommentLikes.filter(
          like => like.dislike === false
      ),
      commentDislikes: this.props.allCommentLikes.filter(
          like => like.dislike === true
      ),
      activeLike: this.props.allCommentLikes.filter(
            like => like.liker_id === this.props.currentUserId
      ),
    };

    this.replyHandle = this.replyHandle.bind(this);
    this.commentActionHandle = this.commentActionHandle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }



  componentDidMount() {
      this.props.fetchCommentLikes(this.props.commentId);
  }

  componentDidUpdate(preProps, preState) {
    //   debugger
      if (this.props.allCommentLikes.length === 0) {
          return null;
      } else if (preProps.allCommentLikes.length !== this.props.allCommentLikes.length){
          this.setState({
              commentLikes: this.props.allCommentLikes.filter(
                  (like) => like.dislike === false
              ),
              commentDislikes: this.props.allCommentLikes.filter(
                  (like) => like.dislike === true
              ),
              activeLike: this.props.allCommentLikes.filter(
                  (like) => like.liker_id === this.props.currentUserId
              ),
          });
      }else if(
          (preProps.allCommentLikes[preProps.allCommentLikes.length - 1].id) !==
          (this.props.allCommentLikes[this.props.allCommentLikes.length - 1].id)
        ) {
            this.setState({
                commentLikes: this.props.allCommentLikes.filter(
                    (like) => like.dislike === false
                ),
                commentDislikes: this.props.allCommentLikes.filter(
                    (like) => like.dislike === true
                ),
                activeLike: this.props.allCommentLikes.filter(
                    (like) => like.liker_id === this.props.currentUserId
                ),
            });
      } else if (preProps.comment.body !== this.props.comment.body) {
            this.setState({ comment: this.props.comment }); 
      } 
  }

  replyHandle() { this.setState({ replyOpen: !this.state.replyOpen }); }

  commentActionHandle() { this.setState({ actionMenu: !this.state.actionMenu}); }

  handleDelete() {
      this.props.deleteComment(this.props.commentId);
  }

  render() {
    const { comment, replyParentId, type, replyItmClass } = this.props;
    const itemClass = type === 'comment' ? 'comment-index-item' : replyItmClass;
    const replyClass = this.state.replyOpen ? "active-reply" : "close-reply";
    const dropdownIconClass = this.state.actionMenu ? 'active-menu-button' : 'comment-control-button';
    const actionClass = this.state.actionMenu ? "action-menu" : "no-menu";

    // debugger
    return (
      <>
        <div className={itemClass}>
          <div className="all-comment-items">
            <CurrentUserIcon
              username={comment.author}
              addClass="drop-header-icon"
            />
            <div className="comment-details">
              <div className="comment-header">
                <div>
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-time">{comment.commentTime}</span>
                </div>
              </div>
              <div className="comment-body">{comment.body}</div>
            </div>
            <div>
              <CommentControls
                className={dropdownIconClass}
                onClick={this.commentActionHandle}
                onBlur={this.commentActionHandle}
              />
              <div className={actionClass}>
                <div
                  className="comment-action-item"
                  onClick={this.handleDelete}
                >
                  <DeleteIcon className="action-icon" />
                  <span>Delete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-interaction">
            <Likes
              contentType="Comment"
              contentId={comment.id}
              likes={this.state.commentLikes}
              dislikes={this.state.commentDislikes}
              activeLike={this.state.activeLike}
            //   handleLikeDelete={this.handleLikeDelete}
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

const mSTP = ({ session, entities: { comments, likes } }, ownProps) => ({
  currentUserId: session.currentUser.id,
  commentId: parseInt(ownProps.commentId),
  allCommentLikes: Object.values(likes).filter(
      like => (
          (like.likeable_type === 'Comment') && (like.likeable_id === parseInt(ownProps.commentId))
      )
  )
});

const mDTP = dispatch => ({
  fetchComment: commentId => dispatch(fetchComment(commentId)),
  fetchCommentLikes: commentId => dispatch(fetchCommentLikes(commentId)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentIndexItem);