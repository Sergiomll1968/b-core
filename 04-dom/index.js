const root = document.getElementById('root');

// Variables globales

const maxRows = 10;
const maxColumns = 10;
let playing = false;
// let playingInProgress = false;
let numberOfShots = 0;
// let gameShots = 0;
let isComputerTurn = true;

const water = 'O';
const hit = 'X';

let row, column, shot;

const initialComputerBoard = [
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
];

const initialOponentBoard = [
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'X', 'X', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
];

const gameComputerBoard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

const gameOponentBoard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

function checkTop(row, column, divToChange) {

  if (row >= 0) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;
      displayShot(divToChange, hit);
      if (column !== 0) gameOponentBoard[row][column - 1] = water;
      if (column !== maxColumns - 1) gameOponentBoard[row][column + 1] = water;
      numberOfShots++;

      let partDiv = null;

      if (row === 0) {
        partDiv = 1 + (column + 1);
      } else {
        partDiv = (row * 10) + (column + 1);
      }

      const div = `board1Id${partDiv}`;

      const z = document.getElementById(div);

      checkTop(row - 1, column, z);

    }
  }
}

function checkDown(row, column, divToChange) {

  if (row < maxRows) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;
      displayShot(divToChange, hit);
      if (column !== 0) gameOponentBoard[row][column - 1] = water;
      if (column !== maxColumns - 1) gameOponentBoard[row][column + 1] = water;
      numberOfShots++;

      let partDiv = null;

      if (row === 0) {
        partDiv = 1 + (column + 1);
      } else {
        partDiv = (row * 10) + (column + 1);
      }

      const div = `board1Id${partDiv}`;

      const z = document.getElementById(div);

      checkDown(row + 1, column, z);

    }
  }
}

function checkLeft(row, column, divToChange) {

  if (column >= 0) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;
      displayShot(divToChange, hit);
      if (row !== 0) gameOponentBoard[row - 1][column] = water;
      numberOfShots++;

      let partDiv = null;

      if (row === 0) {
        partDiv = 1 + (column + 1);
      } else {
        partDiv = (row * 10) + (column + 1);
      }

      const div = `board1Id${partDiv}`;

      const z = document.getElementById(div);

      checkLeft(row, column - 1, z);

    }
  }
}

function checkRight(row, column, divToChange) {

  if (column < maxColumns) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;
      displayShot(divToChange, hit);
      if (row !== 0) gameOponentBoard[row - 1][column] = water;
      if (row != maxRows - 1) gameOponentBoard[row + 1][column] = water;
      numberOfShots++;

      let partDiv = null;

      if (row === 0) {
        partDiv = 1 + (column + 1);
      } else {
        partDiv = (row * 10) + (column + 1);
      }

      const div = `board1Id${partDiv}`;

      const z = document.getElementById(div);

      checkRight(row, column + 1, z);

    }
  }
}

// Creación de titulo del juego y asignación de estilos definidos en CSS

const titleInfo = document.createElement('div');
titleInfo.setAttribute('class', 'titleInfo');
titleInfo.textContent = 'Juguemos a "hundir la flota"';
root.appendChild(titleInfo);

// Creación de los dos tableros en el DOM y asignación de estilos definidos en CSS

const boardsContainer = document.createElement('div');
boardsContainer.setAttribute('class', 'boardsContainer');
root.appendChild(boardsContainer);

const gameSpace1 = document.createElement('div');
gameSpace1.setAttribute('class', 'gameSpace');
boardsContainer.appendChild(gameSpace1);

const gameSpace2 = document.createElement('div');
gameSpace2.setAttribute('class', 'gameSpace');
boardsContainer.appendChild(gameSpace2);

const columnNumbers1 = document.createElement('div');
columnNumbers1.setAttribute('class', 'columnNumbers');
gameSpace1.appendChild(columnNumbers1);

const columnNumbers2 = document.createElement('div');
columnNumbers2.setAttribute('class', 'columnNumbers');
gameSpace2.appendChild(columnNumbers2);

const rowLetters1 = document.createElement('div');
rowLetters1.setAttribute('class', 'rowLetters');
gameSpace1.appendChild(rowLetters1);

const rowLetters2 = document.createElement('div');
rowLetters2.setAttribute('class', 'rowLetters');
gameSpace2.appendChild(rowLetters2);

const board1 = document.createElement('div');
board1.setAttribute('class', 'board1');
gameSpace1.appendChild(board1);

const board2 = document.createElement('div');
board2.setAttribute('class', 'board2');
gameSpace2.appendChild(board2);

const rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

for (let i = 0; i < 10; i++) {

  const rowLetterDiv1 = document.createElement('div');
  rowLetterDiv1.setAttribute('class', 'cell');
  rowLetterDiv1.textContent = rowLetters[i];
  rowLetters1.appendChild(rowLetterDiv1);

  const rowLetterDiv2 = document.createElement('div');
  rowLetterDiv2.setAttribute('class', 'cell');
  rowLetterDiv2.textContent = rowLetters[i];
  rowLetters2.appendChild(rowLetterDiv2);

  const columnNumberDiv1 = document.createElement('div');
  columnNumberDiv1.setAttribute('class', 'cell');
  columnNumberDiv1.textContent = i + 1;
  columnNumbers1.appendChild(columnNumberDiv1);

  const columnNumberDiv2 = document.createElement('div');
  columnNumberDiv2.setAttribute('class', 'cell');
  columnNumberDiv2.textContent = i + 1;
  columnNumbers2.appendChild(columnNumberDiv2);

}

