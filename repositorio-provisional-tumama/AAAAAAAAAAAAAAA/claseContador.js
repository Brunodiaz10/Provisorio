   class Contador {
  constructor() {
    this.tiempo = 15; // Tiempo inicial en segundos
    this.ultimoTiempo = 0; // Almacena el tiempo del último decremento
  }

  actualizar() {
    let tiempoActual = millis(); // Tiempo en milisegundos
    if (tiempoActual - this.ultimoTiempo >= 1000) { // Si han pasado 1000 ms (1 segundo)
      this.tiempo--; // Decrementamos el tiempo
      this.ultimoTiempo = tiempoActual; // Actualizamos el tiempo del último decremento
    }
  }

  mostrar() {
    textSize(32);
    fill(0);
    textAlign(RIGHT, TOP);
    text(`Tiempo: ${this.tiempo}`, width - 20, 20); // Muestra el tiempo en la esquina superior derecha
  }

  tiempoFinalizado() {
    return this.tiempo <= 0; // Retorna verdadero si el tiempo ha llegado a cero
  }
}
