package PongBattleGround;

import java.awt.Graphics;
import java.awt.event.KeyEvent;
import javax.swing.ImageIcon;

public class Poderes extends Graficos{
    
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
    boolean bPoderVisible = false;
    int contadorPoderes = 0;
    int poderUtilizado = 0;
    
    
    Graficos graficos;
    int radio = 16;
    float posX = 0;
    float posY = 0;
    float centroX = 0;
    float centroY = 0;
    int indexPoder = 0;
    ImageIcon poderActual;

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
    
        
    // Power Ups
    public void valoresRandom(){
        posX = (float) (200 + Math.random()*900);
        posY = (float) (200 + Math.random()*900);
        centroX = posX + radio;
        centroY = posY + radio;
        indexPoder = (int) Math.floor(Math.random()*5.9);
        poderActual = graficos.poderes(indexPoder);
        poderUtilizado = indexPoder;
    }
    
    public void dibujar(Graphics g){
        g.drawImage(getImage(), getX(), getY(),getWidth(), getHeight(), null);
    }
    
    public void buclePoderes(){
        if(contadorPoderes == 50){
            bPoderVisible = true;
            valoresRandom();
        }
        if(contadorPoderes > 50 && contadorPoderes <= 100 && bPoderVisible)
        {
            // Dibujo el poder aquí
        }
        if (contadorPoderes > 100)
        {
            contadorPoderes = 0;
        }
    }
}
