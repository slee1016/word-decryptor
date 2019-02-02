import React from 'react';
import GuessList from './guessList.jsx';
import GuessItems from "./guessItems.jsx";

var randomWords = require('random-english-words');

class Submit extends React.Component {
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
    }

    generateCode() {
      var word = randomWords({minChars: 4, maxChars: 4});
      return word;
      // return word.split('');
    }

    // guessContains() {
    //   for (let i = 0; i < 10; i++) {
    //     this.state.guesses.push({
    //       marks: [0, 0, 0, 0],
    //       inputs: [0, 0, 0, 0]
    //     })
    //   }
    // }

    handleChange(e) {
      this.setState({
        guess: e.target.value
      })
    }
    
    handleSubmit(e) {
      e.preventDefault();
      let res = this.compare();
      if (this._inputElement.value !== "") {
        var newGuess = {
          text: this._inputElement.value,
          key: Date.now()
        };
      }
      let test = this.state.guesses.slice()
      test.push([newGuess, res])
      this.setState({
        guesses : test
      });

      this._inputElement.value = "";
      
    }

    // compare() {
    //   if (this.state.guess === this.state.correctAnswer) {
    //     this.setState({
    //       hasWon: !this.state.hasWon
    //     },()=>{
    //       alert('You won!');
    //     });
    //   } 
    // }
    compare() {
      var guess = this.state.guess.slice(0).split('');
      var code = this.state.correctAnswer.slice(0).split('');
      var results = [];

      //Check if there are any letters that are the right letter in the right place
      for (var i = 0; i < code.length; i++) {
        if (guess[i] === code[i]) {
          results.push('X');
          // insertFull();
        }
      }

      //Check if there are any letters that are the right letter in the wrong place
      for (var j = 0; j < code.length; j++) {
        if (code.indexOf(guess[j]) !== -1) {
          results.push('0');
          // insertHalf();
        }
      }

      return results;
    }

    render() {
        return (
          <div className="guessListMain">
            <div className="header">
              <form onSubmit={this.handleSubmit}>
          {/* <label><input placeholder="submit guess" type="text" value={this.state.guess} onChange={this.handleChange} />
          </label> */}
          {/* <input type="submit" value="Crack the Code!" /> */}
          <input ref={(a) => this._inputElement = a} 
                 placeholder="submit guess" type="text" 
                 value={this.state.guess} onChange={this.handleChange} />
          <button type="submit">Take a crack at the code!</button>
          </form>
          <GuessItems entries={this.state.guesses} />
          </div>
          </div>
        )
    }
}

export default Submit;