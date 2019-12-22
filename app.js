
let topLeft = document.getElementById('0');
let topMid = document.getElementById('1');
let topRight = document.getElementById('2');
let centLeft = document.getElementById('3');
let centMid = document.getElementById('4');
let centRight = document.getElementById('5');
let botLeft = document.getElementById('6');
let botMid = document.getElementById('7');
let botRight = document.getElementById('8');
//assigning names to box spots


let boxes = document.getElementsByClassName('col');

for (let item of boxes) {
    var plays = 0;
    // console.log(item.id);

    item.addEventListener('click', function () {


        if (plays <= 8) {                   //preventing more than 9 turns
            if (plays % 2 == 0) {           //taking account of even and odd (X and O turns)
                if (document.getElementById(item.id).innerHTML == "") {
                    document.getElementById(item.id).innerHTML = "X";
                    pTurns++;
                    //incrementing turns by 1 to alert if there's a tie

                    checkWin();
                    plays++;
                }
            } else {
                if (document.getElementById(item.id).innerHTML == "") {
                    document.getElementById(item.id).innerHTML = "O";
                    checkWin();
                    plays++;
                }
            }
            //places character into box, increments turns by 1

        } else {
            alert("Too many plays");
        }
        //prevents more than 9 clicks


    })
}


const player1 = 'X';
const player2 = 'O';
//defining players

var pTurns = 0;



//Winning combos


function checkWin() {
    if (topLeft.innerHTML == 'X' && topMid.innerHTML == 'X' && topRight.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.');
        window.location.reload();

        // if (winningCombos[0][0].innerHTML =='X') {
        //     alert('Player One wins!');
        //     window.location.reload();

    } else if (centLeft.innerHTML == 'X' && centMid.innerHTML == 'X' && centRight.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')

        window.location.reload();

    } else if (botLeft.innerHTML == 'X' && botMid.innerHTML == 'X' && botRight.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')

        window.location.reload();

    } else if (topLeft.innerHTML == 'X' && centLeft.innerHTML == 'X' && botLeft.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')

        window.location.reload();

    } else if (topMid.innerHTML == 'X' && centMid.innerHTML == 'X' && botMid.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')

        window.location.reload();

    } else if (topRight.innerHTML == 'X' && centRight.innerHTML == 'X' && botRight.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')
        window.location.reload();

    } else if (topLeft.innerHTML == 'X' && centMid.innerHTML == 'X' && botRight.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')
        window.location.reload();

    } else if (topRight.innerHTML == 'X' && centMid.innerHTML == 'X' && botLeft.innerHTML == 'X') {
        alert('Player One wins! Give yourself a few pats on the back.')
        window.location.reload();
        // Player 1 winning combos and alerts (not using an array)
        // Quirky alert box. Nice

    } else if (topLeft.innerHTML == 'O' && topMid.innerHTML == 'O' && topRight.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.');
        window.location.reload();

    } else if (centLeft.innerHTML == 'O' && centMid.innerHTML == 'O' && centRight.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (botLeft.innerHTML == 'O' && botMid.innerHTML == 'O' && botRight.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (topLeft.innerHTML == 'O' && centLeft.innerHTML == 'O' && botLeft.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (topMid.innerHTML == 'O' && centMid.innerHTML == 'O' && botMid.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (topRight.innerHTML == 'O' && centRight.innerHTML == 'O' && botRight.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (topLeft.innerHTML == 'O' && centMid.innerHTML == 'O' && botRight.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (topRight.innerHTML == 'O' && centMid.innerHTML == 'O' && botLeft.innerHTML == 'O') {
        alert('Player Two wins! I\'m legitimately proud of you.')
        window.location.reload();

    } else if (pTurns >= 5) {
        alert('It was a tie. Come on now.')
        window.location.reload();
    }
    //Player 2 winning combos and alerts (no array)


}

let winningCombos = [
    [topLeft, topMid, topRight],
    [centLeft, centMid, centRight],
    [botLeft, botMid, botRight],
    [topLeft, centLeft, botLeft],
    [topMid, centMid, botMid],
    [topRight, centRight, botRight],
    [topLeft, centMid, botRight],
    [topRight, centMid, botLeft]
]




