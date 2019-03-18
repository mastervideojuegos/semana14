package PongBattleGround;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Point;
import java.awt.Stroke;
import java.awt.Toolkit;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.util.Timer;
import java.util.TimerTask;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Game extends JPanel implements Config {
    
    Timer timer;
    String message = "Game Over";
    Pelota ball;
    Personaje paddle;
    Personaje paddle2;
    Recogible bricks[];
 

    boolean ingame = true;
    int timerId;


    public Game() {
        setBackground(Color.black);
        addKeyListener(new TAdapter());
        setFocusable(true);
        bricks = new Recogible[90];
        setDoubleBuffered(true);
        timer = new Timer();
        timer.scheduleAtFixedRate(new ScheduleTask(), 1000, 10);
    }

        public void addNotify() {
            super.addNotify();
            gameInit();
        }
        
    //Funcion Inicio    
    public void gameInit() {
        ball = new Pelota();
        paddle = new Personaje();
        paddle.posX = 1000;
        paddle.posY = 400;
        paddle2 = new Personaje();
        paddle2.posX = 100;
        paddle2.posY = 400;

        int i, j;
        int k = 0;
        for ( i = 0; i < 3; i++) {
            //Numero de Ladrillos a lo Ancho
            for (j = 0; j < 30; j++) {
                bricks[k] = new Recogible(j * 40 + 30, i * 10 + 50);
                k++;
            }
        }
    }

    //Pinta los Objetos Graficos
    public void paint(Graphics g) {
        super.paint(g);
      
        g.fillRect(595, 0, 10, 1024);
        Font font = new Font("Verdana", Font.BOLD, 130);
        FontMetrics metr = this.getFontMetrics(font);
        g.setFont(font);
        g.drawString(String.valueOf(paddle.puntos),
                    (Config.WIDTH - metr.stringWidth("1234")) / 2,
                     200);
        g.drawString("0",
                    (Config.WIDTH + metr.stringWidth("12")) / 2,
                     200);
        if (ingame) {
            g.drawImage(ball.getImage(), ball.getX(), ball.getY(),
                        ball.getWidth(), ball.getHeight(), this);
            g.drawImage(paddle.getImage(), paddle.getX(), paddle.getY(),
                        paddle.getWidth(), paddle.getHeight(), this);
            g.drawImage(paddle2.getImage(), paddle2.getX(), paddle2.getY(),
                        paddle2.getWidth(), paddle2.getHeight(), this);

            for (int i = 0; i < 90; i++) {
                if (!bricks[i].isDestroyed())
                    g.drawImage(bricks[i].getImage(), bricks[i].getX(),
                                bricks[i].getY(), bricks[i].getWidth(),
                                bricks[i].getHeight(), this);
            }
        } else {

            Font font2 = new Font("Verdana", Font.BOLD, 18);
            FontMetrics metr2 = this.getFontMetrics(font2);
            g.setColor(new Color(255,255,255));
            g.setFont(font2);
            g.drawString(message,
                         (Config.WIDTH - metr2.stringWidth(message)) / 2,
                         Config.WIDTH / 2);
        }


        Toolkit.getDefaultToolkit().sync();
        g.dispose();
    }
    
    //Controles
    private class TAdapter extends KeyAdapter {

        public void keyReleased(KeyEvent e) {
             int key = e.getKeyCode();

            if (key == KeyEvent.VK_UP){
                paddle.dy = 0;
            }

            if (key == KeyEvent.VK_DOWN){
                paddle.dy = 0;
            }

            if (key == KeyEvent.VK_LEFT) {
                paddle.dx = 0;
            }

            if (key == KeyEvent.VK_RIGHT) {
                paddle.dx = 0;
            }
            
            if (key == KeyEvent.VK_W ){
                paddle2.dy = 0;
            }

            if (key == KeyEvent.VK_S){
                paddle2.dy = 0;
            }
            
            if (key == KeyEvent.VK_A ){
                paddle2.dx = 0;
            }

            if (key == KeyEvent.VK_D){
                paddle2.dx = 0;
            }
        }

        public void keyPressed(KeyEvent e) {
            int key = e.getKeyCode();

            if (key == KeyEvent.VK_UP ){
                paddle.dy = -2;
            }

            if (key == KeyEvent.VK_DOWN){
                paddle.dy = 2;
            }


            if (key == KeyEvent.VK_LEFT) {
                paddle.dx = -2;

            }

            if (key == KeyEvent.VK_RIGHT) {
                paddle.dx = 2;
            }

            if (key == KeyEvent.VK_W ){
                paddle2.dy = -2;
            }

            if (key == KeyEvent.VK_S){
                paddle2.dy = 2;
            }
            
            if (key == KeyEvent.VK_A ){
                paddle2.dx = -2;
            }

            if (key == KeyEvent.VK_D){
                paddle2.dx = 2;
            }
            
        }
    }


    class ScheduleTask extends TimerTask {

        public void run() {

            ball.move();
            paddle.move();
            paddle2.move();
            ball.colisiones();
            //checkCollision();
            repaint();

        }
    }

    public void stopGame() {
        ingame = false;
        timer.cancel();
    }

   
        
        
        
        
}
