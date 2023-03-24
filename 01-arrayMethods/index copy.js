// Lista de palabras para el juego
var palabras = ["perro", "gato", "elefante", "jirafa", "tigre", "leon"];

// Selecciona una palabra aleatoria de la lista
var palabra = palabras[Math.floor(Math.random() * palabras.length)];

// Crea un array de letras adivinadas
var letrasAdivinadas = [];
for (var i = 0; i < palabra.length; i++) {
  letrasAdivinadas.push("_");
}

// Cuenta el número de intentos restantes
var intentosRestantes = 6;

// Función para procesar la letra adivinada
function procesarLetra(letra) {
  // Si la letra ya fue adivinada, no hacer nada
  if (letrasAdivinadas.includes(letra)) {
    return;
  }
  
  // Si la letra no está en la palabra, disminuir el número de intentos restantes
  if (!palabra.includes(letra)) {
    intentosRestantes--;
  }
  
  // Iterar sobre cada letra de la palabra y actualizar el array de letras adivinadas
  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      letrasAdivinadas[i] = letra;
    }
  }
  
  // Si el jugador adivinó todas las letras, mostrar un mensaje de victoria
  if (!letrasAdivinadas.includes("_")) {
    console.log("¡Ganaste!");
  }
  
  // Si el jugador se quedó sin intentos, mostrar un mensaje de derrota
  if (intentosRestantes === 0) {
    console.log("¡Perdiste! La palabra era " + palabra);
  }
}

// Función para mostrar el estado actual del juego
function mostrarEstado() {
  console.log("Palabra: " + letrasAdivinadas.join(" "));
  console.log("Intentos restantes: " + intentosRestantes);
}

// Ejemplo de uso
procesarLetra("a");
mostrarEstado();
procesarLetra("e");
mostrarEstado();
procesarLetra("i");
mostrarEstado();
procesarLetra("o");
mostrarEstado();
procesarLetra("u");
mostrarEstado();

