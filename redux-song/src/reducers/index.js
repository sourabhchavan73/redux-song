import { combineReducers } from 'redux';

const songReducers = () => {
    return[
        { title: 'no scrubs', duration: '4.05'},
        { title: 'no sccrubs', duration: '3.00'},
        { title: 'all star', duration: '3.15'},
        { title: 'I want it that way', duration: '1.45'},
        { title: 'part of me', duration: '5.05'},
        { title: 'memories', duration: '4.05'},
    ]
}

const selectSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers ({
    song: songReducers,
    selectedSong: selectSongReducer
});