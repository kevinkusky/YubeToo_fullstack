import React from 'react';
import {connect} from 'react-redux';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const newComment = () => (
            <div></div>
        )

        const editComment = () => (
            <div></div>
        )
        return (
            <div></div>
        )
    }
}

// const mSTP = state => ({

// })

// const mDTP = dispatch => ({

// })


export default connect(mSTP)(CommentForm);