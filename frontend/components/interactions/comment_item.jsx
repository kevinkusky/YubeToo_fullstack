import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div>
                <div>
                    {/* {this.props.comment.body} */}
                </div>
                <div className='comment-interaction'>
                    {/* <button onClick={this.props.subCommentForm}>Reply</button> */}
                    {/* <LikeComponent /> */}
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;