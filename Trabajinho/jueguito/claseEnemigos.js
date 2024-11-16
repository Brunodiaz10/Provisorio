class Enemigos {
 constructor(posX,posY){
 this.posX = posX ;
 this.posY = posY;
 this.miColor= color (0,255,0);
   
 }

dibujar() {
  fill(this.miColor);
 rect(this.posX, this.posY++, 30, 30);
  
}


//movimientoY(){
 //this.posY++; }

}
