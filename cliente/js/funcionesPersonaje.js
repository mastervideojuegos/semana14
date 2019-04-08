function moverPersonaje(mapa)
{
	//aca muevo el personaje principal =0

	for(let j=0;j<jugadores.length;j++)
	{
		//if(Jugadores[j].principal==0&& movimientoJugador==true){//entendi que esta es para el movimiento del personaje que uno controla
			jugadores[j].moverse(mapa);
			if(j>0)
			{
				if(jugadores[j].posY - jugadores[j].ladoAlto <=0 || jugadores[j].posY + jugadores[j].ladoAlto >=mapa.alto)
				{
					jugadores[j].direccion*=-1;
				}
				jugadores[j].posY += jugadores[j].vel*jugadores[j].direccion;
				jugadores[j].colicionPared(mapa);
			}
	}
}

function dibujarPersonajes(ctx, camara)
{
	//aca dibujo todos los personajes
	for(let p = 0; p < jugadores.length; p++)
	{
		jugadores[p].dibujar(contextoFondo, camara);
		//ctx.drawImage(personajeActual, Jugadores[p].posX+camara.posX, Jugadores[p].posY+camara.posY-Jugadores[p].largo*0.5, Jugadores[p].largo*0.5, Jugadores[p].largo);
	}
}

function crearJugadores()
{
	jugadores[0]=new Personaje('yo',1,0,0,0,0);
	jugadores[1]=new Personaje('otro',1,1,1,0,0);
	jugadores[2]=new Personaje('otro2',2,1,1,0,0);
	jugadores[3]=new Personaje('otro3',2,1,1,0,0);
	jugadores[1].posY=300;
	jugadores[2].posX=50;
	jugadores[2].posY=300;
	jugadores[3].posX=50;

	jugadores[1].direccion=1;
	jugadores[2].direccion=1;
	jugadores[3].direccion=1;
}
