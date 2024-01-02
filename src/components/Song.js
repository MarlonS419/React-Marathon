import React from 'react'

const Song = (props) => {
    const song = props.song

    const songName = song.name
    const songArtist = song.artist

    const handleClick = () => {
        props.setSelected(song.id)
    }


    let selected
    if(song.id === props.selected) {
        selected = "selected"
    }

    return(
        <p className={selected} onClick={handleClick}>{songName} - {songArtist}</p>
    )
}

export default Song;