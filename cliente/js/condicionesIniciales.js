//Lienzos

console.log("cond ini")
var contextoFondo = document.getElementById("lienzoFondo").getContext("2d");
var contextoUI = document.getElementById("ui").getContext("2d");

// Datos Actuales //
var mapaActual      = escenarios[0];
var bolaActual      = bolas[0];
var personajeActual = jugadores[1];
var puntos_1        = 0;
var puntos_2        = 0;

var camara  = new Camara();
var mapa    = new Mapa();
var uiClass = new UI();

var mapa1 = false;
var mapa2 = true;

var jugadores= new Array();//Array para los 4 jugadores
crearJugadores();


var pelotas =new Array();//Array para las 4 pelotas
crearBolas(mapa);

var movimientoJugador=false;

var temporizador;
var usuario = "";
var banConfirmacion = false;
var banBD = true;
var poderes = new PowerUps();
