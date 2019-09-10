

// const ticTacToeGame = new TicTacToeGame();
// ticTacToeGame.start();

// function TicTacToeGame() {
//     const board = new Board();
//     const humanPlayer = new HumanPlayer(board);


//     const computerPlayer = new ComputerPlayer(board);
//     let turn = 0;

//     this.start = function () {
//         const config = {childList: true};
//         const observer = new MutationObserver(()=> takeTurn());
//         board.positions.forEach((el) => observer.observe(el, config));
//         takeTurn();

//     }

//     function takeTurn() {

//         if (turn % 2 === 0) {
//             humanPlayer.takeTurn();
//         } else {
//             computerPlayer.takeTurn()                        //"coding with Kris" video
//         }
//         }

//        turn++;    
//     }


// function Board() {
//     this.positions = Array.from(document.querySelectorAll('.col'));

// }

// function HumanPlayer(board) {
// this.takeTurn = function() {
//     board.positions
//     .forEach(el=> el.addEventListener('click', handleTurnTaken));
    
// }
    
//     function handleTurnTaken(event) {
//         event.target.innerText = 'X';
//     }
// }

// function ComputerPlayer(board) {
//     this.takeTurn = function() {
        
//     }
// }


let boxes = document.getElementsByClassName('col');

for(let item of boxes) {

    // console.log(item.id);
    
    item.addEventListener ('click', function() {            //logs which box was clicked
        console.log(item.id)
    })
  }



const winners = [
    [0, 1, 2], [3, 4, 5],
    [2, 5, 8], [0, 4, 8],                                   //Winning combos
    [3, 4, 5], [6, 7, 8],
    [2, 4, 6], [0, 3, 6]
]

