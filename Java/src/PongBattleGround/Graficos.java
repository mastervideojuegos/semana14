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
     

    escenarios.push(fondo_1);
    }
    
   
//---------------------------------------//

// Bolas //
var bolas = [];

    //Bola Blanca
    var bola_1      = new Image();
        bola_1.src  = "img/bola_1.png";
    bolas.push(bola_1);
//---------------------------------------//

// Jugadores //
var jugadores   = [];
var jugador     = 0;

    //Pad Amarillo
    var pad_1       = new Image();
        pad_1.src   = "img/pad_1.jpg";
    jugadores.push(pad_1);
    
    //Pad Azul
    var pad_2       = new Image();
        pad_2.src   = "img/pad_2.jpg";
    jugadores.push(pad_2);
    
    //Pad Rojo
    var pad_3       = new Image();
        pad_3.src   = "img/pad_3.jpg";
    jugadores.push(pad_3);
    
    //Pad Verde
    var pad_4       = new Image();
        pad_4.src   = "img/pad_4.jpg";
    jugadores.push(pad_4);
//---------------------------------------//
}
