function bucle()
{
    contextoFondo.clearRect(0, 0, camara.anchuraPantalla, camara.alturaPantalla);
    mapa.DibujarEscenario(contextoFondo,camara);
    
    /*
    contextoFondo.drawImage(imgFondo1,0,0,650,620);
    //contextoFondo.drawImage(imgFondo1,20,15,307,230,0,0,625,620);//18,13,311,234,0,0,625,620
    if(mapa1==true)
    {
        contextoFondo.drawImage(imgFondo3,0,0,1000,1000);
        contextoFondo.drawImage(imgFondo2,0,15,634,367,0,0,610,645);//0,0,634,407,0,30,610,610
    }
    
     if(mapa2==true){
        contextoFondo.drawImage(imgFondo5,0,60,640,360,0,0,1000,1000);
        contextoFondo.drawImage(imgFondo4,0,0,550,400,20,10,575,590);//0,0,550,400,20,10,575,590
    }
    */
    
    bola.moverse();
    if(personaje.posY - personaje.largo/2 <=65 || personaje.posY + personaje.largo/2 >=725){personaje.direccion*=-1;}

    personaje.moverse();
    
    personaje.Dibujar(contextoFondo,camara);
    
    bola.Dibujar(contextoFondo,camara);
    
    clearTimeout(temporizador);
    temporizador = setTimeout("bucle()", 60);
}