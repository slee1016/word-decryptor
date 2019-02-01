import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import GameLogic from './components/gameLogic.jsx';
import Submit from './components/submitBar.jsx'

class App extends React.Component {

  render() {
    return (
      <div className="app">Hello Master Decryptors!
      <Submit />
      <div>Results: {this.compare}
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));