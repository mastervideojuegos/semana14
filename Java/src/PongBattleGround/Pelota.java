package PongBattleGround;

import java.awt.Point;
import javax.swing.ImageIcon;


public class Pelota extends Sprite implements Config {

   private int dirX;
   private int dirY;
   float velocidad = 4;
   int tamanio;
   
   //Game game = new Game();


   protected String ball = "/img/pixar2.png";

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
    
    public void move2(Personaje paddle,Personaje paddle2)
    {
      System.out.println(paddle.posX);
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
    public int getXDir()
    {
      return dirX;
    }
    
    //Colisiones
    
    public void colisiones(Personaje paddle,Personaje paddle2, Recogible bricks[]) {
        
        if (getRect().getMaxY() > Config.BOTTOM) {
            //stopGame();
            setYDir(-1 * getYDir());
        }
        //Colision RECOGIBLES CONDICION DE GANAR
        for (int i = 0, j = 0; i < 90; i++) {
            if (bricks[i].isDestroyed()) {
                j++;
            }
            if (j == 90) {
                //message = "Ganaste Webón!";
                //stopGame();
            }
        }
        
        //COLISION RAQUETA1
        if ((getRect()).intersects(paddle.getRect())) {

            int paddleLPos = (int)paddle.getRect().getMaxY();
            int ballLPos = (int)getRect().getMaxY();

            int first = paddleLPos + 8;
            int second = paddleLPos + 16;
            int third = paddleLPos + 24;
            int fourth = paddleLPos + 32;

            if (ballLPos < first) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos >= first && ballLPos < second) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos >= second && ballLPos < third) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos >= third && ballLPos < fourth) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos > fourth) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }
        }
        
        //COLISION RAQUETA2
        if ((getRect()).intersects(paddle2.getRect())) {

            int paddleLPos2 = (int)paddle2.getRect().getMaxY();
            int ballLPos2 = (int)getRect().getMaxY();

            int first = paddleLPos2 + 8;
            int second = paddleLPos2 + 16;
            int third = paddleLPos2 + 24;
            int fourth = paddleLPos2 + 32;

            if (ballLPos2 < first) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos2 >= first && ballLPos2 < second) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos2 >= second && ballLPos2 < third) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos2 >= third && ballLPos2 < fourth) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }

            if (ballLPos2 > fourth) {
                setXDir(-1 * getXDir());
                setYDir(1 * getYDir());
            }
        }

        //COLISION RECOGIBLES
        for (int i = 0; i < 90; i++) {
            if ((getRect()).intersects(bricks[i].getRect())) {

                int ballLeft = (int)getRect().getMinX();
                int ballHeight = (int)getRect().getHeight();
                int ballWidth = (int)getRect().getWidth();
                int ballTop = (int)getRect().getMinY();

                Point pointRight =new Point(ballLeft + ballWidth + 1, ballTop);
                Point pointLeft = new Point(ballLeft - 1, ballTop);
                Point pointTop = new Point(ballLeft, ballTop - 1);
                Point pointBottom = new Point(ballLeft, ballTop + ballHeight + 1);

                if (!bricks[i].isDestroyed()) {
                    if (bricks[i].getRect().contains(pointRight)) {
                        setXDir(-1);
                    }

                    else if (bricks[i].getRect().contains(pointLeft)) {
                        setXDir(1);
                    }

                    if (bricks[i].getRect().contains(pointTop)) {
                        setYDir(1);
                    }

                    else if (bricks[i].getRect().contains(pointBottom)) {
                        setYDir(-1);
                    }

                    bricks[i].setDestroyed(true);
                    paddle.puntos++;
                }
            }
        }
    
        
    }
    
}