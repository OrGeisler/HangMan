import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {

    showSolutionLetter(letter){
        if (this.props.letterStatus[letter]){
            return <Letter letter = {letter} key={letter}/>
        }
        else {
            return <Letter letter = "_" key={letter}/>
        }
    }

    render() {
        return (<div>{this.props.solution['word'].split("").map((letter) => this.showSolutionLetter(letter))}
                    <div>{this.props.solution['hint']}</div>
                </div>)

  }
}

export default Solution