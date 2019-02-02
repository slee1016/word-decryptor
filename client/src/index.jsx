import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Game from './components/game.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app greeting">Welcome to Code Decryptor! Think you have what it takes to crack the code??
      <div className="instructions">
        How to play: Guess the four-letter word within 10 tries!
        <div className="x">
          X's indicate: right letter, right position
        <div className="o">
          O's indicate: right letter, wrong position
      </div>
        </div>
        </div>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));