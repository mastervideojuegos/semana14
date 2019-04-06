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
     int escenarios[];
     String imgScene = "img/escenario_1.jpg";   
     ImageIcon imgEscenario = new ImageIcon(this.getClass().getResource(imgScene));
     image = imgEscenario.getImage();
     width = image.getWidth(null);
     heigth = image.getHeight(null);
     

    //escenarios.push(fondo_1);
    }
    
   
//---------------------------------------//

// Bolas //
    public void bolas() {
        int bolas[];

    //Bola Blanca
     String imgBola_1 = "img/bola_1.png";   
     ImageIcon imgBolas = new ImageIcon(this.getClass().getResource(imgBola_1));
     image = imgBolas.getImage();
     width = image.getWidth(null);
     heigth = image.getHeight(null);
   
    //bolas.push(bola_1);
    }
//---------------------------------------//

// Jugadores //
    public void jugadores() 
    {
        int jugadores[];
        int jugador = 0;

        //Pad Amarillo
        String imgJugador_1 = "img/pad_1.jpg";   
        ImageIcon imgJugadores1 = new ImageIcon(this.getClass().getResource(imgJugador_1));
        image = imgJugadores1.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        //jugadores.push(pad_1);

        //Pad Azul
        String imgJugador_2 = "img/pad_2.jpg";   
        ImageIcon imgJugadores2 = new ImageIcon(this.getClass().getResource(imgJugador_2));
        image = imgJugadores2.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        //jugadores.push(pad_2);

        //Pad Rojo
        String imgJugador_3 = "img/pad_3.jpg";   
        ImageIcon imgJugadores3 = new ImageIcon(this.getClass().getResource(imgJugador_3));
        image = imgJugadores3.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        //jugadores.push(pad_3);

        //Pad Verde
        String imgJugador_4 = "img/pad_4.jpg";   
        ImageIcon imgJugadores4 = new ImageIcon(this.getClass().getResource(imgJugador_4));
        image = imgJugadores4.getImage();
        width = image.getWidth(null);
        heigth = image.getHeight(null);
        //jugadores.push(pad_3);
    }
//---------------------------------------//
}
