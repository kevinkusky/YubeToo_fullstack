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

        return(
            <div className='comment-index-item'>
                <div className='comment-body'>
                    {/* {this.props.comment.body} */}
                    I am a test comment - hear me rawr
                </div>
                <div className='comment-interaction'>
                    <Likes 
                        likes={[]}
                        dislikes={[]}
                        contentType='Comment'
                        contentId={1}
                    />
                    <button onClick={this.replyHandle} className='comment-reply'>REPLY</button>
                </div>
                <div className={replyClass()}>
                    <CommentForm formType='reply' replyHandle={this.replyHandle}/>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;