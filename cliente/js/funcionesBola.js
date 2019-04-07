function calcularMovBola(mapa,listaJugadores){
		for(var i=0;i<pelotas.length;i++){
      pelotas[i].moverse(mapa,listaJugadores);
		}
  }

function dibujarBolas(ctx,camara)
{
	for(var i=0;i<pelotas.length;i++)
	{		
		pelotas[i].dibujar(contextoFondo,camara);
	}
}

function crearBolas(mapa){
	pelotas[0]=new Bola(mapa);
	pelotas[1]=new Bola(mapa);
	pelotas[2]=new Bola(mapa);
	pelotas[3]=new Bola(mapa);
}
