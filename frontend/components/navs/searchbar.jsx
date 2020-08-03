import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input placeholder='Search' type="text"/>
            <SearchIcon className='search-icon' />
        </div>
    )
};

export default SearchBar;