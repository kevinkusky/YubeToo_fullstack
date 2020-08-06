import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchKey: '',
        };
    }

    update(field){
        return (e) => {
            this.setState({searchKey: e.currentTarget});
        };
    }
    
    render(){
        return(
            <div className='search-bar'>
                <input
                    value={searchKey}
                    onChange={this.update()}
                    placeholder='Search' 
                    type="text" />
                <SearchIcon className='search-icon' />
            </div>
        )
    }
}

export default SearchBar;