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
crearJugadores();


var pelotas =new Array();//Array para las 4 pelotas
crearBolas();

var movimientoJugador=false;

var temporizador;
var tmpPoderes = null;
var bola = new Bola();

var camara  = new Camara();
var mapa = new Mapa();

var usuario = "";
var banConfirmacion = false;
var banBD = true;
var poderes = new PowerUps();
