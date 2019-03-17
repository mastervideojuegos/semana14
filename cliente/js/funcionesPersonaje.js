

function MoverPersonaje(){//aca muevo el personaje principal =0

	for(let j=0;j<jugadores.length;j++){
		//if(Jugadores[j].principal==0&& movimientoJugador==true){//entendi que esta es para el movimiento del personaje que uno controla
			jugadores[j].moverse();
			if(j>0){
				if(jugadores[j].posY - jugadores[j].largo/2 <=65 || jugadores[j].posY + jugadores[j].largo/2 >=725){
					jugadores[j].direccion*=-1;
				}
				jugadores[j].posY += jugadores[j].vel*jugadores[j].direccion;
				jugadores[j].colicionPared();


		}
	}

}


function DibujarPersonajes(ctx,camara){//aca dibujo todos los personajes

	for(let p=0;p<jugadores.length;p++){
		jugadores[p].dibujar(contextoFondo,camara);
		//ctx.drawImage(personajeActual, Jugadores[p].posX+camara.posX, Jugadores[p].posY+camara.posY-Jugadores[p].largo*0.5, Jugadores[p].largo*0.5, Jugadores[p].largo);
	}


}
