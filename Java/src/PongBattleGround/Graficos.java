/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PongBattleGround;

import javax.swing.ImageIcon;

/**
 *
 * @author Stormk90
 */
public class Graficos extends Sprite {
    // Escenarios //
    
//Escenario Negro
    public void escenarioNegro() {
     ImageIcon[] escenarios = new ImageIcon[1];
     String imgScene = "img/escenario_1.jpg";   
     ImageIcon imgEscenario = new ImageIcon(this.getClass().getResource(imgScene));
     image = imgEscenario.getImage();
     width = image.getWidth(null);
     heigth = image.getHeight(null);
     

    escenarios[0] = imgEscenario;
    }
    
   
//---------------------------------------//

// Bolas //
    public void bolas() {
        ImageIcon[] bolas = new ImageIcon[1];

    //Bola Blanca
     String imgBola_1 = "img/bola_1.png";   
     ImageIcon imgBolas = new ImageIcon(this.getClass().getResource(imgBola_1));
     image = imgBolas.getImage();
     width = image.getWidth(null);
     heigth = image.getHeight(null);
   
    bolas[0] = imgBolas;
    }
//---------------------------------------//

// Jugadores //
    public void jugadores() 
    {
        ImageIcon[] jugadores = new ImageIcon[4];
        int jugador = 0;

        //Pad Amarillo
        String imgJugador_1 = "img/pad_1.jpg";   
        ImageIcon imgJugadores1 = new ImageIcon(this.getClass().getResource(imgJugador_1));
        image = imgJugadores1.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        jugadores[0] = imgJugadores1;

        //Pad Azul
        String imgJugador_2 = "img/pad_2.jpg";   
        ImageIcon imgJugadores2 = new ImageIcon(this.getClass().getResource(imgJugador_2));
        image = imgJugadores2.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        jugadores[1] = imgJugadores2;

        //Pad Rojo
        String imgJugador_3 = "img/pad_3.jpg";   
        ImageIcon imgJugadores3 = new ImageIcon(this.getClass().getResource(imgJugador_3));
        image = imgJugadores3.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        jugadores[2] = imgJugadores3;

        //Pad Verde
        String imgJugador_4 = "img/pad_4.jpg";   
        ImageIcon imgJugadores4 = new ImageIcon(this.getClass().getResource(imgJugador_4));
        image = imgJugadores4.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        jugadores[3] = imgJugadores4;
    }
//---------------------------------------//
    
    // Poderes //
    public void poderes() 
    {
        ImageIcon[] imgpoderes = new ImageIcon[5];

        //SuperBola
        String imgPoder_1 = "img/poderes/superbola.png";   
        ImageIcon imgPoderes1 = new ImageIcon(this.getClass().getResource(imgPoder_1));
        image = imgPoderes1.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        imgpoderes[0] = imgPoderes1;
        
        //MiniBola
        String imgPoder_2 = "img/poderes/minibola.png";   
        ImageIcon imgPoderes2 = new ImageIcon(this.getClass().getResource(imgPoder_2));
        image = imgPoderes2.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        imgpoderes[1] = imgPoderes2;
        
        //AceleraBola
        String imgPoder_3 = "img/poderes/acelerabola.png";   
        ImageIcon imgPoderes3 = new ImageIcon(this.getClass().getResource(imgPoder_3));
        image = imgPoderes3.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        imgpoderes[2] = imgPoderes3;
        
        //DeceleraBola
        String imgPoder_4 = "img/poderes/decelerabola.png";   
        ImageIcon imgPoderes4 = new ImageIcon(this.getClass().getResource(imgPoder_4));
        image = imgPoderes4.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        imgpoderes[3] = imgPoderes4;
        
        //MultiBola
        String imgPoder_5 = "img/poderes/multibola.png";   
        ImageIcon imgPoderes5 = new ImageIcon(this.getClass().getResource(imgPoder_5));
        image = imgPoderes5.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        imgpoderes[4] = imgPoderes5;
        
        //TeleBola
        String imgPoder_6 = "img/poderes/telebola.png";   
        ImageIcon imgPoderes6 = new ImageIcon(this.getClass().getResource(imgPoder_6));
        image = imgPoderes6.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        imgpoderes[5] = imgPoderes6;
    }
//---------------------------------------//
}
