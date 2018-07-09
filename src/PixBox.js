import React, { Component } from 'react';

import './PixBox.css';


class PixBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      first: "#FF0000",
      second: "#0000FF"
    };
  }

  First() {
    this.setState({
      color: this.state.first
    });
  }
  Second() {
    this.setState({
      color: this.state.second
    });
  }

  changeColor(evt) {

    this.setState({
      color: "red"
    });
  }

  changeFirstColor(evt){
    this.setState({
     first: evt.target.value
    })
  }

  changeSecondColor(evt){
    this.setState({
      second: evt.target.value
    })
  }
  

  render() {
    const styles = { backgroundColor: this.state.color };
    return (
      <div className="PixBox-container">
        {this.props.title ? <h1 className="PixBox-title">{this.props.title}</h1> : null}
        <h1 className="box" style={styles}></h1>
        <section>
          <button onClick={this.First.bind(this)} className="PixBox-button">First</button>
          <button onClick={this.Second.bind(this)} className="PixBox-button">Second</button>
        </section>
        <section><h3>Choose Your First Color</h3>
          <input
            placeholder="HEX Color Code"
            onChange={this.changeFirstColor.bind(this)}
            className="PixBox-input"
            value= {this.state.first} />
          <h3>Choose Your Second Color</h3>
          <input
            placeholder="HEX Color Code"
            onChange={this.changeSecondColor.bind(this)}
            className="PixBox-input"
            value= {this.state.second} />
        </section>
      </div>
    )
  }

}

export default PixBox