// clasePersonajes.js
class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

  teclapresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }
}
