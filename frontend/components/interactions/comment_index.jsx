import React from 'react';
import { connect } from "react-redux";

import { fetchVideoComments } from '../../actions/comments';
import { entityAsArray } from "../../reducers/selectors";

import CommentIndexItem from './comment_item';

import ToCloseReplyIndex from "@material-ui/icons/ArrowDropUp";
import ToOpenReplyIndex from "@material-ui/icons/ArrowDropDown";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      indexOpen: false,
    };
    this.toggleReplyIndex = this.toggleReplyIndex.bind(this);

  }

  toggleReplyIndex() {
    this.setState({ indexOpen: !this.state.indexOpen });
  }

  componentDidMount() {
    this.props.fetchComments(this.props.videoId);
  }

  componentDidUpdate(preProps, preState) {
    if (
      Object.values(preProps.comments).length !==
      Object.values(this.props.comments).length
    ) {
      this.setState({ comments: this.props.comments });
    }
  }

  render() {
    console.log(this.state.comments);
    const replyClass = this.state.indexOpen ? "reply-index" : "hide-replies";

    return (
      <div className="comment-index">
        {this.state.comments.length > 0 ? (
          <div className="comment-list">
            {this.state.comments.map((comment) => (
                <CommentIndexItem
                  type="comment"
                  comment={comment}
                  commentId={comment.id}
                  key={comment.id}
                />
                /* {comment.replies.length > 0 ? (
                  <>
                    <div>
                      <button
                        className="cindex-button"
                        onClick={this.toggleReplyIndex}
                      >
                        {this.state.indexOpen ? (
                          <div className="cindex-button active-index-button">
                            <ToCloseReplyIndex />
                            <span>
                              Hide {comment.replies.length} replies
                            </span>
                          </div>
                        ) : (
                          <div className="cindex-button inactive-index-button">
                            <ToOpenReplyIndex />
                            <span>
                              View {comment.replies.length} replies
                            </span>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className={replyClass}>
                      {comment.replies.map((reply) => (
                        <CommentIndexItem
                          type="reply"
                          comment={reply}
                          commentId={reply.id}
                          key={reply.id}
                          replyParent={comment.id}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div></div>
                )} */
            ))}
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