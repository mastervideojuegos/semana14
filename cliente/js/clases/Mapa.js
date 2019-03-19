function Mapa()
{
  this.largo = 1400;
  this.ancho = 700;

  this.desfaseX = 0;
  this.desfaseY = 100;

  this.DibujarEscenario = function(ctx,camara){
    //Dibujamos fondo
    ctx.drawImage(mapaActual, camara.posX, camara.posY, this.largo, this.ancho);

    //Dibujamos contorno del fondo
    ctx.rect(camara.posX, camara.posY, this.largo, this.ancho);
    ctx.strokeStyle="red";
    ctx.stroke();
  }
}
