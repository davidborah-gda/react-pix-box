import React, { Component } from 'react';

import './PixBox.css';


class PixBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enlargeSrc:"",
    };
  }
  
    selectIMG(e) {
      this.setState({
        enlargeSrc: e.target.src
      })
    }


  render() {

    return (
      
      <div className="grid-container">
                <div className="selection"><img onClick={this.selectIMG.bind(this)} src="http://celebwallpapers.net/wp-content/uploads/2018/02/free-christmas-birds-wallpaper-best-of-cardinal-bird-wallpaper-of-free-christmas-birds-wallpaper-350x150.jpg" /></div>
                <div className="selection"><img onClick={this.selectIMG.bind(this)} src="http://celebwallpapers.net/wp-content/uploads/2018/02/free-christmas-birds-wallpaper-best-of-cute-bird-wallpaper-birds-photo-animal-of-free-christmas-birds-wallpaper-350x150.jpg" /></div>
                <div className="selection"><img onClick={this.selectIMG.bind(this)} src="http://celebwallpapers.net/wp-content/uploads/2018/02/free-christmas-birds-wallpaper-free-christmas-bird-wallpaper-christmas-bird-modern-hq-of-free-christmas-birds-wallpaper-350x150.jpg" /></div>
                <div className="output"><img className="destination" src={this.state.enlargeSrc} /></div>
      </div>
    )
  }

}

export default PixBox