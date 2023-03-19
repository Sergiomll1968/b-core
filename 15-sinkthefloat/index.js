// https://es.wikipedia.org/wiki/Batalla_naval_(juego)

// 2 tableros de 10 x 100 (A-J vertical / 1-10 horizontal)

// tablero 1) donde colocamos nuestros barcos
// tablero 2) donde se anotarán los disparos

// Símbolos: 1  = sin atacar / O = agua / X = tocado / * = hundido / # = los barcos

const maxRows = 10;
const maxColumns = 10;
let playing = true;
let numberOfShots = 0;

const water = 'O';
const hit = 'X';

let row, column, shot;

const initialBoard = [
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

let gameBoard = [
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

function checkTop(row, column) {

  if (row >= 0) {

    if (initialBoard[row][column] === hit) {

      gameBoard[row][column] = hit;
      if (column !== 0) gameBoard[row][column - 1] = water;
      if (column !== maxColumns - 1) gameBoard[row][column + 1] = water;
      numberOfShots++;
      checkTop(row - 1, column);

    }
  }
}

function checkDown(row, column) {

  if (row < maxRows) {

    if (initialBoard[row][column] === hit) {

      gameBoard[row][column] = hit;
      if (column !== 0) gameBoard[row][column - 1] = water;
      if (column !== maxColumns - 1) gameBoard[row][column + 1] = water;
      numberOfShots++;
      checkDown(row + 1, column);

    }
  }
}

function checkLeft(row, column) {

  if (column >= 0) {

    if (initialBoard[row][column] === hit) {

      gameBoard[row][column] = hit;
      if (row !== 0) gameBoard[row - 1][column] = water;
      if (row != maxRows - 1) gameBoard[row + 1][column] = water;
      numberOfShots++;
      checkLeft(row, column - 1);

    }
  }
}

function checkRight(row, column) {

  if (column < maxColumns) {

    if (initialBoard[row][column] === hit) {

      gameBoard[row][column] = hit;
      if (row !== 0) gameBoard[row - 1][column] = water;
      if (row != maxRows - 1) gameBoard[row + 1][column] = water;
      numberOfShots++;
      checkRight(row, column + 1);

    }
  }
}

while (playing) {

  row = Math.floor(Math.random() * 10);
  column = Math.floor(Math.random() * 10);

  shot = initialBoard[row][column];

  if (gameBoard[row][column] === ' ') {

    numberOfShots++;

    if (shot === hit) {

      gameBoard[row][column] = hit;
      checkTop(row - 1, column);
      checkDown(row + 1, column);
      checkRight(row, column + 1);
      checkLeft(row, column - 1);

    } else {

      gameBoard[row][column] = water;

    }

  }

  let quedanbarcos = false;
  playing = false;

  for (let i = 0; i < maxRows; i++) {

    for (let j = 0; j < maxColumns; j++) {

      if (initialBoard[i][j] === hit && gameBoard[i][j] !== hit) {

        playing = true;
        quedanbarcos = true;
        break;

      }

      if (quedanbarcos) break;

    }
  }
}

document.write('Número de tiros: ' + numberOfShots + '<br><br>');
// console.log('Número de tiros: ' + numberOfShots);

document.write('Tablero inicial' + '<br><br>');
// console.log('Tablero inicial');

for (let i = 0; i < maxRows; i++) {
  for (let j = 0; j < maxColumns; j++) {
    if (initialBoard[i][j] === ' ') {
      document.write('-');
      // console.log('-');
    } else {
      document.write(initialBoard[i][j]);
      // console.log(initialBoard[i][j]);
    }
  }
  document.write('<br>');
}

document.write('<br>Tablero final' + '<br><br>');
// console.log('Tablero final');

for (let i = 0; i < maxRows; i++) {
  for (let j = 0; j < maxColumns; j++) {
    if (gameBoard[i][j] === ' ') {
      document.write(water);
      // console.log(water);
    } else {
      document.write(gameBoard[i][j]);
      // console.log(gameBoard[i][j]);
    }
  }
  document.write('<br>');
}
