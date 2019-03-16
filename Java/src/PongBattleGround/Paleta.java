package PongBattleGround;

import java.awt.event.KeyEvent;
import javax.swing.ImageIcon;

public class Paleta extends Sprite implements Config {

    String paddle = "/img/paddle.jpg";

    int dx;
    int dy;

    public Paleta() {

        ImageIcon ii = new ImageIcon(this.getClass().getResource(paddle));
        image = ii.getImage();

        width = image.getWidth(null);
        heigth = image.getHeight(null);

        resetState();
    }
    //MOVIMIENTOS DE LA RAQUETA
    public void move() {
        y += dy;
        x += dx;
        
        if (y <= 2)
            y = 2;
        
        if (y >= Config.PADDLE_DOWN)
            y = Config.PADDLE_DOWN;
            
        if (x <= 2) 
          x = 2;
        if (x >= Config.PADDLE_RIGHT)
          x = Config.PADDLE_RIGHT;
    }

    public void keyPressed(KeyEvent e) {

        int key = e.getKeyCode();
        
        if (key == KeyEvent.VK_UP ){
            dy = -2;
        }
        
        if (key == KeyEvent.VK_DOWN){
            dy = 2;
        }
            

        if (key == KeyEvent.VK_LEFT) {
            dx = -2;

        }

        if (key == KeyEvent.VK_RIGHT) {
            dx = 2;
        }
    }

    public void keyReleased(KeyEvent e) {
        int key = e.getKeyCode();
        
        if (key == KeyEvent.VK_UP){
            dy = 0;
        }
        
        if (key == KeyEvent.VK_DOWN){
            dy = 0;
        }
        
        if (key == KeyEvent.VK_LEFT) {
            dx = 0;
        }

        if (key == KeyEvent.VK_RIGHT) {
            dx = 0;
        }
    }
    //POSICION INICIAL DE LA RAQUETA
    public void resetState() {
        x = 200;
        y = 360;
    }
}

