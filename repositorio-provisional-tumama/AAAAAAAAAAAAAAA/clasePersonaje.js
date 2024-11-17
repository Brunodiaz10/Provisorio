   class Jugador {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(0, 0, 255);
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
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size); // Dibuja el jugador
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
