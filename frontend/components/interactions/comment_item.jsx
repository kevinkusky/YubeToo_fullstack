import React from 'react';

import Likes from './likes';
import CommentForm from './comment_form';

// import CommentControls from "@material-ui/icons/MoreVert";


class CommentIndexItem extends React.Component {
    constructor(props){
        super(props);

        this.state={
            replyOpen: false
        };

        this.replyHandle = this.replyHandle.bind(this);
    }

    replyHandle(){
        this.setState({replyOpen: !this.state.replyOpen});
    }

    render() {
        const replyClass = () =>(
            this.state.replyOpen ? 'active-reply' : 'close-reply'
        ); 

        const comment = this.props.comment;
        // debugger
        return(
            <div className='comment-index-item'>
                <div className='comment-header'>
                    <span>{comment.author}</span>
                </div>
                <div className='comment-body'>
                    {comment.body}
                </div>
                <div className='comment-interaction'>
                    <Likes 
                        // likes={comment.likes}
                        // dislikes={comment.dislikes}
                        likes={[]}
                        dislikes={[]}
                        contentType='Comment'
                        contentId={comment.id}
                    />
                    <button onClick={this.replyHandle} className='comment-reply'>REPLY</button>
                </div>
                <div className={replyClass()}>
                    <CommentForm 
                        formType='reply'
                        replyHandle={this.replyHandle}
                        parentId={comment.id}
                    />
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;