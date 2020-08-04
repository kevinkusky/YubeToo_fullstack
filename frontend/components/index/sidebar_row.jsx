import React from 'react';

const SidebarRow = ({ Icon, title }) => {
    return (
        <div className='sidebar-row'>
            <Icon className='sidebar-row-icon' />
            <h2 className='sidebar-row-title'>{title}</h2>
        </div>
    )
}

export default SidebarRow;