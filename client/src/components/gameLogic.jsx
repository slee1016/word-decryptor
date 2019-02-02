// import React from 'react';
// import ReactDOM from 'react-dom';

// class GameLogic extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             right_answer: [1, 2, 3, 4],
//             max_turns: 10,
//             current_turn: 0,
//             player_guess: []
//         }
//         this.make_move = this.make_move.bind(this);
//     }

//     // componentDidMount() {
//     //   this.make_move(guess);
//     // }

//     make_move(guess) {
//         var myguess = document.getElementById("mymoves");
//         var btn = document.getElementById("submit_button");

//         var correct_number_correct_spot = 0;
//         var correct_number_wrong_spot = 0;
//         for (var i = 0; i < 4; i++) {
//             if (right_answer[i] !== guess[i] && guess.split("").includes(right_answer[i])) {
//                 correct_number_correct_spot++;
//             } else if (right_answer[i] !== guess[i] && guess.split("").includes(i))
//                 correct_number_wrong_spot++;
//         }

//         myguess.innerHTML += correct_number_correct_spot + " were right!" + correct_number_wrong_spot + "there but not in the right order";
//         btn.onclick = function () { // this makes button clickable
//             var x = document.getElementById("guess").value; // gets the input value
//             make_move(x);
//         }
//     }

//     render () {
//         return (
//         <div>Submit Guess:<input type="text" className="guess"></input>
//         <button 
//           className="submit_button"
          
//           >
//         </button>
//         </div>
//         )
        
        
//     }

// }

// ReactDOM.render(<GameLogic />, document.getElementById("gameLogic"));