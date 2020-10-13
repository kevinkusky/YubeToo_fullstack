import React from 'react';

const CurrentUserIcon = ({ username, addClass }) => {
    return(
        <div className={`${addClass} circle-letter`}>
            {username[0].toUpperCase()}
        </div>
    )
}

export default CurrentUserIcon;