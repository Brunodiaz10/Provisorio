 class Jugador {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(0, 0, 255);
    this.direccion = 0; // 0 es detenido, -1 es izquierda, 1 es derecha
  }

  mover() {
    this.x += this.direccion * 5; // Movimiento en X basado en la dirección
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
    }
    if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
    }
  }

  mostrar() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  teclapresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.direccion = -1; // Movimiento a la izquierda
    } else if (keyCode === RIGHT_ARROW) {
      this.direccion = 1; // Movimiento a la derecha
    }
  }

  teclapresionLiberada(keyCode) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.direccion = 0;
    }
  }
}
