class Jugador {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = imagenes[3];
    this.direccion = 0; // 0 es detenido, -1 es izquierda, 1 es derecha
  }

  mover() {
    // Mover el jugador según la dirección
    this.x += this.direccion * 5;

    // Verificar límites manualmente sin constrain()
    if (this.x < this.size / 2) {
      this.x = this.size / 2; // Evitar que el jugador se salga por la izquierda
    }
    if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2; // Evitar que el jugador se salga por la derecha
    }
  }

 mostrar() {
    // Usar la imagen para mostrar el jugador
    image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size); // Dibuja el jugador con imagen
  }

  teclapresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.direccion = -1; // Mover a la izquierda
    } else if (keyCode === RIGHT_ARROW) {
      this.direccion = 1; // Mover a la derecha
    }
  }

  teclapresionLiberada(keyCode) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.direccion = 0; // Detener el movimiento cuando se suelta la tecla
    }
  }
}
