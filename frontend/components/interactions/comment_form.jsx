import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {SUPAUTH} from '../../util/route_utils';
import {createComment, editComment} from '../../actions/comments';
import { Contactless } from '@material-ui/icons';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: this.props.formType === 'create' ? false : true,
      body: "",
      video_id: this.props.videoId,
      author_id: this.props.authorId,
      formType: this.props.formType,
      parentCommentId: this.props.parentId ? this.props.parentId : null,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  routeToSession() {
      this.props.history.push(SUPAUTH);
  }

  toggleForm(bool) {
    //   console.log('cancel form');
    if (this.state.formType === 'reply' && bool === false){
        this.setState({ formOpen: bool, body: "" });
        this.props.replyHandle();
    }
        
    if (bool === false) {
        this.setState({ formOpen: bool, body: "" });

        // Only one element with classname - toggles the autoresize to default height
        document.getElementsByClassName('body-field')[0].style.height = '22px';
    } else if (bool === true){
        this.setState({ formOpen: bool });
    }
  }

  update(field) {
    return (e) => {
        this.setState({ [field]: e.currentTarget.value });

        // handles auto resize of textarea
        e.currentTarget.style.height = '22px';
        e.currentTarget.style.height = `${e.target.scrollHeight}px`;
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    // console.log('submit button');
    if (!this.state.author_id) {
      this.routeToSession();
    } else {
        const baseComment = {
            body: this.state.body,
            author_id: this.state.author_id
        };

        let commentItem = {};

        switch (this.state.formType) {
            case "create":
                commentItem = Object.assign({}, baseComment,{
                    commentable_type: 'Video',
                    commentable_id: this.state.video_id
                });
            break;
            case "reply":
                commentItem = Object.assign({}, baseComment, {
                    commentable_type: "Comment",
                    commentable_id: this.state.parentCommentId,
                });
            break;
            default:
                commentItem = Object.assign({}, baseComment,{
                    commentable_type: 'Video',
                    commentable_id: this.state.video_id
                });
            break;
        }
      this.props.createComment(commentItem).then(
          this.setState({ body: ''})
      );
    }
  }

  render() {
    // helps style conditionally
    const buttonsClassName = this.state.formOpen ? "comment-form-buttons" : "hide-comment-buttons";
    const commentClassName = this.state.body.length > 0 ? 'active-comment-button' : 'inactive-comment-button';
    const typeValue = this.state.body.length > 0 ? 'submit' : 'button';

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='body-field-container'>
            <textarea 
                className="body-field"
                placeholder='Add your comment...'
                value={this.state.body}
                onChange={this.update('body')}
                onFocus={() => this.toggleForm(true)}
            >
            </textarea>
          </div>
          <div className={buttonsClassName}>
                <button 
                    className='cancel-button' 
                    onClick={() => this.toggleForm(false)} >CANCEL
                </button>
              <div>
                <input 
                    className={commentClassName} type={typeValue} 
                    value="Comment" value="COMMENT" 
                />
              </div>
          </div>
        </form>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
    videoId: parseInt(ownProps.match.params.videoId),
    authorId: state.session.currentUser ? state.session.currentUser.id : null,
})

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default withRouter(connect(mSTP, mDTP)(CommentForm));