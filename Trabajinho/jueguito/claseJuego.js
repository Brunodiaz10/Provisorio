class Juego {
  constructor(cantidadEnemigos){
    this.crearPersonaje ();
    this.crearEnemigos();
    this.cantidadEnemigos = cantidadEnemigos;
  }
  
  dibujar() {
    
    this.personaje.dibujar();
    
    for(let i=0; i<10;i++){
    this.enemigos[i].dibujar();
//this.enemigos.movimientoY();
    }

  
  }
  
 crearPersonaje() {
    this.personaje = new Personaje(100, 300);
  }
   teclapresionada(keyCode) {
    this.personaje.teclapresionada(keyCode);
  }
  
  
  crearEnemigos(){
    
    this.enemigos = [];
    for(let i= 0 ; i < 15 ; i++ ){
  this.enemigos[i] = new Enemigos (i*70,0);
    }
}
  
iniciar(){
  
}


puntaje (){
  
}

tiempo(){
  
}

gano(){
  
}
perdio(){
  
}

}
