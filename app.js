
const winners = [
    [1, 2, 3], [2, 5, 8],
    [3, 6, 9], [1, 5, 9],           //Winning combos
    [4, 5, 6], [7, 8, 9],
    [3, 5, 7], [1, 4, 7]
]

const grid = () => Array.from(document.getElementsByClassName('q'));
const qNumId = () => Number.parseInt(qE1.id.replace('q', ''));
const emptyQs = () => grid().filter(_qE1 => _qE1.innertext === '');
const allSame = (arr) => arr.every(_qE1 => _qE1.innertext === arr[0].innerText && _qE1.innerText !== '');

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => 0;

const opponentTurn = () => {
    disableListeners();
    setTimeout(() => {
        takeTurn(opponentChoice(), 'o');
        enableListeners();
    }, 1000);
}

const clickFn = (event) => {
    takeTurn(qNumId(event.target), 'x');
    opponentTurn();
}

const enableListeners = () => grid().forEach(_qE1 => _qE1.addEventListener('click', clickFn));
const disableListeners = () => grid().forEach(_qE1.removeEventListener('click', clickFn));

enableListeners();