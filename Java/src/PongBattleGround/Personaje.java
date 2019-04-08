package PongBattleGround;

import java.awt.Graphics;
import javax.swing.ImageIcon;

public class Personaje extends Sprite implements Config {

    String imgPaddle = "/img/paddle.jpg";
    
    //Variables Base de datos
    String usuario;
    int id;
    int idSala;
    int list;
    int primero;
    int equipo;
    int principal;
    
    //Variables personaje
    int dx;
    int dy;
    int vel = 10;
    int direccion = 0;
    int puntos;
    
    //Variables dimensiones
    float alto = 32;
    float ladoAlto = (float) (alto*0.5);
    float altoMax = alto;
    
    float ancho = (float) (alto*0.5);
    float ladoAncho = (float) (ancho*0.5);
    float anchoMax = ancho;

    public Personaje() 
    {  
        ImageIcon imgPersonaje = new ImageIcon(this.getClass().getResource(imgPaddle));
        image = imgPersonaje.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        posicionInicial();
    }
    
    //MOVIMIENTOS DE LA RAQUETA
    public void mover() 
    {
        if(!bCongelaJugador){
            posY += dy;
            posX += dx;
            colisionPared();
        }
    }
    
    public void colisionPared()
    {
        if (posY <= 2)
            posY = 2;
        
        if (posY >= Config.PADDLE_DOWN)
            posY = Config.PADDLE_DOWN;
            
        if (posX <= 2) 
          posX = 2;
        if (posX >= Config.PADDLE_RIGHT)
          posX = Config.PADDLE_RIGHT;
    }
    //Pinta los Objetos Graficos

    public void dibujar(Graphics g) {
            g.drawImage(getImage(), getX(), getY(),getWidth(), getHeight(), null);    
    }

   
    //POSICION INICIAL DE LA RAQUETA
    public void posicionInicial() {
        posX = 1250;
        posY = 50;
    }
}

