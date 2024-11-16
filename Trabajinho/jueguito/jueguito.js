 let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();  // Crear una instancia del juego
}

function draw() {
  background(0);
  objJuego.dibujar();  // Dibujar los elementos del juego
}

function keyPressed() {
  objJuego.personaje.teclapresionada(keyCode);  // Llamar a la función en el personaje dentro del juego
}

function keyReleased() {
  objJuego.personaje.teclapresionLiberada(keyCode);  // Llamar a la función en el personaje dentro del juego
}
