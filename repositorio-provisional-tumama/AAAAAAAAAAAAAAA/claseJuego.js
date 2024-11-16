  class Juego {
  constructor() {
    this.jugador = new Jugador(width / 2, height - 50, 30);
    
    // Arreglos de cubos
    this.cubosAzules = [];
    this.cubosAmarillos = [];
    this.puntaje = 0;
    this.numCubos = 5;
    
    // Inicializar los cubos directamente en los arreglos
    for (let i = 0; i < this.numCubos; i++) {
      this.cubosAzules[i] = new Cubo(random(0, width - 30), random(-200, -20), 30, color(0, 0, 255), -1);
      this.cubosAmarillos[i] = new Cubo(random(0, width - 30), random(-200, -20), 30, color(255, 255, 0), 1);
    }
  }

  actualizar() {
    this.jugador.mover();
    this.jugador.mostrar();

    // Actualizar cubos azules
    for (let i = 0; i < this.cubosAzules.length; i++) {
      this.cubosAzules[i].mover();
      this.cubosAzules[i].mostrar();
      if (this.cubosAzules[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAzules[i].valor;
        this.cubosAzules[i].reposicionar();
      }
    }

    // Actualizar cubos amarillos
    for (let i = 0; i < this.cubosAmarillos.length; i++) {
      this.cubosAmarillos[i].mover();
      this.cubosAmarillos[i].mostrar();
      if (this.cubosAmarillos[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAmarillos[i].valor;
        this.cubosAmarillos[i].reposicionar();
      }
    }

    textSize(32);
    fill(0);
    text(`Puntaje: ${this.puntaje}`, 50, 50);
  }

  teclapresionada(keyCode) {
    this.jugador.teclapresionada(keyCode);
  }

  teclapresionLiberada(keyCode) {
    this.jugador.teclapresionLiberada(keyCode);
  }
}
