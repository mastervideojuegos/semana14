function bucle()
{
    contextoFondo.clearRect(0, 0, camara.anchuraPantalla, camara.alturaPantalla);
    mapa.DibujarEscenario(contextoFondo,camara);

  //Calcular movimientos
  calcularMovBola(mapa,jugadores);  //movimiento bola, aun no calcula angulos y demas, solo usa lo de la clase bola
  moverPersonaje(mapa); //movimeitno personaje propio

  //dibujar objetos
  dibujarPersonajes(contextoFondo,camara);// dibuja todos los personajes
  dibujarBolas(contextoFondo,camara); // dibuja las 4 pelotas

    //bola.moverse();



    /*
	//Cambio Raul 16/03/19
	if(personaje.posY - personaje.largo/2 <=65 || personaje.posY + personaje.largo/2 >=725){personaje.direccion*=-1;}

    personaje.moverse();

    personaje.Dibujar(contextoFondo,camara);
	//Fin Cambio Raul 16/03/19
    */
	//Cambio Raul 16/03/19

	calcularMovBola();  //movimiento bola, aun no calcula angulos y demas, solo usa lo de la clase bola

	moverPersonaje(); //movimeitno personaje propio

  poderes.contadorPoderes++;

  if(poderes.contadorPoderes >= 50 && poderes.contadorPoderes <= 100)
  {
    poderes.Dibujar(contextoFondo, camara);
  }
  if(poderes.contadorPoderes == 101)
  {
    poderes.ValoresRandom();
  }

	dibujarPersonajes(contextoFondo,camara);// dibuja todos los personajes

	dibujarBolas(contextoFondo,camara); // dibuja las 4 pelotas


	//Fin Cambio Raul 16/03/19

  //bola.Dibujar(contextoFondo,camara);

  clearTimeout(temporizador);
  temporizador = setTimeout("bucle()", 60);
}
