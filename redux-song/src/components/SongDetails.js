import React from 'react'
import { connect } from 'react-redux';

const SongDetails = ({mySelectedSong}) => {

    if(!mySelectedSong){
        return (
            <div>Select a song</div>
        )
    }
    return (
        <div>
            <h2>Details for: {mySelectedSong.title}</h2>
            <p>Duration: {mySelectedSong.duration}</p>
        </div>
    )
}

const mapStateToProp = state => {
    return { mySelectedSong: state.selectedSong}
}

export default connect(mapStateToProp)(SongDetails)
