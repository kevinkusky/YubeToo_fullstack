import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchKey: '',
        };
    }

    // update(field) {
    //     return (e) => {
    //         this.setState({ [field]: e.currentTarget.value });
    //     };
    // }

    render(){
        return(
            <div className='search-bar'>
                <input
                    // value={searchKey}
                    // onChange={this.update('searchKey')}
                    placeholder='Search' 
                    type="text" />
                <SearchIcon className='search-icon' />
            </div>
        )
    }
}

export default SearchBar;