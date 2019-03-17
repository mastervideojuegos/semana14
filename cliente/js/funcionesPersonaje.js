

function MoverPersonaje(){//aca muevo el personaje principal =0
	
	for(let j=0;j<Jugadores.length;j++){
		if(Jugadores[j].principal==0&& movimientoJugador==true){//entendi que esta es para el movimiento del personaje que uno controla
			
			if(Jugadores[j].posY - Jugadores[j].largo/2 <=65 || Jugadores[j].posY + Jugadores[j].largo/2 >=725){
				Jugadores[j].direccion*=-1;
			}
			Jugadores[j].posY += Jugadores[j].vel*Jugadores[j].direccion;
			Jugadores[j].colicionPared();
		}
	}
	
}


function DibujarPersonajes(ctx,camara){//aca dibujo todos los personajes
	
	for(let p=0;p<Jugadores.length;p++){
		ctx.drawImage(personajeActual, Jugadores[p].posX+camara.posX, Jugadores[p].posY+camara.posY-Jugadores[p].largo*0.5, Jugadores[p].largo*0.5, Jugadores[p].largo);
	}
		
	
}

