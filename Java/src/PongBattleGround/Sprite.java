//Coge las Medidas del Sprite Para Colisiones

package PongBattleGround;

import java.awt.Graphics;
import java.awt.Image;
import java.awt.Rectangle;

public class Sprite {

    protected int posX;
    protected int posY;
    protected int width;
    protected int heigth;
    protected Image image;


    public void setX(int posX) {
        this.posX = posX;
    }

    public int getX() {
        return posX;
        
    }

    public void setY(int posY) {
        this.posY = posY;
    }

    public int getY() {
        return posY;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return heigth;
    }

    Image getImage()
    {
      return image;
    }

    Rectangle getRect()
    {
      return new Rectangle(posX, posY, 
          image.getWidth(null), image.getHeight(null));
    }

    void paint(Graphics g) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}