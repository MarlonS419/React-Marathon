import React from 'react'
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

const App = (props) => {
  console.log(props.data)
  console.log("From App.js", props.data.playlists)
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className='grid-x '>
        <PlaylistCollection playlists={props.data.playlists} />
        <SongCollection songs={props.data.songs} />
      </div>
    </div>
  );
}

export default App
