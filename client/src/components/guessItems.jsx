import React from "react";

class GuessItems extends React.Component {
  createGuesses(guess) {
    return <li key={guess.key}>{guess[0].text} {guess[1].map(item => {
        return <span>{item}</span>
    })}</li>
  }

  render() {
    var guessEntries = this.props.entries;
    var guessItems = guessEntries.map(this.createGuesses);

    return (
      <ul className="theList">{guessItems}</ul>
    );
  }
};

export default GuessItems;