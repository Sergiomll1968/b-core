const root = document.getElementById('root');

// Variables globales

const maxRows = 10;
const maxColumns = 10;
let oponentName = 'Pon aquí tu nombre';
let playing = false;
let numberOfShots = 0;
let isComputerTurn = true;
let checkedBoard;

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
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
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
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
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

// Crear y mostrar titulo del juego y asignación de estilos definidos en CSS

const titleInfo = document.createElement('div');
titleInfo.setAttribute('class', 'titleInfo');
titleInfo.textContent = 'Juguemos a "hundir la flota"';
root.appendChild(titleInfo);

// Crear y mostrar pagina principal con instrucciones y obtención del nombre del oponente

const mainPageContainer = document.createElement('div');
mainPageContainer.setAttribute('class', 'mainPageContainer');
root.appendChild(mainPageContainer);

const gameRulesTitle = document.createElement('div');
gameRulesTitle.setAttribute('class', 'gameRulesTitle');
gameRulesTitle.textContent = 'Instrucciones del juego';
mainPageContainer.appendChild(gameRulesTitle);

const playerNameTitle = document.createElement('div');
playerNameTitle.setAttribute('class', 'playerNameTitle');
playerNameTitle.textContent = 'Introduce tu nombre para jugar';
mainPageContainer.appendChild(playerNameTitle);

const gameRulesText1 = document.createElement('div');
gameRulesText1.setAttribute('class', 'gameRulesText');
gameRulesText1.textContent = '1.- El juego consiste en hundir la flota del contrincante. Para ello, debe colocar su propia flota de forma estratégica y encontrar y hundir con los disparos la flota contraria.';
mainPageContainer.appendChild(gameRulesText1);

const playerNameInput = document.createElement('div');
playerNameInput.setAttribute('class', 'playerNameInput');

const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.addEventListener('keypress', checkTypedText);
nameInput.setAttribute('placeholder', oponentName);

const buttonValidate = document.createElement('input');
buttonValidate.setAttribute('type', 'submit');
buttonValidate.setAttribute('value', 'Validar');
buttonValidate.addEventListener('click', validateInputName);

mainPageContainer.appendChild(playerNameInput);
playerNameInput.appendChild(nameInput);
playerNameInput.appendChild(buttonValidate);

const gameRulesText2 = document.createElement('div');
gameRulesText2.setAttribute('class', 'gameRulesText');
gameRulesText2.textContent = '2.- Cada uno de los jugadores dispone de dos cuadrículas que ocultará al otro jugador: en una debe colocar sus barcos y en la otra irá anotando los resultados de los disparos que realiza en cada turno. En la página siguiente dispone de plantillas de las cuadrículas.';
mainPageContainer.appendChild(gameRulesText2);

const gameRulesText3 = document.createElement('div');
gameRulesText3.setAttribute('class', 'gameRulesText');
gameRulesText3.textContent = '3.- Cada jugador debe colocar en uno de los cuadros los siguientes barcos en posición horizontal o vertical: 1 barco que ocupa 5 cuadrados, otro de 4, otro de 3, otro de 2 y otro de 1';
mainPageContainer.appendChild(gameRulesText3);

const gameRulesText4 = document.createElement('div');
gameRulesText4.setAttribute('class', 'gameRulesText');
gameRulesText4.textContent = '4.- Los barcos se tienen que colocar respetando una franja de cuadros en blanco alrededor. Sí pueden colocarse junto a los bordes de la cuadrícula, pero sin llegar a pegarse un barco con otro.';
mainPageContainer.appendChild(gameRulesText4);

const gameRulesText5 = document.createElement('div');
gameRulesText5.setAttribute('class', 'gameRulesText');
gameRulesText5.textContent = '5.- Cada jugador dispone de un turno de disparo que se irá alternando. Para hacerlo dirá las coordenadas. Por ejemplo “B3”, significa que su disparo corresponde a la casilla que se encuentra en esa coordenada.';
mainPageContainer.appendChild(gameRulesText5);

const gameRulesText6 = document.createElement('div');
gameRulesText6.setAttribute('class', 'gameRulesText');
gameRulesText6.textContent = '6.- Al disparar, el otro jugador comprobará el resultado en su tablero: si en la casilla se encuentra parte de un barco el jugador tiene derecho a un nuevo disparo en el mismo turno.';
mainPageContainer.appendChild(gameRulesText6);

const gameRulesText7 = document.createElement('div');
gameRulesText7.setAttribute('class', 'gameRulesText');
gameRulesText7.textContent = '7.- El jugador que dispara anota en su cuadro de disparos los resultados. Si los tiros son “agua”, marcará con un punto la cuadrícula; si los disparos son “tocado” o “hundido”, los puede marcar con una cruz. De esta forma el jugador puede saber las cuadrículas que quedan en blanco y en las que ya ha disparado.';
mainPageContainer.appendChild(gameRulesText7);

