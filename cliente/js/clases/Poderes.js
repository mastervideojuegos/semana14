// Power Ups //

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
            console.log("CongelaJugador");
            return true;
        }
//---------------------------------------//

function PowerUps(img)
{
  this.posX = 100 + Math.random()*900;
  this.posY = 100 + Math.random()*900;
  this.contadorPoderes = 0;
  this.randomIndex     = Math.floor(Math.random()*5.9);
  this.poderActual     = imgpoderes[this.randomIndex];

  this.Dibujar = function(ctx, cam)
  {
    ctx.drawImage(this.poderActual, this.posX+cam.posX, this.posY+cam.posY);
  }

  this.ValoresRandom = function()
  {
    this.posX             = 200 + Math.random()*900;
    this.posY             = 100 + Math.random()*400;
    this.randomIndex      = Math.floor(Math.random()*5.9);
    this.poderActual      = imgpoderes[this.randomIndex];
    this.contadorPoderes  = 0;
  }
}
