//Lienzos

console.log("cond ini")
var contextoFondo = document.getElementById("lienzoFondo").getContext("2d");

// Datos Actuales //
var mapaActual      = escenarios[0];
var bolaActual      = bolaBlanca;
var personajeActual = padBlanco;

var mapa1=false;
var mapa2=true;

var temporizador; 
var bola = new Bola();

var personaje = new Personaje();
var camara  = new Camara();
var mapa = new Mapa();

var 	banBD = true;


