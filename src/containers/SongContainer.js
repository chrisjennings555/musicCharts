import React, {Component} from 'react';
import SongItem from '../components/SongItem.js';
import ChartContainer from '../components/ChartComponent.js';

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
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

  render(){
    return(
      <div>
        <h2>TOP 20 SONGS</h2>
        <ChartContainer songs={this.state.songs}/>
      </div>
    );
  }

}

export default SongContainer;
