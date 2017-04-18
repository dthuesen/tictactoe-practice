console.log('Connecting....');
setTimeout(function() {
  // console.clear();
  console.log('... JavaScript file is connected');
}, 1000);
setTimeout(function() {
  console.log('...Congratulations!');
}, 1500);

/**
 * The Game
 * Tic Tac Toe
 */

let scoreX = 0;
let scoreO = 0;

function  startGame() {
  document.getElementById('restart').setAttribute('hidden', true);
  setMessage('Game is loading...');
  
  document.turn = "X";
  document.winner = null;

  
  for(let i = 1; i <= 9; i++) {
    clearBox(i);
  }
  
  console.log('game is loaded');
  setTimeout(function() {
    console.clear();
  }, 4000);
  setTimeout(function() {
    setMessage(document.turn + ' will start with his first move!');
  }, 1700);
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}

function setScoreO() {
  scoreO += 1;
  document.getElementById('o-score').innerText = scoreO;
}
function setScoreX() {
  scoreX += 1;
  document.getElementById('x-score').innerText = scoreX;
}

function nextMove(square) {
  console.log('nextMove: ', square);
  if (document.winner !== null) {
    setMessage(document.turn + ' already won!');
  } else if (square.innerText === '') {
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessage(document.turn + ' You can\'t set here, pick an empty square!');
    
  }
}

function switchTurn() {
  setTimeout(function() {
    document.getElementById('restart').removeAttribute("hidden");
  }, 2000);
  
  if(checkForWinner(document.turn)) {
    setMessage('Congrats ' + document.turn + ', you won!');
    if (document.turn === 'X') {
      setScoreX();
    } else {
      setScoreO();
    }
    document.winner = document.turn;
  } else if (document.turn === 'X') {
    document.turn = 'O';
    setMessage(document.turn + ' is the next player!');
  } else {
    document.turn = 'X';
    setMessage(document.turn + ' is the next player!');
  }
}

function checkForWinner(move) {
  let result = false;
  if(checkRow(1, 2, 3, move) || 
     checkRow(4, 5, 6, move) ||
     checkRow(7, 8, 9, move) ||
     
     checkRow(1, 4, 7, move) ||
     checkRow(2, 5, 8, move) ||
     checkRow(3, 6, 9, move) ||
     
     checkRow(1, 5, 9, move) ||
     checkRow(3, 5, 7, move) 
  ) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, move) {
  let result = false;
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById('s' + number).innerText;
}

function clearBox(number) {
  document.getElementById('s' + number).innerText = '';
}
