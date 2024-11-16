// claseEnemigo.js
class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);  // Color verde para el enemigo
    this.velocidad = 2; // Velocidad de movimiento del enemigo
  }

  // Dibujar el enemigo
  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

  // Mover el enemigo de forma automática
  mover() {
    this.posX -= this.velocidad;  // Mueve hacia la izquierda
  }

  // Detectar colisión con el personaje
  colision(personaje) {
    let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
    if (distancia < 30) { // Si la distancia es menor a 30, hay colisión
      return true;
    }
    return false;
  }
}
