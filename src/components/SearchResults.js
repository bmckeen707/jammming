import React, {useState} from 'react';
import Tracklist from './Tracklist';

function SearchResults(props) {
    return (
        <div>
            <h2>Search Results:</h2>
            <Tracklist tracks={props.tracks} isRemoval={false} onAdd={props.onAdd} /> 
        </div>
    )
}

export default SearchResults;