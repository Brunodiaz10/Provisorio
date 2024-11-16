  // main.js
let pantallaActiva = "inicio"; // Estado inicial de la pantalla
let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();

  // Botón de inicio
  this.botonInicio = createButton('Ir a instrucciones');
  this.botonInicio.position(250, 200);
  this.botonInicio.mousePressed(() => pantallaActiva = "instrucciones");

  // Botón para ir a la pantalla de juego
  this.botonPantalla2 = createButton('Ir a pantalla de juego');
  this.botonPantalla2.position(250, 300);
  this.botonPantalla2.mousePressed(() => pantallaActiva = "juego");

  // Inicialmente, ocultar los botones de la pantalla de instrucciones y juego
  this.botonPantalla2.hide();
}

function draw() {
  background(0);

  // Mostrar la pantalla correspondiente según el estado (pantallaActiva)
  if (pantallaActiva === "inicio") {
    pantallaInicio("Una flor amarilla", width / 2, height / 4);
  } else if (pantallaActiva === "instrucciones") {
    pantallaInstrucciones("Instrucciones", width / 2, height / 4, "→ = Mueve derecha", 250, 200, "← = Mueve izquierda", 250, 230);
  } else if (pantallaActiva === "juego") {
    pantallaJuego("Juego en curso", width / 2, height / 4);
  }
}

function keyPressed() {
  if (pantallaActiva === "juego") {
    objJuego.teclapresionada(keyCode); // Solo se mueve el personaje en pantalla de juego
  }
}

// Función para la pantalla de inicio
function pantallaInicio(titulo, x, y) {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(titulo, x, y);

  // Mostrar botón para ir a instrucciones
  this.botonInicio.show();
  this.botonPantalla2.hide(); // Ocultar botón de juego
}

// Función para la pantalla de instrucciones
function pantallaInstrucciones(titulo, x, y, texto1, x1, y1, texto2, x2, y2) {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(titulo, x, y);
  text(texto1, x1, y1);
  text(texto2, x2, y2);

  // Mostrar botón para ir a pantalla de juego
  this.botonInicio.hide(); // Ocultar botón de inicio
  this.botonPantalla2.show(); // Mostrar botón de juego
}

// Función para la pantalla de juego
function pantallaJuego(titulo, x, y) {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(titulo, x, y);

  // Dibujar el juego (el personaje en este caso)
  objJuego.dibujar();
}
