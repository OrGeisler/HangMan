import React, { Component } from 'react';

class Score extends Component {

  scoreColor = () => {
    if (this.props.score >= 80 ){
      return "highScore"
    }

    else if (this.props.score >= 50) {
      return "mediomScore"
    } 
    else {
      return "lowScore"
    }
  } 

  render() {
    return (<div className = {this.scoreColor()} >{this.props.score}</div>)

  }
}

export default Score