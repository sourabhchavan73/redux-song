import React from 'react';
import { connect} from 'react-redux';
import { selectSong } from '../actions/index'

const SongList = (props) => {

    const rendorSongList = () => {
        return props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            onClick={() => props.selectSong(song)} 
                            className="ui button primary">
                            Select
                        </button>
                    </div>
                    
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }

    return (
        
        <div className="ui divided list">
            {/* {console.log(props)} */}
            {rendorSongList()}
        </div>
    )
}

const mapStateToProp = state => {
    // console.log(state);
    return {songs: state.song};
    
}

export default connect(mapStateToProp, { selectSong: selectSong })(SongList);