for (let i = 1; i <= 100; i++) {

  const divBoard1 = document.createElement('div');
  divBoard1.setAttribute('class', 'cell');
  divBoard1.setAttribute('id', `board1Id${i}`);
  divBoard1.addEventListener('click', clickedCell);
  board1.appendChild(divBoard1);

  const divBoard2 = document.createElement('div');
  divBoard2.setAttribute('class', 'cell');
  divBoard2.setAttribute('id', `board2Id${i}`);
  divBoard2.addEventListener('click', clickedCell);
  board2.appendChild(divBoard2);

}

// Creación de botón de inicio de juego, texto informativo de turno de juego, texto informativo de número de tiradas y asignación de estilos definidos en CSS

const gameInfo = document.createElement('div');
gameInfo.setAttribute('class', 'gameInfo');
root.appendChild(gameInfo);

const startGameButton = document.createElement('button');
startGameButton.setAttribute('class', 'button');
startGameButton.innerHTML = 'Iniciar juego';
startGameButton.addEventListener('click', startGame);
gameInfo.appendChild(startGameButton);

const turnInfo = document.createElement('p');
turnInfo.setAttribute('class', 'turnInfo');
turnInfo.textContent = `Turno de: ${isComputerTurn ? 'Ordenador' : 'Oponente'}`;
gameInfo.appendChild(turnInfo);

const shotsInfo = document.createElement('p');
shotsInfo.setAttribute('class', 'shotsInfo');
shotsInfo.textContent = `Número de jugadas: ${numberOfShots}`;
gameInfo.appendChild(shotsInfo);

// Funciones del juego

function displayShot(divToChange, shot) {

  // pintando hit o water en div correspondiente

  divToChange.textContent = shot;

}

function clickedCell() {
  if (!isComputerTurn) {
    playOponent(this);
  }
}

function playComputer() {

  console.log('turno de ordenador');

  do {
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
  } while (gameOponentBoard[row][column] !== ' ');

  // ******************************************************************************************** */

  shot = initialOponentBoard[row][column];

  let partDiv = null;

  if (row === 0) {
    partDiv = 1 + (column + 1);
  } else {
    partDiv = (row * 10) + (column + 1);
  }

  const div = `board1Id${partDiv}`;

  const divToChange = document.getElementById(div);

  numberOfShots++;
  shotsInfo.textContent = `Número de jugadas: ${numberOfShots}`;

  if (shot === hit) {

    gameOponentBoard[row][column] = hit;
    displayShot(divToChange, hit);
    checkTop(row - 1, column, divToChange);
    checkDown(row + 1, column, divToChange);
    checkRight(row, column + 1, divToChange);
    checkLeft(row, column - 1, divToChange);

  } else {

    gameOponentBoard[row][column] = water;
    displayShot(divToChange, water);

  }

  // Comprobar si gana ordenador
  let quedanbarcos = false;

  for (let i = 0; i < maxRows; i++) {

    for (let j = 0; j < maxColumns; j++) {

      if (initialOponentBoard[i][j] === hit && gameOponentBoard[i][j] !== hit) {

        quedanbarcos = true;
        break;

      }

      if (quedanbarcos) break;

    }
  }

  if (!quedanbarcos) {
    // endGame();
    alert('Juego terminado');
  }

  isComputerTurn = !isComputerTurn;
  turnInfo.textContent = `Turno de: ${isComputerTurn ? 'Ordenador' : 'Oponente'}`;

}

function playOponent(divToChange) {

  console.log('turno de oponente');

  const divToChangeId = divToChange.id;
  const divToChangeIdNumber = divToChangeId.split('').slice(8, divToChangeId.length).join('');

  if ((divToChangeIdNumber % 10) === 0) {
    if (divToChangeIdNumber === 10) {
      row = 0;
    } else {
      row = (divToChangeIdNumber / 10) - 1;
    }
  } else {
    row = Math.floor(divToChangeIdNumber / 10);
  }

  if ((divToChangeIdNumber % 10) === 0) {
    column = 9;
  } else {
    column = (divToChangeIdNumber % 10) - 1;
  }

  shot = initialComputerBoard[row][column];

  if (shot === hit) {

    gameComputerBoard[row][column] = hit;
    displayShot(divToChange, hit);

  } else {

    gameComputerBoard[row][column] = water;
    displayShot(divToChange, water);

  }

  // Comprobar si he ganado
  let quedanbarcos = false;

  for (let i = 0; i < maxRows; i++) {

    for (let j = 0; j < maxColumns; j++) {

      if (initialOponentBoard[i][j] === hit && gameOponentBoard[i][j] !== hit) {

        quedanbarcos = true;
        break;

      }

      if (quedanbarcos) break;

    }

  }

  if (!quedanbarcos) {
    // endGame();
    alert('Juego terminado');
  }

  isComputerTurn = !isComputerTurn;
  playComputer();

}

function resetBoards() {

  for (let i = 1; i <= 100; i++) {

    document.getElementById(`board1Id${i}`).textContent = '';
    document.getElementById(`board2Id${i}`).textContent = '';
    numberOfShots = 0;
    shotsInfo.textContent = `Número de jugadas: ${numberOfShots}`;

  }

}

// Función de entrada al juego

function startGame() {

  playing = !playing;

  if (playing) {

    startGameButton.innerHTML = 'Reiniciar juego';
    turnInfo.style.visibility = 'visible';
    playComputer();

  } else {

    startGameButton.innerHTML = 'Iniciar juego';
    turnInfo.style.visibility = 'hidden';
    resetBoards();
    playing = false;

  }
}

// Función de fin de juego

function endGame() {

  playing = false;
  turnInfo.innerHTML = 'Juego terminado';
  turnInfo.setAttribute('class', 'endGame');

}