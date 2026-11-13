/* eslint-disable no-undef, no-unused-vars */

// DECLARACIONES
// Variable donde se almacena el sintetizador de voz
let speech;

// FUNCIÓN DE CONFIGURACIÓN
function setup() {
  // Crea un lienzo de tamaño 250x250
  createCanvas(250, 250);
  // Crea un objeto de sintetizador de audio
  speech = new p5.Speech(voicesLoaded);
  // Configura el idioma del sintetizador en español
  speech.setLang("it-IT"); // RETO 2
}

// RETO 4
function voicesLoaded() {
  // Muestra en la consola el listado de voces disponibles
  speech.listVoices();
}

// FUNCIÓN DE PINTADO
function draw() {
  // Pinta un cuadrado negro con la palabra ASM en blanco
  fill(0);
  noStroke();
  rect(0, 0, 250, 250);
  fill(255);
  textStyle(BOLD);
  textSize(95);
  text("ASM", 10, 150);
}

// FUNCIÓN DE CAPTURA DEL CLIC DEL RATÓN
function mouseClicked() {
  // Sintetiza en voz el texto pasado como parámetro
  let frase = new SpeechSynthesisUtterance(
    "Corso di Architettura dei Sistemi Multimediali" // RETO 3
  );
  frase.lang = "it-IT"; // RETO 2
  frase.rate = 1.4; // RETO 1
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(frase);
}