import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {SUPAUTH} from '../../util/route_utils';
import {createComment, editComment} from '../../actions/comments';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: this.props.formType === 'create' ? false : true,
      body: "",
      video_id: this.props.videoId,
      author_id: this.props.authorId,
      formType: this.props.formType,
      parentCommentId: this.props.commentId ? this.props.commentId : null,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  routeToSession() {
    if (!this.props.authorId) {
      this.props.history.push(SUPAUTH);
    }
  }

  toggleForm(bool) {
      if (this.state.formType === 'reply'){
          this.props.replyHandle();
        }
    if (bool === false) {
        this.setState({ formOpen: bool });
        this.setState({ body: "" });

        // Only one element with classname - toggles the autoresize to default height
        document.getElementsByClassName('body-field')[0].style.height = '22px';
    } else {
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

  handleSubmit() {
    // e.preventDefault();
    console.log(this.state.body);
    // if (!this.state.author_id) {
    //   this.routeToSession();
    // } else {
    //   let formData = new FormData();
    //   formData.append("comment[body]", this.state.body);
    //   formData.append("comment[video_id]", this.state.video_id);
    //   formData.append("comment[author_id]", this.state.author_id);
    //   formData.append("comment[commentable_type]", this.state.commentable_type);

    //   switch (this.state.formType) {
    //     case "create":
    //       formData.append("comment[commentable_type]", "video");
    //       formData.append("comment[commentable_id]", this.state.video_id);
    //       break;
    //     case "reply":
    //       formData.append("comment[commentable_type]", "comment");
    //       formData.append("comment[commentable_id]", this.state.parentCommentId);
    //       break;
    //     default:
    //       formData.append("comment[commentable_type]", "video");
    //       formData.append("comment[commentable_id]", this.state.video_id);
    //       break;
    //   }
    //   this.props.createComment(formData);
    // }
  }

  render() {
    // helps style conditionally
    const buttonsClassName = () =>( this.state.formOpen ? "comment-form-buttons" : "hide-comment-buttons");
    const commentClassName = () => ( this.state.body.length > 0 ? 'active-comment-button' : 'inactive-comment-button');
    const typeValue = () => ( this.state.body.length > 0 ? 'submit' : 'button');

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
          <div className={buttonsClassName()}>
            <button className='cancel-button' onClick={() => this.toggleForm(false)}>CANCEL</button>
            <input className={commentClassName()} type={typeValue()} value="Comment" value="COMMENT" />
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
    createComment: form => dispatch(createComment(form))
})

export default withRouter(connect(mSTP, mDTP)(CommentForm));