const gameRulesText8 = document.createElement('div');
gameRulesText8.setAttribute('class', 'gameRulesText');
gameRulesText8.textContent = '8.- Finalmente, gana el jugador que antes consigue hundir la flota del otro.';
mainPageContainer.appendChild(gameRulesText8);

nameInput.focus();

// Creación de subtitulos del juego y asignación de estilos definidos en CSS

const subtitlesContainer = document.createElement('div');
subtitlesContainer.setAttribute('class', 'subtitlesContainer');
// root.appendChild(subtitlesContainer);

const subtitleInfo1 = document.createElement('div');
subtitleInfo1.setAttribute('class', 'subtitleInfo');
subtitleInfo1.textContent = 'Ordenador';
subtitlesContainer.appendChild(subtitleInfo1);

const subtitleInfo2 = document.createElement('div');
subtitleInfo2.setAttribute('class', 'subtitleInfo');
// subtitleInfo2.textContent = oponentName;
subtitlesContainer.appendChild(subtitleInfo2);

// Creación de los dos tableros en el DOM y asignación de estilos definidos en CSS

const boardsContainer = document.createElement('div');
boardsContainer.setAttribute('class', 'boardsContainer');
// root.appendChild(boardsContainer);

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

// Creación de las columnas de letras y filas de numeros de los tableros de juego

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

// Creación de las 100 celdas del juego

for (let i = 0; i < 100; i++) {

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
// root.appendChild(gameInfo);

const startGameButton = document.createElement('button');
startGameButton.setAttribute('class', 'button');
startGameButton.innerHTML = 'Iniciar juego';
startGameButton.addEventListener('click', startGame);
gameInfo.appendChild(startGameButton);

const turnInfo = document.createElement('p');
turnInfo.setAttribute('class', 'turnInfo');
// turnInfo.textContent = `Turno de: ${isComputerTurn ? 'Ordenador' : oponentName}`;
gameInfo.appendChild(turnInfo);

const shotsInfo = document.createElement('p');
shotsInfo.setAttribute('class', 'shotsInfo');
shotsInfo.textContent = `Número de jugadas: ${numberOfShots}`;
gameInfo.appendChild(shotsInfo);

// Crear y mostrar pagina de resultados al terminar el juego

// const mainPageContainer = document.createElement('div');
// mainPageContainer.setAttribute('class', 'mainPageContainer');
// root.appendChild(mainPageContainer);

// const gameRulesTitle = document.createElement('div');
// gameRulesTitle.setAttribute('class', 'gameRulesTitle');
// gameRulesTitle.textContent = 'Instrucciones del juego';
// mainPageContainer.appendChild(gameRulesTitle);

// const playerNameTitle = document.createElement('div');
// playerNameTitle.setAttribute('class', 'playerNameTitle');
// playerNameTitle.textContent = 'Introduce tu nombre para jugar';
// mainPageContainer.appendChild(playerNameTitle);

// const gameRulesText1 = document.createElement('div');
// gameRulesText1.setAttribute('class', 'gameRulesText');
// gameRulesText1.textContent = '1.- El juego consiste en hundir la flota del contrincante. Para ello, debe colocar su propia flota de forma estratégica y encontrar y hundir con los disparos la flota contraria.';
// mainPageContainer.appendChild(gameRulesText1);

// const playerNameInput = document.createElement('div');
// playerNameInput.setAttribute('class', 'playerNameInput');

// const nameInput = document.createElement('input');
// nameInput.setAttribute('type', 'text');
// nameInput.setAttribute('name', 'name');
// nameInput.addEventListener('keypress', checkTypedText);
// nameInput.setAttribute('placeholder', oponentName);

// const buttonValidate = document.createElement('input');
// buttonValidate.setAttribute('type', 'submit');
// buttonValidate.setAttribute('value', 'Validar');
// buttonValidate.addEventListener('click', validateInputName);

// mainPageContainer.appendChild(playerNameInput);
// playerNameInput.appendChild(nameInput);
// playerNameInput.appendChild(buttonValidate);

// const gameRulesText2 = document.createElement('div');
// gameRulesText2.setAttribute('class', 'gameRulesText');
// gameRulesText2.textContent = '2.- Cada uno de los jugadores dispone de dos cuadrículas que ocultará al otro jugador: en una debe colocar sus barcos y en la otra irá anotando los resultados de los disparos que realiza en cada turno. En la página siguiente dispone de plantillas de las cuadrículas.';
// mainPageContainer.appendChild(gameRulesText2);

// const gameRulesText3 = document.createElement('div');
// gameRulesText3.setAttribute('class', 'gameRulesText');
// gameRulesText3.textContent = '3.- Cada jugador debe colocar en uno de los cuadros los siguientes barcos en posición horizontal o vertical: 1 barco que ocupa 5 cuadrados, otro de 4, otro de 3, otro de 2 y otro de 1';
// mainPageContainer.appendChild(gameRulesText3);

// nameInput.focus();

// Función que valida que se introduzca un nombre de oponente y si es asi, cambia a la pantalla de juego

function validateName() {

  if (nameInput.value !== '') {

    oponentName = nameInput.value;

    root.replaceChild(subtitlesContainer, mainPageContainer);
    root.appendChild(boardsContainer);
    root.appendChild(gameInfo);

    // nameInput.setAttribute('placeholder', oponentName);
    subtitleInfo2.textContent = oponentName;
    turnInfo.textContent = `Turno de: ${isComputerTurn ? 'Ordenador' : oponentName}`;

  }

}

function validateInputName() {
  validateName();
}

function checkTypedText(event) {

  if (event.key === 'Enter') {

    validateName();

  }

}

// Resto de funciones del juego

function coordinatesToId(row, column) {

  let div = null;

  if (row === 0) {

    div = `board1Id${column}`;

  } else {

    const divTemp = row.toString() + column.toString();
    div = `board1Id${divTemp}`;

  }

  return div;

}

function checkTop(row, column) {

  if (row >= 0) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;

      const div = coordinatesToId(row, column);
      const divToChange = document.getElementById(div);

      displayShot(divToChange, hit);
      if (column !== 0) gameOponentBoard[row][column - 1] = water;
      if (column !== maxColumns - 1) gameOponentBoard[row][column + 1] = water;
      numberOfShots++;

      checkTop(row - 1, column);

    }
  }
}

