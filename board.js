let c1 = document.getElementById('casilla1');
let c2 = document.getElementById('casilla2');
let c3 = document.getElementById('casilla3');
let c4 = document.getElementById('casilla4');
let c5 = document.getElementById('casilla5');
let c6 = document.getElementById('casilla6');
let c7 = document.getElementById('casilla7');
let c8 = document.getElementById('casilla8');
let c9 = document.getElementById('casilla9');

let casillas = [[c1, c2, c3], [c4, c5, c6], [c7, c8, c9]]


let board = [
    ['', '', ''], ['', '', ''], ['', '', '']
]

// establecer un valor a cada casilla basado en el valor del board
function establecer(casillas, board) {
    console.log(board)
    casillas[0][0].innerText = board[0][0];
    casillas[0][1].innerText = board[0][1];
    casillas[0][2].innerText = board[0][2];
    casillas[1][0].innerText = board[1][0];
    casillas[1][1].innerText = board[1][1];
    casillas[1][2].innerText = board[1][2];
    casillas[2][0].innerText = board[2][0];
    casillas[2][1].innerText = board[2][1];
    casillas[2][2].innerText = board[2][2];
}


let turno = 'O';
// funcion que realiza a travez de un click el cambio del valor de la casilla, y revisa si la casilla esta vacia
function interaction(casillas) {
    let dato;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            casillas[i][j].onclick = () => {
                dato = casillas[i][j].textContent;
               if (dato != '') {
                    return;
                }
                casillas[i][j].innerText = turno;
                if (turno == 'X') {
                    turno = 'O'
                } else {
                    turno = 'X'
                }
            }
        }
    }
}

establecer(casillas, board);
interaction(casillas)


