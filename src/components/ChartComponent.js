import React from 'react';
import SongItem from './SongItem.js';

const ChartComponent = (props) => {
  if (props.songs == null || props.songs.length === 0) {
    return <p> Loading... </p>
  }
  return (
    <div>
    {props.songs.map((song, index) => {
      return (
        <SongItem
        key={index}
        position={index + 1}
        title={song['im:name'].label}
        artist={song['im:artist'].label}
        image={song['im:image'][1].label}
        audio={song.link[1].attributes.href}
        handlePlayPause={props.handlePlayPause}
        />
      )
    })}
    </div>
  )
}

export default ChartComponent;
