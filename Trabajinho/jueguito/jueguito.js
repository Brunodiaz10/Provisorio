 let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();  
}

function draw() {
  background(0);
  objJuego.dibujar();   
}

function keyPressed() {
  objJuego.personaje.teclapresionada(keyCode);  
}

function keyReleased() {
  objJuego.personaje.teclapresionLiberada(keyCode);  
}
