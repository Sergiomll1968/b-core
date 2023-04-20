// fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(formattedResponse => console.log('formattedResponse', formattedResponse))
//   .catch(err => console.error(err));

// async function getCountries() {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const data = await response.json();
//   console.log('async/await', data);
// }

// try {
//   getCountries();
// } catch(error) {
//   console.error('Mira este error: ',error);
// }

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/independent?status=true');
  const data = await response.json();
  // console.log(data.length);
  return data;
}

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

async function initApp() {

  let playing = true;
  let countries;

  function validateName() {

    if (nameInput.value !== '') {

      console.log(nameInput.value);

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

  const root = document.getElementById('root');

  // Crear y mostrar titulo del juego y asignación de estilos definidos en CSS

  const gameTitle = document.createElement('div');
  gameTitle.setAttribute('class', 'gameTitle');
  gameTitle.textContent = 'Juguemos a adivinar banderas del mundo';
  root.appendChild(gameTitle);

  // Crear y mostrar pagina principal con instrucciones y obtención del nombre del oponente

  const mainPageContainer = document.createElement('div');
  mainPageContainer.setAttribute('class', 'mainPageContainer');
  root.appendChild(mainPageContainer);

  const gameflag = document.createElement('div');
  gameflag.setAttribute('class', 'gameflag');
  mainPageContainer.appendChild(gameflag);

  const countryInputtext = document.createElement('div');
  countryInputtext.setAttribute('class', 'countryInputtext');
  countryInputtext.textContent = 'Introduce un país';
  mainPageContainer.appendChild(countryInputtext);

  const playerNameInput = document.createElement('div');
  playerNameInput.setAttribute('class', 'playerNameInput');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.addEventListener('keypress', checkTypedText);
  nameInput.setAttribute('placeholder', 'Spain o España');

  const buttonValidate = document.createElement('input');
  buttonValidate.setAttribute('type', 'submit');
  buttonValidate.setAttribute('value', 'Validar');
  buttonValidate.addEventListener('click', validateInputName);

  mainPageContainer.appendChild(playerNameInput);
  playerNameInput.appendChild(nameInput);
  playerNameInput.appendChild(buttonValidate);

  nameInput.focus();

  try {

    countries = await getCountries();

  } catch (error) {

    console.error('Error al obtener la información de países.');

  }

  do {

    const country = countries[getRandomNumber(0, countries.length)];
    gameflag.innerHTML = `<img src="${country.flags.png}">`;
    console.log(country.flags.png);
    playing = false;

  } while (playing);

}

initApp();