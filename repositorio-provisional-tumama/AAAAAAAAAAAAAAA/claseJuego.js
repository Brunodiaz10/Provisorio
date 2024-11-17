  class Juego {
  constructor() {
    this.jugador = new Jugador(width / 2, height - 50, 30);
    this.cubosAzules = [];  // Arreglo de cubos azules
    this.cubosAmarillos = [];  // Arreglo de cubos amarillos
    this.puntaje = 0;
    this.numCubos = 5;  // Cantidad de cubos
    this.contador = new Contador();  // Instancia del contador
    this.crearCubos();  // Crear cubos iniciales
  }

  // Método para crear cubos
  crearCubos() {
    for (let i = 0; i < this.numCubos; i++) {
      this.cubosAzules[i] = new Cubo(random(0, width - 30), random(-200, -20), 30, color(0, 0, 255), -1);
      this.cubosAmarillos[i] = new Cubo(random(0, width - 30), random(-200, -20), 30, color(255, 255, 0), 1);
    }
  }

  // Método para actualizar el estado del juego
  actualizar() {
    this.jugador.mover();
    this.jugador.mostrar();

    // Actualizar el contador
    this.contador.actualizar();
    this.contador.mostrar();

    // Verificar si el tiempo ha finalizado
    if (this.contador.tiempoFinalizado()) {
      this.verificarResultado();
      return;
    }

    // Verificar colisiones con cubos azules
    for (let i = 0; i < this.cubosAzules.length; i++) {
      this.cubosAzules[i].mover();
      this.cubosAzules[i].mostrar();
      if (this.cubosAzules[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAzules[i].valor;
        this.cubosAzules[i].reposicionar();
      }
    }

    // Verificar colisiones con cubos amarillos
    for (let i = 0; i < this.cubosAmarillos.length; i++) {
      this.cubosAmarillos[i].mover();
      this.cubosAmarillos[i].mostrar();
      if (this.cubosAmarillos[i].checarColision(this.jugador)) {
        this.puntaje += this.cubosAmarillos[i].valor;
        this.cubosAmarillos[i].reposicionar();
      }
    }

    this.mostrarPuntaje();
  }

  // Mostrar puntaje
  mostrarPuntaje() {
    textSize(32);
    fill(0);
    textAlign(LEFT, CENTER);
    text(`Puntaje: ${this.puntaje}`, 20, 50);
  }

  // Verificar el resultado al finalizar
  verificarResultado() {
    if (this.puntaje >= 10) {
      fill(0, 255, 0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('¡Ganaste!', width / 2, height / 2);
    } else {
      fill(255, 0, 0);
      textSize(48);
      textAlign(CENTER, CENTER);
      text('Perdiste', width / 2, height / 2);
    }
  }

  // Métodos para manejar teclas
  teclapresionada(keyCode) {
    this.jugador.teclapresionada(keyCode);
  }

  teclapresionLiberada(keyCode) {
    this.jugador.teclapresionLiberada(keyCode);
  }
}
