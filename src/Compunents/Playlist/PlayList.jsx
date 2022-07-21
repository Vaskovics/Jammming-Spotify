import React from 'react';
import TrackList from '../TrackList/TrackList';


class PlayList extends React.Component {

    render() {
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            <TrackList />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    }
}

export default PlayList;