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
  return 1.5;
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
      pelotas.push(new Bola(mapa));
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
  return 2;
}

function MiniJugador()                                                          //MiniJugador
{
  return 0.5;
}

function AceleraJugador()                                                       //AceleraJugador
{
  return 1.5;
}

function DeceleraJugador()                                                      //DeceleraJugador
{
  return 0.5;
}

function CongelaJugador()                                                       //CongelaJugador
{
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
    // Habilita un poder aleatorio
    if(contadorPoderes == 50)
    {
      bPoderVisible = true;
      this.valoresRandom();
    }
    // Dibuja el poder y lo muestra durante 50 unidades de tiempo
    if(contadorPoderes > 50 && contadorPoderes <= 100 && bPoderVisible)
    {
      this.dibujar(contextoFondo, camara);
    }
    // Resetea el contador de poderes
    if (contadorPoderes > 100)
    {
      contadorPoderes = 0;
    }
    // Activa el poder durante 100 unidades de tiempo
    if(poderActivado && contadorPoderActivo < 101)
    {
      contadorPoderActivo++
    }
    // Desactiva el poder
    else if(poderActivado && contadorPoderActivo > 100)
    {
      poderActivado = false;
      contadorPoderActivo = 0;
    }
  }
}
