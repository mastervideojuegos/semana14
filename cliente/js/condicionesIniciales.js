//Lienzos

console.log("cond ini")
var contextoFondo = document.getElementById("lienzoFondo").getContext("2d");

// Datos Actuales //
var mapaActual      = escenarios[0];
var bolaActual      = bolas[0];
var personajeActual = jugadores[1];

var mapa1 = false;
var mapa2 = true;

var Jugadores= new Array();//Array para los 4 jugadores
Jugadores[0]=new Personaje(1,0);
Jugadores[1]=new Personaje(1,1);
Jugadores[2]=new Personaje(2,1);
Jugadores[3]=new Personaje(2,1);
Jugadores[2].posX=50;
Jugadores[3].posX=50;

var Pelotas =new Array();//Array para las 4 pelotas
Pelotas[0]=new Bola();
Pelotas[1]=new Bola();
Pelotas[2]=new Bola();
Pelotas[3]=new Bola();

var movimientoJugador=false;

var temporizador; 
var bola = new Bola();

var personaje = new Personaje(1,1);
var camara  = new Camara();
var mapa = new Mapa();

var banBD = true;


