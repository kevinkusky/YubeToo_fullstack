// import React from 'react';

// import Likes from './likes';
// import CommentForm from './comment_form';
// import CommentControls from "@material-ui/icons/MoreVert";

// class ReplyIndex extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             replyOpen: false,
//             replyIndexOpen: false,
//         };

//         this.replyHandle = this.replyHandle.bind(this);
//         this.toggleReplyIndex = this.toggleReplyIndex.bind(this);
//     }

//     render(){
//         const replyItem = (comment) => (
//           <div className="reply-index-item">
//             <div className="comment-details">
//                 <div className="comment-header">
//                 <div>
//                     <span className="comment-author">{comment.author}</span>
//                     <span className="comment-time">{comment.commentTime}</span>
//                 </div>
//                 <CommentControls
//                     className="comment-control-button"
//                     // onClick={}
//                 />
//                 {/* <ul className='comment-edit-list'>
//                                     <li>Edit</li>
//                                     <li>Delete</li>
//                                 </ul> */}
//                 </div>
//                 <div className="comment-body">{comment.body}</div>
//                 <div className="comment-controls"></div>
//             </div>
//             <div className="comment-interaction">
//                 <Likes
//                     likes={comment.likes}
//                     dislikes={comment.dislikes}
//                     contentType="Comment"
//                     contentId={comment.id}
//                 />
//                 <button onClick={this.replyHandle} className="comment-reply">
//                     REPLY
//                 </button>
//             </div>
//             <div className={replyClass()}>
//                 <CommentForm
//                     formType="reply"
//                     replyHandle={this.replyHandle}
//                     parentId={comment.commentable_id}
//                 />
//             </div>
//           </div>
//         );

//         return(
//             <div className='reply-index'>
//                 {this.props.replies.map(reply =>(
                    
//                 ))}

//             </div>
//         )
//     }
// }