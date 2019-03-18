/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PongBattleGround;

import java.awt.event.KeyEvent;

/**
 *
 * @author Stormk90
 */
public class Poderes extends Game {
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
        public void SuperBola() 
        {
           ball.tamanio = 32;
            System.out.println("SuperBola");
        }
        //MiniBola
        public void MiniBola()
        {
            ball.tamanio = 8;
            System.out.println("MiniBola");
        }
        //AceleraBola
        public void AceleraBola()
        {
            ball.velocidad = (float) 1.5;
            System.out.println("AceleraBola");
        }
        //DeceleraBola
        public void DeceleraBola()
        {
            ball.velocidad = (float) 0.5;
            System.out.println("DeceleraBola");
        }
        //MultiBola
        public void MultiBola()
        {
            //TODO
        }
        //TeleBola
        public void TeleBola()
        {
            //TODO
        }
//---------------------------------------//   

    // Jugador //
        //SuperJugador
        public void SuperJugador()
        {
            paddle.largo = 64;
            System.out.println("SuperJugador");
        }
        //MiniJugador
        public void MiniJugador()
        {
            paddle.largo = 16;
            System.out.println("MiniJugador");
        }
        //AceleraJugador
        public void AceleraJugador()
        {
            paddle.vel = 15;
            System.out.println("AceleraJugador");
        }
        //DeceleraJugador
        public void DeceleraJugador()
        {
            paddle.vel = 5;
            System.out.println("DeceleraJugador");
        }
        //CongelaJugador
        public void CongelaJugador()
        {
            bCongelaJugador = !bCongelaJugador;
        }
//---------------------------------------//
        public void keyPressed(KeyEvent e) {
            int keyCode = e.getKeyCode();
            switch( keyCode ) { 
                case KeyEvent.VK_1:
                     SuperBola(); 
                    break;
                case KeyEvent.VK_2:
                    MiniBola();
                    break;
                case KeyEvent.VK_3:
                   AceleraBola(); 
                    break;
                case KeyEvent.VK_4 :
                   DeceleraBola();
                    break;
                case KeyEvent.VK_5 :
                   SuperJugador();
                    break;
                case KeyEvent.VK_6 :
                    MiniJugador();
                    break;
                case KeyEvent.VK_7 :
                    AceleraJugador();
                    break;
                case KeyEvent.VK_8 :
                   DeceleraJugador();
                    break;
                case KeyEvent.VK_9 :
                  CongelaJugador();
                    break;
            }
        }
 
}
