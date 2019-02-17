import React, {Component} from 'react';

class SongItem extends Component {

  render(){
    return (
      <div className='song'>
        <div className='details'>
          <h3>{this.props.title}</h3>
        </div>
      </div>
    )
  }
}


export default SongItem;
