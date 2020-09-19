import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {SUPAUTH} from '../../util/route_utils';
import {createComment, editComment} from '../../actions/comments';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      body: "",
      video_id: this.props.videoId,
      author_id: this.props.authorId,
      formType: this.props.formType,
      parentCommentId: this.props.commentId ? this.props.commentId : null,
    //   textHeight: '',
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
      if (bool === false) {
        this.setState({ formOpen: bool });
        this.setState({ body: "" });
    } else {
        this.setState({ formOpen: bool });
      }
  }

  update(field) {
    return (e) => {
        this.setState({ [field]: e.currentTarget.value });
        e.target.style.height = '27px';
        e.target.style.height = `${e.currentTarget.scrollHeight}px`;
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
      const buttonsClassName = () =>( this.state.formOpen ? "comment-form-buttons" : "hide-comment-buttons");
      const commentClassName = () => ( this.state.body.length > 0 ? 'active-comment-button' : 'inactive-comment-button')
      const typeValue = () => ( this.state.body.length > 0 ? 'submit' : 'button');
    //   const heightStyle = `height: ${this.state.heightStyle}`;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* add resize:none in css for textarea */}
          {/* <textarea 
            onChange={this.update('body')} className="body-field" placeholder='Add your comment...'
            // name='text'
            // oninput='this.style.height = "20px";this.style.height = this.scrollHeight + "px"'
            id="" cols="30" rows="10"
          >    
          </textarea> */}

          <div className='body-field-container'>
              <textarea 
                // style={heightStyle}
                onChange={this.update('body')} className="body-field"
                placeholder='Add your comment...' 
                onFocus={() => this.toggleForm(true)}
                value={this.state.body}
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