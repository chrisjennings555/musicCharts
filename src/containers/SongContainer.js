import React, {Component} from 'react';
import SongItem from '../components/SongItem.js';
import ChartContainer from '../components/ChartComponent.js';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !==200) return;
      const jsonString = request.responseText;
      const songsList = JSON.parse(jsonString);
      this.setState({songs: songsList.feed.entry})
    })

    request.send();
  }

  handlePlayPause(audio){
    audio.paused ? audio.play() : audio.pause();
    audio.classList.toggle('playing');
  }

  render(){
    return(
      <div>
        <div id="titleBanner">
        <h2>UK TOP 20 HITS!</h2>
        </div>
        <ChartContainer
        songs={this.state.songs}
        url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
        handlePlayPause={this.handlePlayPause}
        />
      </div>
    );
  }

}

export default SongContainer;
