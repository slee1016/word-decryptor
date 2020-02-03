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

      let clues = this.compare();
      this.declareWinner();
      this.declareLoser();

      if (this._inputElement.value.length === 4) {  
        var newGuess = {
          text: this._inputElement.value,
          key: Date.now()
        }
      } else {
        function sayError() {
          alert('Please submit a four-letter word!');
        }
        setTimeout(sayError.bind(this), 500);
        
        //keep state unchanged
        this.state = {
          guess: guess,
          guesses: guesses
        }
      }
      //Update guesses
      let guesses = this.state.guesses.slice();
      guesses.unshift([newGuess, clues]);
      this.setState({ 
        guesses : guesses,
        guess: ''
      });

      //Reset
      this._inputElement.value = "";
      clues = [];
      
    }

    compare() {
      const guess = this.state.guess.slice(0).split('');
      const code = this.state.correctAnswer.slice(0).split('');
      let results = [];

      //Check if any letters are in the right place
      for (let i = 0; i < code.length; i++) {
        if (guess[i] === code[i]) {
          results.push('X');
        }
      }
      //Check if any letters exist in word but in the wrong place
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