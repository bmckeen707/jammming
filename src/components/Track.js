import React, {useState} from 'react';

function Track(props) {

    function buttonClick() {
        if (props.isRemoval) {
            return <button onClick={() => props.onRemove(props.track)}>-</button>
        } else {
            return <button onClick={() => props.onAdd(props.track)}>+</button>
        }
    }

    return (

        <div>
            <h3>{props.track.song}</h3>
            <h4>{props.track.album} | {props.track.artist}</h4>
            {buttonClick()}
        </div>
    )
}

export default Track;