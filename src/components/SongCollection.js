import React, { useState } from "react";
import Song from  "./Song"


const SongCollection = (props) => {

    const songs = props.songs

    const [selected, setSelected] = useState(null)


    // console.log(props)
    const songElements = songs.map((song) => {
        return <Song 
            song={song} 
            key={song.id}
            selected={selected}
            setSelected={setSelected}
            />
    })

    return(
        <div className='cell large-6' >
            <h1>Songs</h1>
            {songElements}
        </div>
    )
}
export default SongCollection