 class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.direccion = 0;  // 0 es detenido, -1 es izquierda, 1 es derecha
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);

    // Movimiento continuo basado en la dirección
    this.posX += this.direccion * 5;  // Movimiento en X basado en la dirección
  }

  // Función que maneja la tecla presionada
  teclapresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.direccion = -1;  // Movimiento a la izquierda
    } else if (keyCode == RIGHT_ARROW) {
      this.direccion = 1;   // Movimiento a la derecha
    }
  }

  // Función que maneja la liberación de la tecla
  teclapresionLiberada(keyCode) {
    if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
      this.direccion = 0;  // Detener movimiento al soltar la tecla
    }
  }
}
