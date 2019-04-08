package PongBattleGround;

import java.awt.Graphics;
import javax.swing.ImageIcon;

public class Recogible extends Sprite {

    String brickie = "/img/ladrillo.png";

    boolean destroyed;

    public Recogible(int posX, int posY) {
      this.posX = posX;
      this.posY = posY;

      ImageIcon imgBloque = new ImageIcon(this.getClass().getResource(brickie));
      image = imgBloque.getImage();

      width = image.getWidth(null);
      heigth = image.getHeight(null);

      destroyed = false;
    }
    public void pintar(Graphics g) {
            g.drawImage(getImage(), getX(), getY(),getWidth(), getHeight(), null);    
    }
    public boolean isDestroyed()
    {
      return destroyed;
    }

    public void setDestroyed(boolean destroyed)
    {
      this.destroyed = destroyed;
    }

}