
let topLeft = document.getElementById('0');
let topMid = document.getElementById('1');
let topRight = document.getElementById('2');
let centLeft = document.getElementById('3');
let centMid = document.getElementById('4');
let centRight = document.getElementById('5');
let botLeft = document.getElementById('6');
let botMid = document.getElementById('7');
let botRight = document.getElementById('8');


let boxes = document.getElementsByClassName('col');

for (let item of boxes) {
    var plays = 0;
    // console.log(item.id);

    item.addEventListener('click', function () {
        //logs which box was clicked

        if (plays <= 8) {
            if (plays % 2 == 0) {
                document.getElementById(item.id).innerHTML = "X";
                checkWin();
            } else {
                document.getElementById(item.id).innerHTML = "O";
                checkWin();
            }
            //places character into box

        } else {
            alert("Too many plays");
        }
        //prevents more than 9 clicks

        plays++;
    })
}

const player1 = 'X';
const player2 = 'O';
//defining players


//Winning combos


function checkWin() {
    if (topLeft.innerHTML == 'X' && topMid.innerHTML == 'X' && topRight.innerHTML == 'X') {
        alert('Player One wins!');

    } else if (centLeft.innerHTML == 'X' && centMid.innerHTML == 'X' && centRight.innerHTML == 'X') {
        alert('Player One wins!')

    } else if (botLeft.innerHTML == 'X' && botMid.innerHTML == 'X' && botRight.innerHTML == 'X') {
        alert('Player One wins!')

    } else if (topLeft.innerHTML == 'X' && centLeft.innerHTML == 'X' && botLeft.innerHTML == 'X') {
        alert('Player One wins!')

    } else if (topMid.innerHTML == 'X' && centMid.innerHTML == 'X' && botMid.innerHTML == 'X') {
        alert('Player One wins!')

    } else if (topRight.innerHTML == 'X' && centRight.innerHTML == 'X' && botRight.innerHTML == 'X') {
        alert('Player One wins!')

    } else if (topLeft.innerHTML == 'X' && centMid.innerHTML == 'X' && botRight.innerHTML == 'X') {
        alert('Player One wins!')

    } else if (topRight.innerHTML == 'X' && centMid.innerHTML == 'X' && botLeft.innerHTML == 'X') {
        alert('Player One wins!')
        // Player 1 winning combos and alerts (not using arrays)

    } else if (topLeft.innerHTML == 'O' && topMid.innerHTML == 'O' && topRight.innerHTML == 'O') {
        alert('Player Two wins!');

    } else if (centLeft.innerHTML == 'O' && centMid.innerHTML == 'O' && centRight.innerHTML == 'O') {
        alert('Player Two wins!')

    } else if (botLeft.innerHTML == 'O' && botMid.innerHTML == 'O' && botRight.innerHTML == 'O') {
        alert('Player Two wins!')

    } else if (topLeft.innerHTML == 'O' && centLeft.innerHTML == 'O' && botLeft.innerHTML == 'O') {
        alert('Player Two wins!')

    } else if (topMid.innerHTML == 'O' && centMid.innerHTML == 'O' && botMid.innerHTML == 'O') {
        alert('Player Two wins!')

    } else if (topRight.innerHTML == 'O' && centRight.innerHTML == 'O' && botRight.innerHTML == 'O') {
        alert('Player Two wins!')

    } else if (topLeft.innerHTML == 'O' && centMid.innerHTML == 'O' && botRight.innerHTML == 'O') {
        alert('Player Two wins!')

    } else if (topRight.innerHTML == 'O' && centMid.innerHTML == 'O' && botLeft.innerHTML == 'O') {
        alert('Player Two wins!')
            //Player 2 winning combos and alerts (no arrays)
    }
}
