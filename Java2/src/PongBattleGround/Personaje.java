package PongBattleGround;

import java.awt.event.KeyEvent;
import javax.swing.ImageIcon;

public class Personaje extends Sprite implements Config {

    String paddle = "/img/paddle.jpg";

    int dx;
    int dy;
    int largo;
    int vel;
    int puntos;

    public Personaje() {

        ImageIcon ii = new ImageIcon(this.getClass().getResource(paddle));
        image = ii.getImage();

        width = image.getWidth(null);
        heigth = image.getHeight(null);

        resetState();
    }
    //MOVIMIENTOS DE LA RAQUETA
    public void move() {
        posY += dy;
        posX += dx;
        
        if (posY <= 2)
            posY = 2;
        
        if (posY >= Config.PADDLE_DOWN)
            posY = Config.PADDLE_DOWN;
            
        if (posX <= 2) 
          posX = 2;
        if (posX >= Config.PADDLE_RIGHT)
          posX = Config.PADDLE_RIGHT;
    }

    
    
    //POSICION INICIAL DE LA RAQUETA
    public void resetState() {
        posX = 200;
        posY = 360;
    }
}

