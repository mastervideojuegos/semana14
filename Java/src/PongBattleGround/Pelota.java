package PongBattleGround;

import static PongBattleGround.Config.BALL_RIGHT;
import javax.swing.ImageIcon;


public class Pelota extends Sprite implements Config {

   private int xdir;
   private int ydir;

   protected String ball = "/img/pixar.png";

   public Pelota() {

     xdir = 1;
     ydir = -1;

     ImageIcon ii = new ImageIcon(this.getClass().getResource(ball));
     image = ii.getImage();

     width = image.getWidth(null);
     heigth = image.getHeight(null);

     resetState();
    }


    public void move()
    {
      x += xdir;
      y += ydir;

      if (x == 0) {
        setXDir(1);
      }

      if (x == BALL_RIGHT) {
        setXDir(-1);
      }

      if (y == 0) {
        setYDir(1);
      }
      
    }
    //PUNTO INICIAL PELOTA
    public void resetState() 
    {
      x = 230;
      y = 355;
    }

    public void setXDir(int x)
    {
      xdir = x;
    }

    public void setYDir(int y)
    {
      ydir = y;
    }

    public int getYDir()
    {
      return ydir;
    }
}