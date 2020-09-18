import React from 'react';

import UpIcon from "@material-ui/icons/ThumbUpAlt";
import DownIcon from "@material-ui/icons/ThumbDownAlt";

class Likes extends React.Component {
    // constructor(props){

    // }

    render() {
        return (
            <div className='like-container'>
                <div className='like-item'>
                    <UpIcon className='like-icon' />
                    {/* {likes} */}
                    <span>PlHld</span>
                </div>
                <div className='like-item'>
                    <DownIcon className='like-icon' />
                    {/* {dislikes} */}
                    <span>PlHld</span>
                </div>
            </div>
        )
    }
}

export default Likes;