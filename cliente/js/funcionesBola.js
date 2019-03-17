function CalcularMovBola(){

		for(let b1=0;b1<pelotas.length;b1++){
      pelotas[b1].moverse();

      /*var tmpX = pelotas[b1].posX + (Pelotas[b1].avanceX * Pelotas[b1].velocidad);
			var tmpY = pelotas[b1].posY + (Pelotas[b1].avanceY * Pelotas[b1].velocidad);

			pelotas[b1].colicionPared(tmpX,tmpY);
			pelotas[b1].colicionPersonajes(tmpX,tmpY);

			pelotas[b1].posX += Pelotas[b1].avanceX * Pelotas[b1].velocidad;
			pelotas[b1].posY += Pelotas[b1].avanceY * Pelotas[b1].velocidad;*/
		}
  }

function DibujarBolas(ctx,camara){
		for(let b=0;b<pelotas.length;b++){
        pelotas[b].dibujar(contextoFondo,camara);
			//ctx.drawImage(bolaActual, Pelotas[b].posX+camara.posX, Pelotas[b].posY+camara.posY, Pelotas[b].tamanio, Pelotas[b].tamanio);

    }

}
