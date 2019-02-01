import React from 'react';

class Submit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        guess: '',
        correctAnswer: 'code',
        hasWon: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.compare = this.compare.bind(this);
    }

    handleChange(e) {
      this.setState({
        guess: e.target.value
      })
    }
    
    handleSubmit(e) {
      e.preventDefault();
      this.compare();
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
          <form onSubmit={this.handleSubmit}>
          Submit Guess:
          <label><input type="text" value={this.state.guess} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Crack the Code!" />
          </form>
        )
    }
}

export default Submit;