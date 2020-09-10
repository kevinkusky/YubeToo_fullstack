import React from 'react';

import CommentIndexItem from './comment_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // video: this.props.video,
            comments: []
        };
    }

    // componentDidMount(){
    //     this.props.fetchComments().then(
    //         res => this.setState({comments: this.state.comments.concat(res)})
    //     );
    // }

    render(){
        return(
            <div className='comment-index'>
                {/* <NewCommentForm /> */}

                <div className='comment-list'>
                    {this.state.comments.map(comment => (
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