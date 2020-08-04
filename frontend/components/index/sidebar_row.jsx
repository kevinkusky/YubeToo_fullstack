import React from 'react';

const SidebarRow = ({ Icon, title }) => {
    return (
        <div>
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarRow;