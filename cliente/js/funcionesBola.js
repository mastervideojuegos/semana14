function calcularMovBola(mapa, listaJugadores)
{
		for(var i=0;i<pelotas.length;i++)
		{
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

function crearBolas(mapa, cantidadBolas)
{
	for (var i = 0; i < cantidadBolas; i++)
	{
		pelotas.push(new Bola(mapa, cantidadBolas));
	}
}
