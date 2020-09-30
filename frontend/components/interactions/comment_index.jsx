import React from 'react';

import CommentIndexItem from './comment_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const comments = this.props.comments;

        return(
            <div className='comment-index'>
                {comments.length > 0 ?
                    <div className='comment-list'>
                        {this.props.comments.map(comment => (
                            <CommentIndexItem
                                comment={comment}
                                key={comment.id}
                            />
                        ))}
                    </div> :
                    <div></div>
                }
            </div>
        )
    }
}

export default CommentIndex;