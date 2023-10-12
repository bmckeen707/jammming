import React, {useState} from 'react';

function SearchBar(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch(props.searchBar);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input id="searchBar" 
                       name="searchBar" 
                       type="text" 
                       placeholder="Song Name"
                       value={props.searchBar} 
                       onChange={(e) => props.setSearchBar(e.target.value)} />
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default SearchBar;