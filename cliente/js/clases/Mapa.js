function Mapa()
{
  this.ancho = 1400;
  this.alto = 700;

  this.desfaseX = 0;
  this.desfaseY = 100;

  this.DibujarEscenario = function(ctx,camara){
    //Dibujamos fondo
    ctx.drawImage(mapaActual, camara.posX, camara.posY, this.ancho, this.alto);

    //Dibujamos contorno del fondo
    ctx.rect(camara.posX, camara.posY, this.ancho, this.alto);
    ctx.strokeStyle="red";
    ctx.stroke();
  }
}
