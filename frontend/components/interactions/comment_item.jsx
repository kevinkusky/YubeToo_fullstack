import React from 'react';

import Likes from './likes';
import CommentForm from './comment_form';

import CommentControls from "@material-ui/icons/MoreVert";


class CommentIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div className='comment-index-item'>
                <div>
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
                    <button className='comment-reply'>REPLY</button>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;