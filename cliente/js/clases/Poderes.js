// Power Ups //
var bPoderVisible       = false;                                                // El poder esta visible
var contadorPoderes     = 0;                                                    // Duracion del poder dibujado en pantalla
var poderDibujado       = null;                                                 // Poder Dibujado
var poderUtilizado      = null;                                                 // Poder utilizado
var poderActivado       = false;                                                // El poder esta activo
var contadorPoderActivo = 0;                                                    // Duracion del poder activo
var bCongelaJugador     = false;

//--------------- Bola ----------------------//
function SuperBola()                                                            // SuperBola
{
  poderUtilizado = 0;
  return 2;
}

function MiniBola()                                                             //MiniBola
{
  poderUtilizado = 1;
  return 0.5;
}

function AceleraBola()                                                          //AceleraBola
{
  poderUtilizado = 2;
  return 2;
}

function DeceleraBola()                                                         //DeceleraBola
{
  poderUtilizado = 3;
  return 0.5;
}

function MultiBola()                                                            //MultiBola
{
  poderUtilizado = 4;
  if(poderActivado)
  {
    cantidadBolas = 3;
    for (var i = 0; i < cantidadBolas; i++)
    {
      pelotas.push(new Bola(mapa, cantidadBolas));
    }
  }
  else
  {
    pelotas.splice(1, pelotas.length);
  }
}

function TeleBola()                                                             //TeleBola
{
  poderUtilizado = 5;
}

//--------------- Jugador ----------------------//
function SuperJugador()                                                         //SuperJugador
{
  poderUtilizado = 6;
  return 2;
}

function MiniJugador()                                                          //MiniJugador
{
  poderUtilizado = 7;
  return 0.5;
}

function AceleraJugador()                                                       //AceleraJugador
{
  poderUtilizado = 8;
  return 2;
}

function DeceleraJugador()                                                      //DeceleraJugador
{
  poderUtilizado = 9;
  return 0.5;
}

function CongelaJugador()                                                       //CongelaJugador
{
  poderUtilizado = 10;
  return true;
}
//---------------------------------------//

function PowerUps()
{
  this.radio            = 16;
  this.posX             = 0;
  this.posY             = 0;
  this.centroX          = 0;
  this.centroY          = 0;
  this.indexPoder       = 0;
  this.poderActual      = null;

  this.valoresRandom = function()
  {
    this.posX             = 200 + Math.random()*900;
    this.posY             = 200 + Math.random()*400;
    this.centroX          = this.posX + this.radio + camara.posX;
    this.centroY          = this.posY + this.radio + camara.posY;
    this.indexPoder       = Math.floor(Math.random()*10.9);
    this.poderActual      = imgpoderes[this.indexPoder];
    poderDibujado         = this.indexPoder;
  }

  this.dibujar = function(ctx, cam)
  {
    ctx.drawImage(this.poderActual, this.posX+cam.posX, this.posY+cam.posY);
  }

  this.buclePoderes = function()
  {
    var tiempoInicioDibujo  = 49;
    var tiempoFinalDibujo   = 100;
    var duracionPoder       = 100;

    // Habilita un poder aleatorio
    if(contadorPoderes == tiempoInicioDibujo)
    {
      bPoderVisible = true;
      this.valoresRandom();
    }
    // Dibuja el poder y lo muestra durante 50 unidades de tiempo
    if(contadorPoderes > tiempoInicioDibujo && contadorPoderes <= tiempoFinalDibujo && bPoderVisible)
    {
      this.dibujar(contextoFondo, camara);
    }
    // Resetea el contador de poderes
    if (contadorPoderes > tiempoFinalDibujo)
    {
      bPoderVisible = false;
      contadorPoderes = 0;
    }

    // Activa el poder durante 100 unidades de tiempo
    if(poderActivado && contadorPoderActivo <= duracionPoder)
    {
      contadorPoderActivo++
    }
    // Desactiva el poder
    else if(poderActivado && contadorPoderActivo > duracionPoder)
    {
      poderActivado = false;
      contadorPoderActivo = 0;
    }
  }
}
