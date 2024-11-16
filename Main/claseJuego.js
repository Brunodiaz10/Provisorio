 // claseJuego.js
class Juego {
  constructor() {
    this.crearPersonaje();
  }

  dibujar() {
    this.personaje.dibujar();
  }

  crearPersonaje() {
    this.personaje = new Personaje(100, 300);
  }

  teclapresionada(keyCode) {
    this.personaje.teclapresionada(keyCode);
  }
}
