 class Cubo {
  constructor(x, y, size, color, valor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.valor = valor;
    this.velocidad = random(2, 5);
  }

  mover() {
    this.y += this.velocidad;
    if (this.y > height) {
      this.reposicionar();
    }
  }

  mostrar() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  checarColision(jugador) {
    let d = dist(this.x + this.size / 2, this.y + this.size / 2, jugador.x, jugador.y);
    return d < this.size / 2 + jugador.size / 2;
  }

  reposicionar() {
    this.x = random(0, width - this.size);
    this.y = random(-200, -20);
  }
}
