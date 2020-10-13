import React from 'react';

import CommentIndexItem from './comment_item';


import ToCloseReplyIndex from "@material-ui/icons/ArrowDropUp";
import ToOpenReplyIndex from "@material-ui/icons/ArrowDropDown";


class ReplyIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      replyIndexOpen: false,
      replies: this.props.replies,
      parentCommentId: this.props.parentCommentId,
    };

    this.toggleReplyIndex = this.toggleReplyIndex.bind(this);
  }

  toggleReplyIndex() {
    this.setState({ replyIndexOpen: !this.state.replyIndexOpen });
  }

  render() {
    const replies = this.state.replies;
    const replyIdxClass = this.state.replyIndexOpen ? "reply-index" : "hide-replies";
    const replyItmClass = this.state.replyIndexOpen ? "reply-index-item" : "";

    return(
        <>
        <div>
            <button
                className="cindex-button"
                onClick={this.toggleReplyIndex}
            >
            {this.state.replyIndexOpen ? (
                <div className="cindex-button active-index-button">
                    <ToCloseReplyIndex />
                    <span>
                        Hide {replies.length} replies
                    </span>
                </div>
            ) : (
                <div className="cindex-button inactive-index-button">
                    <ToOpenReplyIndex />
                    <span>
                        View {replies.length} replies
                    </span>
                </div>
            )}
            </button>
        </div>
        <div className={replyIdxClass}>
            {replies.map((reply) => (
                <CommentIndexItem
                    type="reply"
                    comment={reply}
                    commentId={reply.id}
                    key={reply.id}
                    replyParentId={this.state.parentCommentId}
                    replyItmClass={replyItmClass}
                />
            ))}
        </div>
        </>
    )
  }
}

export default ReplyIndex;