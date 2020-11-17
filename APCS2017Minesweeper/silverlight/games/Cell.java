package silverlight.games;

import java.awt.Color;
import acm.graphics.GCompound;
import acm.graphics.GRect;

/**
 * An abstract class that models a Minesweeper cell.
 * @author Mark Jones
 *
 */

@SuppressWarnings("serial")
public abstract class Cell extends GCompound {

	public static final int CELL_WIDTH = 50;
	public static final int CELL_HEIGHT = 50;
	
	
	// the instance variables are protected for convenient access by the subclasses
	protected int row, col;
	protected boolean isRevealed, isFlagged;
	protected int mineCount;
	protected GCompound cell;
	/**
	 * Creates a Minesweeper Cell given a row and a column.
	 * The default unrevealed cell is currently a simple blue rectangle. 
	 * @param r
	 * @param c
	 */
	public Cell(int r, int c) {
		super();
		GRect rect = new GRect(CELL_WIDTH, CELL_WIDTH);
		rect.setFillColor(Color.BLUE);
		rect.setFilled(true);
		cell = new GCompound();
		cell.add(rect, 0, 0);
		
		add(cell,0,0);
		row = r;
		col = c;
		isRevealed = false;
		
		isFlagged = false;
	}
	
	/**
	 * Any subclass of Cell must implement this method to change the 
	 * appearance and state of the cell to reflect its being revealed.
	 */
	public abstract void reveal();
	
	/**
	 * Test if the cell has been revealed.
	 * @return   true if the cell has been revealed, false otherwise
	 */
	public boolean isRevealed() {
		return isRevealed;
	}
	
	/**
	 * A cell has a count of the surrounding mines.
	 */
	public void addToMineCount() {
		mineCount++;
	}
	
	/**
	 * Getter for the mine count.
	 * @return
	 */
	public int getMineCount() {
		return mineCount;
	}

	/**
	 * Getter for the cell's row.
	 * @return   the row
	 */
	public int getRow() {
		return row;
	}
	
	/**
	 * Getter for the cell's column
	 * @return   the column
	 */
	public int getCol() {
		return col;
	}
	
	/**
	 * A printable representation of a Cell.
	 */
	public String toString() {
		return String.format("[%d,%d]", row, col);
	}
	
	/**
	 * Is the cell flagged?
	 */
	public boolean isFlagged(){
		return isFlagged;
	}
	
}
