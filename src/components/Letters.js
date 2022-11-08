import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {

    showLetter(letter){
        if (this.props.letterStatus[letter]){
            return <Letter decreaseScore = {this.props.decreaseScore} solution = {this.props.solution} increaseScore = {this.props.increaseScore} 
                           selectLetter = {this.props.selectLetter} className = "selected" letter = {letter} 
                           key={letter}/>
        }
        else {
            return <Letter decreaseScore = {this.props.decreaseScore} solution = {this.props.solution} increaseScore = {this.props.increaseScore} 
                           selectLetter = {this.props.selectLetter} letter = {letter} key={letter}/>
        }
    }

    render() {
        return (<div>
                    <div>Available Letters</div>
                    <div>{Object.keys(this.props.letterStatus).map((letter) => this.showLetter(letter))}</div>
                </div>)

  }
}

export default Letters