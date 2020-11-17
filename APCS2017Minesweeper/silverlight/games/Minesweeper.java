package silverlight.games;
import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ComponentAdapter;
import java.awt.event.ComponentEvent;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.SwingUtilities;


import acm.graphics.GObject;
import acm.graphics.GScalable;
import acm.program.GraphicsProgram;
import acm.program.Program;
import acm.util.*;

/**
 * The classic Minesweeper game, (c) Microsoft.
 * @author Mark Jones
 *
 */
@SuppressWarnings("serial")
public class Minesweeper extends GraphicsProgram {
	private static final Font FONT = new Font("Helvetica", Font.BOLD, 20);
	private static final String SOUND_LOCATION = "sounds/";
	
	JLabel title, timeLabel;
	private JComboBox<String> diffChooser;
	
	static int time;
	
	public static final SoundClip MINE_SOUND = new SoundClip(SOUND_LOCATION + "bomb.wav");
	
	Thread countDown;
	
	/**
	 * Runs Minesweeper as an application.
	 * @param args	none are expected
	 */
	public static void main(String[] args) {
		(new Minesweeper()).start(args);
	}
	
	/**
	 * Create a Minesweeper game.
	 */
	public Minesweeper () {}
	
	/**
	 * Initializes the board, which is also the GUI.
	 */
	public void init() {
		// complete the code
		createGUI();
		newGame();
	}
	
	public void createGUI(){
		setBackground(Color.LIGHT_GRAY);
		getGCanvas().setFocusable(true);
		getGCanvas().requestFocusInWindow();
		
		title = new JLabel();
		title.setFont(FONT);
		add(title, NORTH);
		timeLabel = new JLabel();
		timeLabel.setFont(FONT);
		add(timeLabel, Program.SOUTH);
		
		// button for starting a new game
		add(new JButton("New Game"), Program.SOUTH);	
		add(new JLabel("     "), Program.SOUTH);
		
		//difficulty chooser
		diffChooser = new JComboBox<String>();
		diffChooser.addItem("Easy");
		diffChooser.addItem("Intermediate");
		diffChooser.addItem("Hard");
		
		diffChooser.setEditable(false);
		diffChooser.setSelectedItem("Easy");
		add(new JLabel("Difficulty"), SOUTH);
		add(diffChooser, SOUTH);
		
	}
	/**
	 * adds the timer
	 * @param t
	 */
	public void addTimer(int t){
		time = t;
		countDown = new Thread(){
			public void run(){
				while(time >= 0){
					timeLabel.setText(time + "");
						try {
							Thread.sleep(1000);
						} catch (InterruptedException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					time -= 1;
					if(time <= 0) gameOver();
				}
			}
		};
		countDown.start();
	}
	/**
	 * Game over message
	 */
	@SuppressWarnings("deprecation")
	public void gameOver(){
		MINE_SOUND.setVolume(2);
		MINE_SOUND.play();
		title.setText("Game over!");
		for(int i = 0; i < Board.rows; i++){
			for(int j = 0; j < Board.columns; j++){
				if(board.cells[i][j] instanceof MineCell && !(board.cells[i][j].isRevealed())) board.cells[i][j].reveal();
			}
		}
		if(time > 0) countDown.stop();
		
		board.removeMouseListener(m);
	}
		
	@SuppressWarnings("deprecation")
	public void win(){
		title.setText("YAY YOU WIN WOOHOOOO!!!!!!!!!!!!");
		countDown.stop();
		board.removeMouseListener(m);
	}
	
	/**
	 * Reveal a cell on a mouseclick.
	 */
	MouseListener m = new MouseListener(){
		public void mouseClicked(MouseEvent e) {
			Cell cell = (Cell) ((Board) getElementAt(e.getX(),e.getY())).getElementAt(e.getX(),e.getY());
		
			if(SwingUtilities.isRightMouseButton(e) && !(cell.isFlagged()) && !(cell.isRevealed())) board.setFlag(cell); 
		
			else if(SwingUtilities.isRightMouseButton(e) && cell.isFlagged() && !(cell.isRevealed())) board.removeFlag(cell);
			
			else if(SwingUtilities.isLeftMouseButton(e)){
				board.revealCells(cell);
			}
			
		}
		public void mouseEntered(MouseEvent e) {}
		public void mouseExited(MouseEvent e) {}
		public void mousePressed(MouseEvent e) {}
		public void mouseReleased(MouseEvent e) {}
	};
	
	/** 
	 * Handler for button actions.
	 */

	@SuppressWarnings("deprecation")
	public void actionPerformed(ActionEvent e) {
		// complete the code
		if(e.getActionCommand().equals("New Game")){
			removeAll();
			countDown.stop();
			newGame();
			return;
		}
	}

	private void newGame(){title.setText("Minesweeper");
		board = new Board(this, setDiff());
		add(board);
		
		if(Board.diff == Difficulty.HARD)
			setSize(1520,944);
		else if(Board.diff == Difficulty.INTERMEDIATE)
			setSize(824,944);
		else if(Board.diff == Difficulty.EASY)
			setSize(470,600);
		
		if(Board.diff == Difficulty.EASY) addTimer(120);
		if(Board.diff == Difficulty.INTERMEDIATE) addTimer(240);
		if(Board.diff == Difficulty.HARD) addTimer(300);
		
		catchResizeEvents();
		addActionListeners();
		board.addMouseListener(m);
		addKeyListeners();
	}

	private Difficulty setDiff(){
		String diff = (String)diffChooser.getSelectedItem();
		if(diff.equals("Easy")) return Difficulty.EASY;
		if(diff.equals("Intermediate")) return Difficulty.INTERMEDIATE;
		if(diff.equals("Hard")) return Difficulty.HARD;
		
		return null;
	}
	
	// other declarations go here
	private Board board;
	private double wid, ht;  // width and height of the canvas (needed for resizing)
	private void catchResizeEvents() {
		wid = getWidth();
		ht = getHeight();

		addComponentListener(new ComponentAdapter() {
			public void componentResized(ComponentEvent e) {
				double scaleX = getWidth() / wid,  scaleY = getHeight() / ht;
				for (int i = 0; i < getElementCount(); i++) {
					Object obj = getElement(i);
					if (obj instanceof GObject) {
						if (obj instanceof GScalable) {
							((GScalable) obj).scale(scaleX, scaleY);
						}
						((GObject) obj).setLocation(((GObject) obj).getX()*scaleX, ((GObject) obj).getY()*scaleY);
					}
				}
				wid = getWidth(); ht = getHeight();
			}
		}); 		
	}
}

