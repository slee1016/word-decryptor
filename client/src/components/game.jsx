import React from 'react';
import GuessItems from "./guessItems.jsx";

const randomWords = require('random-english-words');

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        correctAnswer: this.generateCode(),
        guess: '',
        hasWon: false,
        guesses: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.compare = this.compare.bind(this);
      this.generateCode = this.generateCode.bind(this);
      this.declareWinner = this.declareWinner.bind(this);
      this.declareLoser = this.declareLoser.bind(this);
    }

    generateCode() {
      const word = randomWords({minChars: 4, maxChars: 4});
      return word;
    }

    handleChange(e) {
      this.setState({
        guess: e.target.value
      })
    }
    
    handleSubmit(e) {
      e.preventDefault();

      let res = this.compare();
      this.declareWinner();
      this.declareLoser();

      if (this._inputElement.value !== "") {
        var newGuess = {
          text: this._inputElement.value,
          key: Date.now()
        };
      }

      let test = this.state.guesses.slice();
      test.push([newGuess, res]);
      this.setState({ 
        guesses : test,
        guess: ''
      });

      //reset
      this._inputElement.value = "";
      res = [];
      
    }

    compare() {
      const guess = this.state.guess.slice(0).split('');
      const code = this.state.correctAnswer.slice(0).split('');
      let results = [];

      //Check if there are any letters that are the right letter in the right place
      for (let i = 0; i < code.length; i++) {
        if (guess[i] === code[i]) {
          results.push('X');
        }
      }
      //Check if there are any letters that are the right letter in the wrong place
      for (let j = 0; j < code.length; j++) {
        if (code.indexOf(guess[j]) !== -1 && guess[j] !== code[j]) {
          results.push('0');
        }
      }
      return results;
    }

    declareWinner() {
      if (this.state.guess === this.state.correctAnswer) {
        this.setState({
          hasWon: !this.state.hasWon
        });

        function sayWinner() {
          alert(`You cracked the code!`)
        }
        setTimeout(sayWinner, 300)
      } 
    }

    declareLoser() {
      if (this.state.guess !== this.state.correctAnswer && this.state.guesses.length === 9) {
        function sayLoser() {
          alert('You failed!\nThe code was: ' + this.state.correctAnswer)
        }
        setTimeout(sayLoser.bind(this), 500)
      } 
    }

    render() {
        return (
          <div className="guessListMain">
            <div className="header">
              <form onSubmit={this.handleSubmit}>
          <input ref={(a) => this._inputElement = a} 
                 placeholder="" type="text" 
                 value={this.state.guess} onChange={this.handleChange} />
          <button type="submit">Decrypt me!</button>
          </form>
          <GuessItems entries={this.state.guesses} />
          </div>
          </div>
        )
    }
}

export default Game;