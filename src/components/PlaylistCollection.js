import React, { useState } from "react";
import Playlist from "./Playlist";

const PlaylistCollection = (props) => {
    const playlistArray = props.playlists;

    const [selectedPlaylist, setSelectedPlaylist] = useState({})
    
    // console.log(`From PlaylistCollections.js: ${props.playlists[0].name}`);
    const playlistComponents = playlistArray.map((playlist) => {
        return <Playlist
        key={playlist.id} 
        playlist={playlist}
        selectedPlaylist={selectedPlaylist}
        setSelectedPlaylist={setSelectedPlaylist}
        />
    })
    return (
        <div className='cell large-6' >
            <h1>Playlists</h1>
            {playlistComponents}
        </div>
    )
}

export default PlaylistCollection