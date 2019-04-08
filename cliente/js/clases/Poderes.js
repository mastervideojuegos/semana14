// Power Ups //
var bPoderVisible       = false;
var contadorPoderes     = 0;
var bCongelaJugador     = false;
var poderUtilizado      = 0;

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
            console.log("CongelaJugador");
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
    this.centroX          = this.posX+this.radio+camara.posX;
    this.centroY          = this.posY+this.radio+camara.posY;
    this.indexPoder       = Math.floor(Math.random()*5.9);
    this.poderActual      = imgpoderes[this.indexPoder];
    poderUtilizado        = this.indexPoder;
  }

  this.dibujar = function(ctx, cam)
  {
    ctx.drawImage(this.poderActual, this.posX+cam.posX, this.posY+cam.posY);
  }

  this.buclePoderes = function()
  {
    if(contadorPoderes == 50)
    {
        bPoderVisible = true;
        this.valoresRandom();
    }
    if(contadorPoderes > 50 && contadorPoderes <= 100 && bPoderVisible)
    {
        this.dibujar(contextoFondo, camara);
    }
    if (contadorPoderes > 100)
    {
        contadorPoderes = 0;
    }
  }
}
