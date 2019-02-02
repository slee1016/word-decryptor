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

    handleChange(e) {
      this.setState({
        guess: e.target.value
      })
    }
    
    handleSubmit(e) {
      // this.compare();
      
      if (this._inputElement.value !== "") {
        var newGuess = {
          text: this._inputElement.value,
          key: Date.now()
        };
      }
      this.setState((prevState) => {
        return {
          guesses: prevState.guesses.concat(newGuess)
        };
      });

      this._inputElement.value = "";
      e.preventDefault();
    }

    compare() {
      if (this.state.guess === this.state.correctAnswer) {
        this.setState({
          hasWon: !this.state.hasWon
        },()=>{
          alert('You won!')
        });
        
        
      } 
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