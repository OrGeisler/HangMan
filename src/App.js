import React, { Component } from 'react'
import './App.css'
import Letters from './components/Letters'
import Score from './components/Score'
import Solution from './components/Solution'


class App extends Component {
  constructor() {
    super()
    this.state = this.generateState()
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  generateState(){
    let state = {}
    state['letterStatus'] = this.generateLetterStatuses()
    state['solution'] = {'word': 'BYTES' , 'hint': 'HINT'}
    state['score'] = 100
    return state
  }

  selectLetter = (letter) =>{
    let newState = {...this.state.letterStatus}
    newState[letter] = true
    this.setState({
      letterStatus: newState})
  }

  increaseScore = () => {
    if (this.state.score >= 80){
      this.setState({
        score: 100
      })
    }
    else{
      this.setState({
        score: this.state.score+20
      })
    }
  }

  decreaseScore = () => {
    this.setState({
      score: this.state.score-10
    })
  }

  render() {


    return (
      <div className='App'>
        <Score score = {this.state['score']}/>
        <Solution letterStatus = {this.state['letterStatus']}  solution = {this.state['solution']}/>
        <Letters decreaseScore = {this.decreaseScore} increaseScore = {this.increaseScore} 
                 selectLetter = {this.selectLetter} solution = {this.state['solution']} 
                 letterStatus = {this.state['letterStatus']}/>

      </div> )

  }
}

export default App