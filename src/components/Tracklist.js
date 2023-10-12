import React, { useState } from 'react';
import Track from './Track';

function Tracklist(props) {
    return (
        <div>
            {
                props.tracks.map((track, index) => {
                    return (
                        <Track 
                          key={track.key} 
                          track={track}
                          isRemoval={props.isRemoval}
                          onAdd={props.onAdd}
                          onRemove={props.onRemove}
                        />
                    )
                    
                })
            }
        </div>
    )
}

export default Tracklist;