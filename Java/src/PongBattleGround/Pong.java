package PongBattleGround;

import java.awt.Color;
import java.awt.Dimension;
import javax.swing.JFrame;

public class Pong extends JFrame {
    public Pong()
    {
        //menu();
        add(new Game());
        setTitle("Pong! Battle Ground");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(Config.WIDTH, Config.HEIGTH);
        setLocationRelativeTo(null);
        setIgnoreRepaint(true);
        setResizable(false);
        setVisible(true);
    }

    public static void main(String[] args) { 
       new Pong();
    }
    
   
}
