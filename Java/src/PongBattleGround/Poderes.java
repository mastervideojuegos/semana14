package PongBattleGround;

import java.awt.event.KeyEvent;

public class Poderes {
    
    // Power Ups //

    boolean bSuperBola          = false;
    boolean bMiniBola           = false;
    boolean bAceleraBola        = false;
    boolean bDeceleraBola       = false;
    boolean bMultiBola          = false;
    boolean bTeleBola           = false;
    boolean bSuperJugador       = false;
    boolean bMiniJugador        = false;
    boolean bAceleraJugador     = false;
    boolean bDeceleraJugador    = false;
    boolean bCongelaJugador     = false;

    // Bola //
        //SuperBola
        public int SuperBola() 
        {
           System.out.println("SuperBola");
           return 2; 
        }
        //MiniBola
        public int MiniBola()
        {
            System.out.println("MiniBola");
            return (int) 0.5;
        }
        //AceleraBola
        public int AceleraBola()
        {
            System.out.println("AceleraBola");
            return (int) 1.5;
        }
        //DeceleraBola
        public int DeceleraBola()
        {
            System.out.println("DeceleraBola");
            return (int) 0.5;
        }
        //MultiBola
        public int MultiBola()
        {
            System.out.println("MultiBola");
            return (int) 4;
        }
        //TeleBola
        public void TeleBola()
        {
            //TODO
        }
//---------------------------------------//   

    // Jugador //
        //SuperJugador
        public int SuperJugador()
        {
            System.out.println("SuperJugador");
            return 2;
        }
        //MiniJugador
        public int MiniJugador()
        {
            System.out.println("MiniJugador");
            return (int) 0.5;
        }
        //AceleraJugador
        public int AceleraJugador()
        {
            System.out.println("AceleraJugador");
            return (int) 1.5;
        }
        //DeceleraJugador
        public int DeceleraJugador()
        {
            System.out.println("DeceleraJugador");
            return (int) 0.5;
        }
        //CongelaJugador
        public boolean CongelaJugador()
        {
            bCongelaJugador = !bCongelaJugador;
            return bCongelaJugador;
        }

 
}