function checkDown(row, column) {

  if (row < maxRows) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;

      const div = coordinatesToId(row, column);
      const divToChange = document.getElementById(div);

      displayShot(divToChange, hit);
      if (column !== 0) gameOponentBoard[row][column - 1] = water;
      if (column !== maxColumns - 1) gameOponentBoard[row][column + 1] = water;
      numberOfShots++;

      checkDown(row + 1, column);

    }
  }
}

function checkLeft(row, column) {

  if (column >= 0) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;

      const div = coordinatesToId(row, column);
      const divToChange = document.getElementById(div);

      displayShot(divToChange, hit);
      if (row !== 0) gameOponentBoard[row - 1][column] = water;
      numberOfShots++;

      checkLeft(row, column - 1);

    }
  }
}

function checkRight(row, column) {

  if (column < maxColumns) {

    if (initialOponentBoard[row][column] === hit) {

      gameOponentBoard[row][column] = hit;

      const div = coordinatesToId(row, column);
      const divToChange = document.getElementById(div);

      displayShot(divToChange, hit);
      if (row !== 0) gameOponentBoard[row - 1][column] = water;
      if (row != maxRows - 1) gameOponentBoard[row + 1][column] = water;
      numberOfShots++;

      checkRight(row, column + 1);

    }
  }
}

function displayShot(divToChange, shot) {

  function playSound(soundFile) {

    const audio = document.createElement('audio');
    audio.setAttribute('src', soundFile);
    audio.play();

  }

  // pintando hit o water en div correspondiente

  divToChange.style.backgroundSize = 'cover';
  divToChange.style.transition = '0.75s ease';
  divToChange.style.transform = 'scale(1.5)';

  if (shot === hit) {

    // pintando tocado

    playSound('sounds/boom.mp3');
    divToChange.style.backgroundImage = 'url("images/fire.jpg")';
    divToChange.style.transform = 'scale(.9)';
    // divToChange.innerHTML = '<img src="images/fire.jpg" width=50px height=50px>';

  } else {

    // pintando agua

    // playSound('sounds/water.mp3');
    divToChange.style.backgroundImage = 'url("images/water.jpg")';
    divToChange.style.transform = 'scale(.9)';
    // divToChange.innerHTML = '<img src="images/water.jpg" width=50px height=50px>';

  }

}

function clickedCell() {

  if (playing) {

    if (!isComputerTurn) {

      playOponent(this);

    }

  }

}

function boatsLeft(checkedBoard) {

  let boatsLeft = false;
  const initialCheckedBoard = checkedBoard === oponentName ? initialOponentBoard : initialComputerBoard;
  const gameCheckedBoard = checkedBoard === oponentName ? gameOponentBoard : gameComputerBoard;

  for (let i = 0; i < maxRows; i++) {

    for (let j = 0; j < maxColumns; j++) {

      if (initialCheckedBoard[i][j] === hit && gameCheckedBoard[i][j] !== hit) {

        boatsLeft = true;
        break;

      }

      if (boatsLeft) break;

    }
  }

  return boatsLeft;

}

