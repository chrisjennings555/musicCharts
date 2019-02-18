import React, {Component} from 'react';

class SongItem extends Component {

  render(){

    const altTag = `${this.props.title} by ${this.props.artist}`;

    return (
      <div className='song'>

          <div id="song-position">
            <h2>{this.props.position}</h2>
          </div>

          <div id="song-title">
            <h3>{this.props.title}</h3>
          </div>

          <div id="song-artist-name">
            <h6>{this.props.artist}</h6>
          </div>

          <div id="song-album-artwork">
            <img src={this.props.image} alt=""/>
          </div>

          <div id="song-audio-button">
            <img
              alt={"Play " + altTag}
              id={this.props.position}
              className='audio-control'
              src='play_button.png'
              onClick={() => {this.props.handlePlayPause(this.audio)}}
            />
          </div>

          <audio
            ref={(audio) => this.audio = audio}
            id={'audio' + this.props.position}
            src={this.props.audio}
          />

      </div>
    )
  }
}


export default SongItem;
