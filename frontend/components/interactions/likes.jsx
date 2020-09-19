import React from 'react';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

class Likes extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(){

    }

    render() {
        const {likes, dislikes} = this.props.allLikes;
        return (
            <div className='like-container'>
                <div className='like-item'>
                    <UpIcon 
                        className='like-icon' 
                        // onClick={}
                    />
                    <span>{likes.length}</span>
                </div>
                <div className='like-item'>
                    <DownIcon 
                        className='like-icon' 
                        // onClick={}
                    />
                    <span>{dislikes.length}</span>
                </div>
            </div>
        )
    }
}

export default Likes;