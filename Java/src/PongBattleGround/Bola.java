package PongBattleGround;

import java.awt.Graphics;
import java.awt.Point;
import javax.swing.ImageIcon;


public class Bola extends Sprite implements Config {

   //private int dirX;
   //private int dirY;
   
   int radio = 8;
   int radioMax = radio;
   //int posX = 0;
   //int posY = 0;
   
   float velocidad  = 1;
   int avanceX    = 0;
   int avanceY    = 0;

   protected String imgBall = "/img/bola_1.png";

   public Bola() {
     //dirX = 1;
     //dirY = -1;

     ImageIcon imgPelota = new ImageIcon(this.getClass().getResource(imgBall));
     image = imgPelota.getImage();

     width = image.getWidth(null);
     heigth = image.getHeight(null);

     pelotaRandom();
    }
   
    //DIBUJAR PELOTA
    public void dibujar(Graphics g) {
            g.drawImage(getImage(), getX(), getY(),getWidth(), getHeight(), null);
            //System.out.println(getY());
            
    }
    
    //PUNTO INICIAL PELOTA
    public void pelotaRandom() 
    {
      posX = (int) ((int) (Math.random()*WIDTH*0.33)+WIDTH*0.33);
      posY = (int) ((int) (Math.random()*HEIGTH*0.33)+HEIGTH*.33);
    }
    
    //Colisiones
    public void colisionPared(int px, int py)
    {
        if(px - radio <= 0 || px + radio >= WIDTH)
        {
            pelotaRandom();
        }
        if(py - radio <= 0 || py + radio >= HEIGTH)
        {
             avanceY *=-1;
        }
        
        /* OLD
        if (getRect().getMaxY() > Config.BOTTOM) {
            //stopGame();
            setYDir(-1 * getYDir());
        }*/
    }
    
    public void colisionPersonajes(int px, int py,Personaje[] jugadores)
    {
        int x;
        for (x = 0; x < jugadores.length; x++)
        {
            if( px + radio >= jugadores[x].posX-jugadores[x].ladoAncho &&
                px - radio <= jugadores[x].posX+jugadores[x].ladoAncho &&
                py + radio >= jugadores[x].posY -jugadores[x].ladoAlto &&
                py - radio <= jugadores[x].posY +jugadores[x].ladoAlto)
            {
                //System.out.println("Colision Fin");
                avanceX *=-1;   
            }
        }
    }
   public void moverse(Personaje[] jugadores)
   {
        //console.log("moviendose");
        int tmpX = posX + (int)(avanceX * velocidad);
        int tmpY = posY + (int)(avanceY * velocidad);

        colisionPared(tmpX,tmpY);
        colisionPersonajes(tmpX,tmpY,jugadores);

        posX += avanceX * velocidad;
        posY += avanceY * velocidad;
        
        //System.out.println(posY);
        
        //tamanio *= poderes(superbola)
    } 
   
   
    
}