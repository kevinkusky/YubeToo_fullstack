import React from 'react';

import CommentIndexItem from './comment_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='comment-index'>
                {/* <NewCommentForm /> */}

                <div className='comment-list'>
                    {this.props.comments.map(comment => (
                        <CommentIndexItem
                            comment={comment}
                            key={comment.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CommentIndex;