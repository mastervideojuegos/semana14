function CalcularMovBola(){
        
		for(let b1=0;b1<Pelotas.length;b1++){
			var tmpX = Pelotas[b1].posX + (Pelotas[b1].avanceX * Pelotas[b1].velocidad);
			var tmpY = Pelotas[b1].posY + (Pelotas[b1].avanceY * Pelotas[b1].velocidad);

			Pelotas[b1].colicionPared(tmpX,tmpY);
			Pelotas[b1].colicionPersonajes(tmpX,tmpY);

			Pelotas[b1].posX += Pelotas[b1].avanceX * Pelotas[b1].velocidad;
			Pelotas[b1].posY += Pelotas[b1].avanceY * Pelotas[b1].velocidad;
		}
    }

    function DibujarBolas(ctx,camara){
		for(let b=0;b<Pelotas.length;b++){
			ctx.drawImage(bolaActual, Pelotas[b].posX+camara.posX, Pelotas[b].posY+camara.posY, Pelotas[b].tamanio, Pelotas[b].tamanio);
		}
    }