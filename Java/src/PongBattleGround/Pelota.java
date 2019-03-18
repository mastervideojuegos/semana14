package PongBattleGround;

import javax.swing.ImageIcon;


public class Pelota extends Sprite implements Config {

   private int dirX;
   private int dirY;
   float velocidad = 4;
   int tamanio;

   protected String ball = "/img/pixar.png";

   public Pelota() {

     dirX = 1;
     dirY = -1;

     ImageIcon imgPelota = new ImageIcon(this.getClass().getResource(ball));
     image = imgPelota.getImage();

     width = image.getWidth(null);
     heigth = image.getHeight(null);

     resetState();
    }


    public void move()
    {
      posX += dirX * velocidad;
      posY += dirY * velocidad;

      if (posX <= 0) {
        setXDir(1);
      }

      if (posX >= BALL_RIGHT) {
        setXDir(-1);
      }

      if (posY <= 0) {
        setYDir(1);
      }
      
    }
    //PUNTO INICIAL PELOTA
    public void resetState() 
    {
      posX = 230;
      posY = 355;
    }

    public void setXDir(int posX)
    {
      dirX = posX;
    }

    public void setYDir(int posY)
    {
      dirY = posY;
    }

    public int getYDir()
    {
      return dirY;
    }
}