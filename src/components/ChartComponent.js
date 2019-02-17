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
          title={song['im:name'].label}
        />
      )
    })}
    </div>
  )
}

export default ChartComponent;
