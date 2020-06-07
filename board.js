let c1 = document.getElementById('casilla1');
let c2 = document.getElementById('casilla2');
let c3 = document.getElementById('casilla3');
let c4 = document.getElementById('casilla4');
let c5 = document.getElementById('casilla5');
let c6 = document.getElementById('casilla6');
let c7 = document.getElementById('casilla7');
let c8 = document.getElementById('casilla8');
let c9 = document.getElementById('casilla9');
let btn = document.getElementById('btn');

let board = [
    ['x', 'o', 'x'], ['', 'x', 'x'], ['o', 'o', 'x']
]

function establecer() {
    console.log(board)
    c1.innerText = board[0][0];
    c2.innerText = board[0][1];
    c3.innerText = board[0][2];
    c4.innerText = board[1][0];
    c5.innerText = board[1][1];
    c6.innerText = board[1][2];
    c7.innerText = board[2][0];
    c8.innerText = board[2][1];
    c9.innerText = board[2][2];
}

establecer();