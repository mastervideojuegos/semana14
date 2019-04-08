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
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Game extends JPanel implements Config {
//----------- Declaracion de variables de la clase ---------//
    Timer temporizador;
    String message = "Game Over";
    boolean ingame = true;
    int timerId;
    
    // Datos Actuales //
    Poderes poderes;    
    Personaje[] jugadores = new Personaje[4]; //Array para los 4 jugadores
    Bola[] pelotas = new Bola[4]; //Array para las 4 pelotas
    Personaje personajeActual = jugadores[1];
    Bola bolaActual = pelotas[0];
    
    //Mapa mapaActual   = new Mapa[4];
    boolean mapa1 = false;
    boolean mapa2 = true;
    boolean movimientoJugador = false;
    boolean banBD = true;

//----------- Funcion Condiciones Iniciales ---------//
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

//----------- Funcion Inicio ---------//
    public void gameInit() {
        
        poderes = new Poderes();
        crearJugadores();
        crearBolas();
    }
    
//----------- Funcion Pintar ---------//
    public void paint(Graphics g) {
        super.paint(g);
        if (ingame) 
        {
            g.fillRect(595, 0, 10, 1024);//Linea Central
            Font font = new Font("Verdana", Font.BOLD, 130);
            FontMetrics metr = this.getFontMetrics(font);
            g.setFont(font);
            //Marcadores
            g.drawString(String.valueOf(jugadores[1].puntos),
                        (Config.WIDTH - metr.stringWidth("1234")) / 2,
                         200);
            g.drawString("0",
                        (Config.WIDTH + metr.stringWidth("12")) / 2,
                         200);
            //Pinta Objetos
    
            dibujarPersonajes(g);
            dibujarBolas(g);
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
    


//----------- Funcion Ejecutar Bucle Principal con Temporizador ---------//
    class ScheduleTask extends TimerTask {
        public void run() {
             if (ingame) 
            {
                calcularMovBola(jugadores);
                moverPersonaje();
                //System.out.println("Run");
            }
            repaint();
        }
    }

//----------- Funcion Movimiento de la Bola ---------//
    public void calcularMovBola(Personaje[] jugadores)
    {
        int i;
        for(i = 0;i < pelotas.length; i++)
        {
          pelotas[i].moverse(jugadores);
          //System.out.println("Mover Bolas");
        }
    }
//----------- Funcion Pintar Bolas ---------//
    public void dibujarBolas(Graphics g)
    {
        int i;
        for(i = 0;i < pelotas.length; i++)
        {
            pelotas[i].dibujar(g);
            //System.out.println("Dibujar Bolas");
        }
    }
//----------- Funcion Crear Bolas ---------//
    public void crearBolas()
    {
        pelotas[0]=new Bola();
        pelotas[1]=new Bola();
        pelotas[2]=new Bola();
        pelotas[3]=new Bola();
    }

//----------- Funcion Mover Jugadores ---------//
    public void moverPersonaje()
    {//aca muevo el personaje principal =0
        int j;
	for(j = 0; j < jugadores.length; j++)
        {
            //if(Jugadores[j].principal==0&& movimientoJugador==true){//entendi que esta es para el movimiento del personaje que uno controla
            jugadores[j].moverse();
            if(j > 0)
            {
                if(jugadores[j].posY - jugadores[j].ladoAlto <=0 || jugadores[j].posY + jugadores[j].ladoAlto >= 1400)
                {
                    jugadores[j].direccion*=-1;
                }
		jugadores[j].posY += jugadores[j].vel*jugadores[j].direccion;
		jugadores[j].colisionPared();
            }
	}
        //System.out.println("Mover Jugador");
    }

//----------- Dibujar Jugadores ---------//
    public void dibujarPersonajes(Graphics g)
    {//aca dibujo todos los personajes
	int p;
        for(p = 0; p < jugadores.length; p++)
        {
	    jugadores[p].dibujar(g);
            //System.out.println(jugadores[p].posX);
	}
    }
    
//----------- Crear Jugadores ---------//
    public void crearJugadores()
    {
        
	jugadores[0]=new Personaje("yo",1,0,0,"0","0");
	jugadores[1]=new Personaje("otro",1,1,1,"0","0");
	jugadores[2]=new Personaje("otro2",2,1,1,"0","0");
	jugadores[3]=new Personaje("otro3",2,1,1,"0","0");
	jugadores[1].posY=300;
	jugadores[2].posX=50;
	jugadores[2].posY=300;
	jugadores[3].posX=50;
	jugadores[1].direccion=1;
	jugadores[2].direccion=1;
	jugadores[3].direccion=1;
        //System.out.println("Crear Jugadores");
}

//----------- Funcion Fin Juego ---------//
    public void stopGame() {
        ingame = false;
        temporizador.cancel();
    }     
    
//----------- Funcion Control de Teclas ---------//
    private class TAdapter extends KeyAdapter {

        public void keyReleased(KeyEvent e) {
             int key = e.getKeyCode();

            if (key == KeyEvent.VK_UP){
                jugadores[0].direccion = 0;
                System.out.println("Pulsa");
            }

            if (key == KeyEvent.VK_DOWN){
                jugadores[0].direccion = 0;
                System.out.println("Pulsa");
            }

            if (key == KeyEvent.VK_LEFT) {
                jugadores[0].dx = 0;
            }

            if (key == KeyEvent.VK_RIGHT) {
                jugadores[0].dx = 0;
            }
            
            if (key == KeyEvent.VK_W ){
                jugadores[1].dy = 0;
            }

            if (key == KeyEvent.VK_S){
                jugadores[1].dy = 0;
            }
            
            if (key == KeyEvent.VK_A ){
                jugadores[1].dx = 0;
            }

            if (key == KeyEvent.VK_D){
                jugadores[1].dx = 0;
            }
        }

        public void keyPressed(KeyEvent e) {
            int key = e.getKeyCode();

            if (key == KeyEvent.VK_UP ){
                jugadores[0].direccion = -1;
                System.out.println("Pulsa");
            }

            if (key == KeyEvent.VK_DOWN){
                jugadores[0].direccion = 1;
                System.out.println("Pulsa");
            }


            if (key == KeyEvent.VK_LEFT) {
                jugadores[0].dx = -2;

            }

            if (key == KeyEvent.VK_RIGHT) {
                jugadores[0].dx = 2;
            }

            if (key == KeyEvent.VK_W ){
                jugadores[1].direccion = -1;
            }

            if (key == KeyEvent.VK_S){
                jugadores[1].direccion = 1;
            }
            
            if (key == KeyEvent.VK_A ){
                jugadores[1].dx = -2;
            }

            if (key == KeyEvent.VK_D){
                jugadores[1].dx = 2;
            }
            
        }
    }
        
        
}
