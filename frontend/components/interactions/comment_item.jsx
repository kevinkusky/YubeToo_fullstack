import React from 'react';
import { connect } from "react-redux";

import CurrentUserIcon from '../session/currentuser_icon';
import Likes from './likes';
import CommentForm from './comment_form';

import { fetchComment } from '../../actions/comments';
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
    //   commentLikes: this.props.comment.likes,
    //   commentDislikes: this.props.comment.dislikes
    };

    this.replyHandle = this.replyHandle.bind(this);
    this.commentActionHandle = this.commentActionHandle.bind(this);
  }

  componentDidMount() {
      this.props.fetchComment(this.props.commentId);
    //   this.props.fetchCommentLikes(this.props.commentId);
  }

  componentDidUpdate(preProps, preState) {
    if (preProps.comment.body !== this.props.comment.body) {
        this.setState({ comment: this.props.comment }); 
    }
  }

  replyHandle() {
    this.setState({ replyOpen: !this.state.replyOpen });
  }

  commentActionHandle() {
    this.setState({ actionMenu: !this.state.actionMenu});
  }

  render() {
    const { comment, replyParentId, type, replyItmClass } = this.props;
    const itemClass = type === 'comment' ? 'comment-index-item' : replyItmClass;
    const replyClass = this.state.replyOpen ? "active-reply" : "close-reply";
    const actionClass = this.state.actionMenu ? "action-menu" : "close-reply";

    // console.log(this.props);
    // debugger
    return (
      <>
        <div className={itemClass}>
            <div className='all-comment-items'>
                <CurrentUserIcon 
                    username={comment.author}
                    addClass='drop-header-icon'
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
                        className="comment-control-button"
                        onClick={this.commentActionHandle}
                        onBlur={this.commentActionHandle}
                    />
                    <div className={actionClass}>
                        {/* <li className='comment-action-item'>
                            <span>Edit</span>
                        </li>  */}
                        <div className='comment-action-item'>
                            <DeleteIcon className='action-icon'/>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
          <div className="comment-interaction">
            <Likes
              contentType="Comment"
              contentId={comment.id}
            //   likes={}
            //   dislikes={}
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