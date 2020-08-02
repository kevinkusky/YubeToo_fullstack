import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input type="text"/>
            <button className='search-icon'>
                <SearchIcon />
            </button>
        </div>
    )
};

export default SearchBar;