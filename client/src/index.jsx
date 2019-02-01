import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <div className="app">Hello Master Decryptors!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));