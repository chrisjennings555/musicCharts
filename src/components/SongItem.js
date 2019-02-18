import React, {Component} from 'react';

class SongItem extends Component {

  render(){

    const altTag = `${this.props.title} by ${this.props.artist}`;

    return (
      <div className='song'>

          <h3>{this.props.position}. {this.props.title}</h3>

          <h6>{this.props.artist}</h6>

          <img src={this.props.image} alt=""/>

          <img
            alt={"Play " + altTag}
            id={this.props.position}
            className='audio-control'
            src='play_button.png'
            onClick={() => {this.props.handlePlayPause(this.audio)}}
          />

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
