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
            console.log("SuperBola");
            return 2;
        }
        //MiniBola
        function MiniBola()
        {
            console.log("MiniBola");
            return 0.5;
        }
        //AceleraBola
        function AceleraBola()
        {
            console.log("AceleraBola");
            return 1.5;
        }
        //DeceleraBola
        function DeceleraBola()
        {
            console.log("DeceleraBola");
            return 0.5;
        }
        //MultiBola
        function MultiBola()
        {
            console.log("MultiBola");
            return 4;
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
            console.log("SuperJugador");
            return 2;
        }
        //MiniJugador
        function MiniJugador()
        {
            console.log("MiniJugador");
            return 0.5;
        }
        //AceleraJugador
        function AceleraJugador()
        {
            console.log("AceleraJugador");
            return 1.5;
        }
        //DeceleraJugador
        function DeceleraJugador()
        {
            console.log("DeceleraJugador");
            return 0.5;
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
