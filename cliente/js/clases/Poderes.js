// Power Ups //

var bSuperBola          = false;
var bMiniBola           = false;
var bAceleraBola        = false;
var bDeceleraBola       = false;
var bMultiBola          = false;
var bTeleBola           = false;
var bSuperJugador       = false;
var bMiniJugador        = false;
var bAceleraJugador     = false;
var bDeceleraJugador    = false;
var bCongelaJugador     = false;

    // Bola //
        //SuperBola
        function SuperBola()
        {
            bola.tamanio = 32;
            console.log("SuperBola");
        }
        //MiniBola
        function MiniBola()
        {
            bola.tamanio = 8;
            console.log("MiniBola");
        }
        //AceleraBola
        function AceleraBola()
        {
            bola.velocidad = 1.5;
            console.log("AceleraBola");
        }
        //DeceleraBola
        function DeceleraBola()
        {
            bola.velocidad = 0.5;
            console.log("DeceleraBola");
        }
        //MultiBola
        function MultiBola()
        {
            //TODO
        }
        //TeleBola
        function TeleBola()
        {
            //TODO
        }
//---------------------------------------//   

    // Jugador //
        //SuperJugador
        function SuperJugador()
        {
            personaje.largo = 64;
            console.log("SuperJugador");
        }
        //MiniJugador
        function MiniJugador()
        {
            personaje.largo = 16;
            console.log("MiniJugador");
        }
        //AceleraJugador
        function AceleraJugador()
        {
            personaje.vel = 15;
            console.log("AceleraJugador");
        }
        //DeceleraJugador
        function DeceleraJugador()
        {
            personaje.vel = 5;
            console.log("DeceleraJugador");
        }
        //CongelaJugador
        function CongelaJugador()
        {
            bCongelaJugador = !bCongelaJugador;
        }
//---------------------------------------//

$(document).keydown(function(e) 
{
    switch (e.which) 
    {
        // 1 //
        case 49:
            SuperBola();
            break;
        // 2 //
        case 50:
            MiniBola();
            break;
        // 3 //
        case 51:
            AceleraBola();
            break;
        // 4 //
        case 52:
            DeceleraBola();
            break;
        // 5 //
        case 53:
            SuperJugador();
            break;
        // 6 //
        case 54:
            MiniJugador();
            break;
        // 7 //
        case 55:
            AceleraJugador();
            break;
        // 8 //
        case 56:
            DeceleraJugador();
            break;
        // 9 //
        case 57:
            CongelaJugador();
            break;
    }
});