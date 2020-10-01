import React from 'react';

import CommentIndexItem from './comment_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments: this.props.comments
        };
    }

    render(){
        return(
            <div className='comment-index'>
                {this.state.comments.length > 0 ?
                    <div className='comment-list'>
                        {this.state.comments.map(comment => (
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