import React, { useState } from 'react';

import Tracklist from './Tracklist';

function Playlist(props) {

    return (
        <div>
            <h2>New Playlist:</h2>
            <form>
                <label>New Playlist Name:</label>
                <input value={props.playlistName} onChange={(e) => {props.onNameChange(e.target.value)}} ></input>
            </form>
            <Tracklist tracks={props.playlistTracks} isRemoval={true} onRemove={props.onRemove} />
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;