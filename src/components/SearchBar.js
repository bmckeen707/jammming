import React, {useState} from 'react';

function SearchBar(props) {
    
    const [searchBar, setSearchBar] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch(searchBar);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input id="searchBar" 
                       name="searchBar" 
                       type="text" 
                       placeholder="Song Name"
                       value={searchBar} 
                       onChange={(e) => setSearchBar(e.target.value)} />
                <button type="submit" >Search</button>
            </form>
        </div>
    )
}

export default SearchBar;