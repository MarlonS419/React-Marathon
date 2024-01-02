import React from "react";

const Playlist = (props) => {
    const playlist = props.playlist;
    
    const playlistID = playlist.id;
    const playlistName = playlist.name;
    const playlistSongs = playlist.songs;
    const selected = props.selectedPlaylist

    console.log(`Current Playlist: ${playlistName}\nPlaylist ID: ${playlistID}\nPlaylist Songs: ${playlistSongs}`)
console.log("bla", selected)
    const playlistClicked = ()  => {
        props.setSelectedPlaylist(playlist)
    }
    let highlight
    if(selected.id === playlistID) {
        highlight = "selected"
    } 

    return(
        <p className={highlight} onClick={playlistClicked}>{playlistName}</p>
    )
}

export default Playlist;