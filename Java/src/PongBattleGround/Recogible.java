package PongBattleGround;

import javax.swing.ImageIcon;

public class Recogible extends Sprite {

    String brickie = "/img/ladrillo.png";

    boolean destroyed;

    public Recogible(int x, int y) {
      this.x = x;
      this.y = y;

      ImageIcon imgBloque = new ImageIcon(this.getClass().getResource(brickie));
      image = imgBloque.getImage();

      width = image.getWidth(null);
      heigth = image.getHeight(null);

      destroyed = false;
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