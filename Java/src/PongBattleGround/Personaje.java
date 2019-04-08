package PongBattleGround;

import java.awt.Graphics;
import javax.swing.ImageIcon;

public class Personaje extends Sprite implements Config {

    String imgPaddle = "/img/pad_1.jpg";

    int dx;
    int dy;
    int puntos;
    Poderes poderes;
    
    //Variables BD
    int listo = 0;
    //int posX = 101;
    //int posY = 330;
    int vel = 10;
    int direccion = 1;

    //Dimensiones de Barra
    int largo      = 32;
    float ladoLargo	= (float) (largo * 0.5);
    int largoMax 	= largo;

    float ancho       = (float) (largo * 0.5);
    float ladoAncho	= (float) (ancho * 0.5);
    float anchoMax 	= ancho;
    
    public Personaje(String usuario,int equipo,int principal,int primero,String idUsr,String idRoom) 
    {  
        int id = Integer.parseInt(idUsr);
        int idSala = Integer.parseInt(idRoom);
        
        ImageIcon imgPersonaje = new ImageIcon(this.getClass().getResource(imgPaddle));
        image = imgPersonaje.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
       
    }
    
    //MOVIMIENTOS DE LA RAQUETA
    public void moverse() 
    {
        poderes = new Poderes();
        if(!poderes.bCongelaJugador)
        {
            posY += vel * direccion;
            colisionPared();       
        }
    }
    public void colisionPared()
    {
        if(posY + ladoLargo > WIDTH)
        {
            posY = (int) (WIDTH - ladoLargo);
        }
        else if(posY - ladoLargo <0)
        {
            posY = (int) ladoLargo;
        }
    }
    
    //Pinta los Objetos Graficos

    public void dibujar(Graphics g) {
            g.drawImage(getImage(), getX(), getY(),getWidth(), getHeight(), null); 
            
    }

    

}

