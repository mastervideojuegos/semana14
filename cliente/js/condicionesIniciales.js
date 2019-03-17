//Lienzos

console.log("cond ini")
var contextoFondo = document.getElementById("lienzoFondo").getContext("2d");

// Datos Actuales //
var mapaActual      = escenarios[0];
var bolaActual      = bolas[0];
var personajeActual = jugadores[1];

var mapa1 = false;
var mapa2 = true;

var jugadores= new Array();//Array para los 4 jugadores
jugadores[0]=new Personaje(1,0);
jugadores[1]=new Personaje(1,1);
jugadores[2]=new Personaje(2,1);
jugadores[3]=new Personaje(2,1);
jugadores[2].posX=50;
jugadores[3].posX=50;

var pelotas =new Array();//Array para las 4 pelotas
pelotas[0]=new Bola();
pelotas[1]=new Bola();
pelotas[2]=new Bola();
pelotas[3]=new Bola();

var movimientoJugador=false;

var temporizador;
var bola = new Bola();

var personaje = new Personaje(1,1);
var camara  = new Camara();
var mapa = new Mapa();

var banBD = true;
