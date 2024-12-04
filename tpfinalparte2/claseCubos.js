class Cubo {
  constructor(x, y, size, imgIndex, valor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = imagenes[imgIndex]; // Selección de imagen según el índice
    this.valor = valor; // Valor asociado al cubo
    this.velocidad = random(2, 5);
  }

  mover() {
    this.y += this.velocidad; // Movimiento hacia abajo
    if (this.y > height) {
      this.reposicionar(); // Reposicionar cuando se sale de la pantalla
    }
  }

  mostrar() {
    image(this.img, this.x, this.y, this.size, this.size); // Dibuja el cubo con su imagen
  }

  checarColision(jugador) {
    let d = dist(this.x + this.size / 2, this.y + this.size / 2, jugador.x, jugador.y);
    return d < this.size / 2 + jugador.size / 2; // Compara distancias para checar colisión
  }

  reposicionar() {
    this.x = random(0, width - this.size); // Reposicionar el cubo en una nueva posición
    this.y = random(-200, -20); // En una posición arriba de la pantalla
  }
}
