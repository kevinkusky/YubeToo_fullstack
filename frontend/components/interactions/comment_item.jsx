import React from 'react';

import Likes from './likes';
import CommentForm from './comment_form';

import CommentControls from "@material-ui/icons/MoreVert";
import ToCloseReplyIndex from '@material-ui/icons/ArrowDropUp';
import ToOpenReplyIndex from '@material-ui/icons/ArrowDropDown';


class CommentIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state={
            replyOpen: false,
            replyIndexOpen: false
        };

        this.replyHandle = this.replyHandle.bind(this);
        this.toggleReplyIndex = this.toggleReplyIndex.bind(this);
    }

    replyHandle(){
        this.setState({replyOpen: !this.state.replyOpen});
    }

    toggleReplyIndex(){
        this.setState({replyIndexOpen: !this.state.replyIndexOpen});
    }

    render() {
        const replyClass = () =>(
            this.state.replyOpen ? 'active-reply' : 'close-reply'
        ); 

        const replyIndexClass = () =>(
            this.state.replyIndexOpen ? 'active-index' : 'close-index'
        ); 

        const comment = this.props.comment;
        // debugger
        return (
          <>
            <div className="comment-index-item">
              <div className="comment-details">
                <div className="comment-header">
                    <div>
                        <span className="comment-author">{comment.author}</span>
                        <span className='comment-time'>{comment.commentTime}</span>
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
                <div className="comment-controls">
                </div>
              </div>
              <div className="comment-interaction">
                <Likes
                  likes={comment.likes}
                  dislikes={comment.dislikes}
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
              {comment.replies.length > 0 ?
                <div>
                    <button className='cindex-button' onClick={this.toggleReplyIndex}>
                        {this.state.replyIndexOpen ?
                            <div className='cindex-button active-index-button'>
                                <ToCloseReplyIndex /> 
                                <span>Hide {comment.replies.length} replies</span>
                            </div> :
                            <div className='cindex-button inactive-index-button'>
                                <ToOpenReplyIndex />
                                <span>View {comment.replies.length} replies</span>
                            </div>
                        }
                    </button>
                    {/* {this.state.replyIndexOpen ?
                        <CommentIndex comments={comment.replies}/> :
                        <div></div>
                    } */}
                </div> :
                <div></div>
              }
            </div>
          </>
        );
    }
}

export default CommentIndexItem;