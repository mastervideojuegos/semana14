function bucle(){
  contextoFondo.clearRect(0, 0, camara.anchuraPantalla, camara.alturaPantalla);
  mapa.DibujarEscenario(contextoFondo,camara);
  uiClass.DibujarPuntos(contextoUI);
  //Calcular movimientos
  calcularMovBola(mapa,jugadores);  //movimiento bola, aun no calcula angulos y demas, solo usa lo de la clase bola
  moverPersonaje(mapa); //movimeitno personaje propio

  //dibujar objetos
  dibujarPersonajes(contextoFondo,camara);// dibuja todos los personajes
  dibujarBolas(contextoFondo,camara); // dibuja las 4 pelotas

  poderes.contadorPoderes++;
  if(poderes.contadorPoderes >= 50 && poderes.contadorPoderes <= 100)
  {
    poderes.Dibujar(contextoFondo, camara);
  }
  if(poderes.contadorPoderes == 101)
  {
    poderes.ValoresRandom();
  }

  clearTimeout(temporizador);
  temporizador = setTimeout("bucle()", 60);
}