function playComputer() {

  console.log('Turno de ordenador');

  do {
    row = Math.floor(Math.random() * 10);
    column = Math.floor(Math.random() * 10);
  } while (gameOponentBoard[row][column] !== ' ');

  shot = initialOponentBoard[row][column];

  const div = coordinatesToId(row, column);
  const divToChange = document.getElementById(div);

  numberOfShots++;
  shotsInfo.textContent = `Número de jugadas: ${numberOfShots}`;

  if (shot === hit) {

    gameOponentBoard[row][column] = hit;
    displayShot(divToChange, hit);
    checkTop(row - 1, column);
    checkDown(row + 1, column);
    checkRight(row, column + 1);
    checkLeft(row, column - 1);

  } else {

    gameOponentBoard[row][column] = water;
    displayShot(divToChange, water);

  }

  checkedBoard = oponentName;

  if (boatsLeft(checkedBoard)) {

    isComputerTurn = !isComputerTurn;
    turnInfo.textContent = `Turno de: ${isComputerTurn ? 'Ordenador' : oponentName}`;
    console.log('Turno de ' + oponentName);

  } else {

    endGame();

  }

}

function playOponent(divToChange) {

  // console.log('Turno de ' + oponentName);

  const divToChangeId = divToChange.id;

  const divToChangeIdNumber = divToChangeId.split('').slice(8, divToChangeId.length).join('');

  if (divToChangeIdNumber < 10) {

    row = 0;
    column = divToChangeIdNumber;

  } else {

    row = Math.floor(divToChangeIdNumber / 10);
    column = divToChangeIdNumber % 10;

  }

  if (gameComputerBoard[row][column] !== ' ') {

    alert('Ya has seleccionado esa celda. Elige otra.');

  } else {

    shot = initialComputerBoard[row][column];

    if (shot === hit) {

      gameComputerBoard[row][column] = hit;
      displayShot(divToChange, hit);

    } else {

      gameComputerBoard[row][column] = water;
      displayShot(divToChange, water);

    }

    checkedBoard = 'Computer';

    if (boatsLeft(checkedBoard)) {

      if (shot !== hit) {

        isComputerTurn = !isComputerTurn;
        turnInfo.textContent = `Turno de: ${isComputerTurn ? 'Ordenador' : oponentName}`;

        // for (let i = 0; i < 5000000; i++) {
        // }

        playComputer();

      } else {

        console.log('¡¡¡ Buen tiro !!! ¡¡¡ Dispara otra vez !!!');

      }

    } else {

      endGame();

    }

  }

}

function resetBoards() {

  for (let i = 0; i < 100; i++) {

    document.getElementById(`board1Id${i}`).textContent = '';
    document.getElementById(`board1Id${i}`).style.backgroundImage = '';
    document.getElementById(`board1Id${i}`).style.transform = 'scale(1)';
    document.getElementById(`board2Id${i}`).textContent = '';
    document.getElementById(`board2Id${i}`).style.backgroundImage = '';
    document.getElementById(`board2Id${i}`).style.transform = 'scale(1)';
    numberOfShots = 0;
    shotsInfo.textContent = `Número de jugadas: ${numberOfShots}`;

  }

  for (let i = 0; i < maxRows; i++) {

    for (let j = 0; j < maxColumns; j++) {

      gameComputerBoard[i][j] = ' ';
      gameOponentBoard[i][j] = ' ';

    }

  }

}

// Función de entrada al juego

function startGame() {

  if (startGameButton.innerHTML === 'Iniciar juego') {

    playing = true;
    startGameButton.innerHTML = 'Reiniciar juego';
    turnInfo.style.visibility = 'visible';
    playComputer();

  } else {

    if ((turnInfo.innerHTML === 'Juego terminado') && (!playing)) {

      startGameButton.innerHTML = 'Iniciar juego';
      turnInfo.setAttribute('class', 'turnInfo');
      turnInfo.innerHTML = 'Ordenador';
      turnInfo.style.visibility = 'hidden';
      resetBoards();
      isComputerTurn = true;

    } else {

      startGameButton.innerHTML = 'Iniciar juego';
      turnInfo.innerHTML = 'Ordenador';
      turnInfo.style.visibility = 'hidden';
      resetBoards();
      isComputerTurn = true;
      playing = false;

    }

  }

}

// Función de fin de juego

function endGame() {

  playing = false;
  turnInfo.setAttribute('class', 'endGame');
  const endGameInfo = (checkedBoard === oponentName) ? 'ordenador' : oponentName;
  turnInfo.innerHTML = 'Juego terminado - Gana ' + endGameInfo;

}
