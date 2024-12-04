//jazmin Tava
//Bruno diaz
//Comision 1


//entregamos el juego principal, nos faltaria las imagenes, sonido y la pantallas de inicio
//se mueve con las flechas del teclado, debe atrapar 10 flores(cubos) amarillos antes del tiempo en pantalla

let imagenes = [];
let juego;

function preload() {
  for (let i = 0; i < 4; i++) {  // Cargar varias imágenes dinámicamente
    imagenes[i] = loadImage("data/imagen" + i + ".png"); 
  }
}
function setup() {
  createCanvas(640, 480); // Crea un lienzo de 640x480 píxeles
  juego = new Juego(); // Inicializa el juego al crear la instancia de la clase Juego
}

function draw() {
  image(imagenes[0], 0, 0, width, height);
  juego.actualizar(); // Llama al método `actualizar` de la clase Juego para actualizar y mostrar el estado del juego
}

function keyPressed() {
  juego.teclapresionada(keyCode); // Llama al método `teclapresionada` cuando se presiona una tecla
}

function keyReleased() {
  juego.teclapresionLiberada(keyCode); // Llama al método `teclapresionLiberada` cuando se suelta una tecla
}
