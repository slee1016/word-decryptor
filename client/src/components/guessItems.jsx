import React from "react";

class GuessItems extends React.Component {
  createGuesses(guess) {
    return <li key={guess.key}>{guess.text}</li>
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