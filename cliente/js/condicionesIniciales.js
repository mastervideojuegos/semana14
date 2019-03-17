//Lienzos

console.log("cond ini")
var contextoFondo = document.getElementById("lienzoFondo").getContext("2d");

// Datos Actuales //
var mapaActual      = escenarios[0];
var bolaActual      = bolas[0];
var personajeActual = jugadores[1];

var mapa1 = false;
var mapa2 = true;

var temporizador; 
var bola = new Bola();

var personaje = new Array();
var camara  = new Camara();
var mapa = new Mapa();

var usuario = "";
var banConfirmacion = false;
var banBD = true;


