// Escenarios //
var escenarios = [];

    //Clasico negro 4 colores
    var fondo_1 = new Image();
    fondo_1.src = "img/multimapa.jpg"
    escenarios.push(fondo_1);
    
    //Cancha de fútbol
    var fondo_2 = new Image();
    fondo_2.src = "img/mapa_Futbol.jpg"
    escenarios.push(fondo_2);
    
    //Cuadro de madera
    var fondo_3 = new Image();
    fondo_3.src = "img/marco15.png";
    escenarios.push(fondo_3);
    
    //Marco de metal
    var fondo_4 = new Image();
    fondo_4.src = "img/marco12.png";
    escenarios.push(fondo_4);
//---------------------------------------//

// Pelotas //

    //Pelota Fútbol
    var bola       = new Image();
        bola.src   = "img/balon.png";
        
    //Pelota Blanca Clasica
    var bolaBlanca      = new Image();
        bolaBlanca.src  = "img/bola_blanca.png";
//---------------------------------------//

// Jugadores //

    //Pad azul
    var padAzul        = new Image();
        padAzul.src    = "img/pad_azul.png";
        
    //Pad blanco
    var padBlanco      = new Image();
        padBlanco.src  = "img/pad_blanco.jpg";

//---------------------------------------//

$(document).keydown(function(e) 
{
    switch (e.which) 
    {
        case 49:
            mapaActual = escenarios[0];
            console.log("1");
            break;
        case 50:
            mapaActual = escenarios[1];
            console.log("2");
            break;
        case 51:
            mapaActual = escenarios[2];
            console.log("3");
            break;
        case 52:
            mapaActual = escenarios[3];
            console.log("4");
            break;
    }
});