package PongBattleGround;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Toolkit;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.util.Timer;
import java.util.TimerTask;
import javax.swing.JPanel;

public class Game extends JPanel implements Config {
    
    Timer temporizador;
    String message = "Game Over";
    Bola ball;
    Personaje personaje;
    Personaje personaje2;
    Recogible[] bricks = new Recogible[90];
    
 

    boolean ingame = true;
    int timerId;


    public Game() {
        setBackground(Color.black);
        addKeyListener(new TAdapter());
        setFocusable(true);
        setDoubleBuffered(true);
        temporizador = new Timer();
        temporizador.scheduleAtFixedRate(new ScheduleTask(), 1000, 10);
    }

        public void addNotify() {
            super.addNotify();
            gameInit();
        }
        
    //Funcion Inicio    
    public void gameInit() {
        ball = new Bola();
        personaje = new Personaje();
        personaje.posX = 1000;
        personaje.posY = 400;
        personaje2 = new Personaje();
        personaje2.posX = 100;
        personaje2.posY = 400;

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
        g.fillRect(595, 0, 10, 1024);//Linea Central
        Font font = new Font("Verdana", Font.BOLD, 130);
        FontMetrics metr = this.getFontMetrics(font);
        g.setFont(font);
        //Marcadores
        g.drawString(String.valueOf(personaje.puntos),
                    (Config.WIDTH - metr.stringWidth("1234")) / 2,
                     200);
        g.drawString("0",
                    (Config.WIDTH + metr.stringWidth("12")) / 2,
                     200);
        //Pinta Objetos
        if (ingame) 
        {
            ball.pintar(g);
            personaje.dibujar(g);
            personaje2.dibujar(g);
            
            for (int i = 0; i < bricks.length; i++) 
            {
                if (!bricks[i].isDestroyed())
                {
                    bricks[i].pintar(g); 
                }        
            }
        }
        else 
        {
            //Pinta condicion de Fin y Victoria
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
                personaje.dy = 0;
            }

            if (key == KeyEvent.VK_DOWN){
                personaje.dy = 0;
            }

            if (key == KeyEvent.VK_LEFT) {
                personaje.dx = 0;
            }

            if (key == KeyEvent.VK_RIGHT) {
                personaje.dx = 0;
            }
            
            if (key == KeyEvent.VK_W ){
                personaje2.dy = 0;
            }

            if (key == KeyEvent.VK_S){
                personaje2.dy = 0;
            }
            
            if (key == KeyEvent.VK_A ){
                personaje2.dx = 0;
            }

            if (key == KeyEvent.VK_D){
                personaje2.dx = 0;
            }
        }

        public void keyPressed(KeyEvent e) {
            int key = e.getKeyCode();

            if (key == KeyEvent.VK_UP ){
                personaje.dy = -2;
            }

            if (key == KeyEvent.VK_DOWN){
                personaje.dy = 2;
            }


            if (key == KeyEvent.VK_LEFT) {
                personaje.dx = -2;

            }

            if (key == KeyEvent.VK_RIGHT) {
                personaje.dx = 2;
            }

            if (key == KeyEvent.VK_W ){
                personaje2.dy = -2;
            }

            if (key == KeyEvent.VK_S){
                personaje2.dy = 2;
            }
            
            if (key == KeyEvent.VK_A ){
                personaje2.dx = -2;
            }

            if (key == KeyEvent.VK_D){
                personaje2.dx = 2;
            }
            
        }
    }


    class ScheduleTask extends TimerTask {

        public void run() {

            ball.mover(personaje,personaje2);
            personaje.mover();
            personaje2.mover();
            ball.colisiones(personaje,personaje2, bricks);
            //checkCollision();
            repaint();

        }
    }

    public void stopGame() {
        ingame = false;
        temporizador.cancel();
    }

   
        
        
        
        
}
