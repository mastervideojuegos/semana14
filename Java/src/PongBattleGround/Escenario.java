package PongBattleGround;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Point;
import java.awt.Toolkit;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.util.Timer;
import java.util.TimerTask;
import javax.swing.JPanel;

public class Escenario extends JPanel implements Config {

    
    Timer timer;
    String message = "Game Over";
    Pelota ball;
    Paleta paddle, paddle2;
    Recogible bricks[];

    boolean ingame = true;
    int timerId;


    public Escenario() {

        addKeyListener(new TAdapter());
        setFocusable(true);

        bricks = new Recogible[11190];
        setDoubleBuffered(true);
        timer = new Timer();
        timer.scheduleAtFixedRate(new ScheduleTask(), 1000, 10);
    }

        public void addNotify() {
            super.addNotify();
            gameInit();
        }

    public void gameInit() {

        ball = new Pelota();
        paddle = new Paleta();
        paddle2 = new Paleta();


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


    public void paint(Graphics g) {
        super.paint(g);

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

            Font font = new Font("Verdana", Font.BOLD, 18);
            FontMetrics metr = this.getFontMetrics(font);

            g.setColor(Color.BLACK);
            g.setFont(font);
            g.drawString(message,
                         (Config.WIDTH - metr.stringWidth(message)) / 2,
                         Config.WIDTH / 2);
        }


        Toolkit.getDefaultToolkit().sync();
        g.dispose();
    }

    private class TAdapter extends KeyAdapter {

        public void keyReleased(KeyEvent e) {
            paddle.keyReleased(e);
        }

        public void keyPressed(KeyEvent e) {
            paddle.keyPressed(e);
        }
    }


    class ScheduleTask extends TimerTask {

        public void run() {

            ball.move();
            paddle.move();
            checkCollision();
            repaint();

        }
    }

    public void stopGame() {
        ingame = false;
        timer.cancel();
    }

//Colisiones
    public void checkCollision() {
        
        //Colision ABAJO
        if (ball.getRect().getMaxY() > Config.BOTTOM) {
            //stopGame();
            ball.setYDir(-1 * ball.getYDir());
        }
        
        //Colision RECOGIBLES CONDICION DE GANAR
        for (int i = 0, j = 0; i < 90; i++) {
            if (bricks[i].isDestroyed()) {
                j++;
            }
            if (j == 90) {
                message = "Ganaste Webón!";
                stopGame();
            }
        }
        
        //COLISION RAQUETA PERO EN X HAY QUE CAMBIARLO A Y
        if ((ball.getRect()).intersects(paddle.getRect())) {

            int paddleLPos = (int)paddle.getRect().getMaxY();
            int ballLPos = (int)ball.getRect().getMaxY();

            int first = paddleLPos + 8;
            int second = paddleLPos + 16;
            int third = paddleLPos + 24;
            int fourth = paddleLPos + 32;

            if (ballLPos < first) {
                ball.setXDir(-1);
                ball.setYDir(-1);
            }

            if (ballLPos >= first && ballLPos < second) {
                ball.setXDir(-1);
                ball.setYDir(1 * ball.getYDir());
            }

            if (ballLPos >= second && ballLPos < third) {
                ball.setXDir(-1);
                ball.setYDir(-1);
            }

            if (ballLPos >= third && ballLPos < fourth) {
                ball.setXDir(-1);
                ball.setYDir(1 * ball.getYDir());
            }

            if (ballLPos > fourth) {
                ball.setXDir(-1);
                ball.setYDir(1);
            }
        }
        
        if ((ball.getRect()).intersects(paddle2.getRect())) {

            int paddleLPos = (int)paddle2.getRect().getMaxY();
            int ballLPos = (int)ball.getRect().getMaxY();

            int first = paddleLPos + 8;
            int second = paddleLPos + 16;
            int third = paddleLPos + 24;
            int fourth = paddleLPos + 32;

            if (ballLPos < first) {
                ball.setXDir(-1);
                ball.setYDir(-1);
            }

            if (ballLPos >= first && ballLPos < second) {
                ball.setXDir(1);
                ball.setYDir(1 * ball.getYDir());
            }

            if (ballLPos >= second && ballLPos < third) {
                ball.setXDir(1);
                ball.setYDir(-1);
            }

            if (ballLPos >= third && ballLPos < fourth) {
                ball.setXDir(1);
                ball.setYDir(1 * ball.getYDir());
            }

            if (ballLPos > fourth) {
                ball.setXDir(1);
                ball.setYDir(1);
            }
        }

        //COLISION RECOGIBLES
        for (int i = 0; i < 90; i++) {
            if ((ball.getRect()).intersects(bricks[i].getRect())) {

                int ballLeft = (int)ball.getRect().getMinX();
                int ballHeight = (int)ball.getRect().getHeight();
                int ballWidth = (int)ball.getRect().getWidth();
                int ballTop = (int)ball.getRect().getMinY();

                Point pointRight =
                    new Point(ballLeft + ballWidth + 1, ballTop);
                Point pointLeft = new Point(ballLeft - 1, ballTop);
                Point pointTop = new Point(ballLeft, ballTop - 1);
                Point pointBottom =
                    new Point(ballLeft, ballTop + ballHeight + 1);

                if (!bricks[i].isDestroyed()) {
                    if (bricks[i].getRect().contains(pointRight)) {
                        ball.setXDir(-1);
                    }

                    else if (bricks[i].getRect().contains(pointLeft)) {
                        ball.setXDir(1);
                    }

                    if (bricks[i].getRect().contains(pointTop)) {
                        ball.setYDir(1);
                    }

                    else if (bricks[i].getRect().contains(pointBottom)) {
                        ball.setYDir(-1);
                    }

                    bricks[i].setDestroyed(true);
                }
            }
        }
    }
}
