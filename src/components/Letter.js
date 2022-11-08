import React, { Component } from 'react';

class Letter extends Component {
  updateScore = (letter) =>{
    if (this.props.solution['word'].includes(letter)){
        this.props.increaseScore()
    }
    else{
      this.props.decreaseScore()
    }
}
    showLetterComplete = () => {
      this.props.selectLetter(this.props.letter)
      this.updateScore(this.props.letter)
    }
    render() {
        return (<span onClick = {this.showLetterComplete} className={this.props.className}>{this.props.letter}</span>)

  }
}

export default Letter