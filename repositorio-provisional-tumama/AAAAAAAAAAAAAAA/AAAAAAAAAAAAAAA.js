 let juego;

function setup() {
  createCanvas(640, 480); // Crea un lienzo de 640x480 píxeles
  juego = new Juego(); // Inicializa el juego al crear la instancia de la clase Juego
}

function draw() {
  background(220); // Dibuja el fondo (color gris claro)
  juego.actualizar(); // Llama al método `actualizar` de la clase Juego para actualizar y mostrar el estado del juego
}

function keyPressed() {
  juego.teclapresionada(keyCode); // Llama al método `teclapresionada` cuando se presiona una tecla
}

function keyReleased() {
  juego.teclapresionLiberada(keyCode); // Llama al método `teclapresionLiberada` cuando se suelta una tecla
}
