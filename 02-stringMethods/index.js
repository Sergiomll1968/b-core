// const myString = 'Hello world';

// const response = myString.length;
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // 11

// const response = myString.charAt(6);
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // w

// const response = myString.endsWith('d');
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // true

// const response = myString.includes('orld');
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // true

// const response = myString.indexOf('p');
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// -1

// const response = myString.repeat(2);
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // 'Hello worldHello world'

// const response = myString.replace('Hello', 'Bye');
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // 'Bye world'

// const response = myString.split(' ');
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // ['Hello', 'world']

// const response = myString.startsWith('Hell');
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // true

// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring#:~:text=slice()%20extracts%20parts%20of,the%20specified%20number%20of%20characters.

// const response = myString.slice(1, 3);
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // el

// const response = myString.substring(1, 3);
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // el

// const response = myString.substr(1, 3);
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // ell

// const response = myString.toLowerCase();
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // 'hello world'

// const response = myString.toUpperCase();
// console.log('myString', myString);
// // 'Hello world'
// console.log('response', response);
// // 'HELLO WORLD'

// const response = '  Hello world  '.trim();
// console.log('myString', myString);
// // '  Hello world  '
// console.log('response', response);
// // 'Hello world'

// *************************************** OJO, CREAR VARIABLE LOCAL PARA NO TOCAR DIRECTAMENTE EL NOMBRE DE ARGUMENTOS DE LA FUNCION

function esPalindromo(myString, config) {

  const specialChars = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };

  let reverseString;

  if (config.ignoreAccents) {

    myString = myString.split('').map(e => (specialChars[e] || e)).join('');

  }

  if (config.ignoreCaps) {
    myString = myString.toLowerCase();
  }

  if (config.ignoreSpaces) {

    reverseString = myString.split('').filter(e => e.trim().length > 0).reverse().join('');
    myString = myString.split('').filter(e => e.trim().length > 0).join('');

  } else {

    reverseString = myString.split('').reverse().join('');

  }

  console.log('Cadena modificada: ' + reverseString);

  if (reverseString === myString) {

    return true;

  } else {

    return false;

  }
}

// const myString = 'atar a la rata';
const myString = 'Dábale arróz a la zorra él abad';

const config = {
  ignoreSpaces: true,
  ignoreCaps: true,
  ignoreAccents: true
};

// var flag = new Boolean(true);
// document.write( "flag.toString is : " + flag.toString() );

console.log('Ignorando espacios: ' + config.ignoreSpaces);
console.log('Ignorando mayúsculas: ' + config.ignoreCaps);
console.log('Ignorando acentos: ' + config.ignoreAccents);

console.log('Cadena original: ' + myString);

if (esPalindromo(myString, config)) {

  console.log('La cadena "' + myString + '" es palíndromo');

} else {

  console.log('La cadena "' + myString + '" no es palíndromo');

}
