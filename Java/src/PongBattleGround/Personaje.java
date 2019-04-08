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
    int alto      = 32;
    float ladoAlto	= (float) (alto * 0.5);
    int altoMax 	= alto;

    float ancho       = (float) (alto * 0.5);
    float ladoAncho	= (float) (ancho * 0.5);
    float anchoMax 	= ancho;
    
    public Personaje(String usuarioName,int eq,int principalVariable,int primeroVariable,String idUsr,String idRoom) 
    {  
        String usuario = usuarioName;
        int id = Integer.parseInt(idUsr);
        int idSala = Integer.parseInt(idRoom);
        int primero = primeroVariable;
        int equipo = eq;
        int principal = principalVariable;
        
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
        if(posY + ladoAlto > HEIGTH)
        {
            posY = (int) (WIDTH - ladoAlto);
        }
        else if(posY - ladoAlto <0)
        {
            posY = (int) ladoAlto;
        }
    }
    
    //Pinta los Objetos Graficos

    public void dibujar(Graphics g) {
            g.drawImage(getImage(), getX(), getY(),getWidth(), getHeight(), null); 
            
    }

    

}

