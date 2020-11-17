package silverlight.games;

import java.util.Random;

import acm.graphics.GCompound;
import acm.graphics.GImage;


public class Board extends GCompound{

	public Cell[][] cells;
	static int rows;
	static int columns;
	int randRow, randColumn,prevRow, prevCol;
	int correctPlacement = 0;
	int numMines, mineAmount, numFlags, revealedCells;
	public static Difficulty diff;
	Random gen = new Random();
	Minesweeper ms;
	private static final String IMAGE_LOCATION = "images/";
	public GImage FLAG_IMG;
	
	//given a difficulty level, do this
	public Board(Minesweeper ms, Difficulty level){
		diff = level;
		this.ms = ms;
		switch(level){
		case EASY:
			numMines = 10;
			setBoard(9,9);	
			break;
		case INTERMEDIATE:
			numMines = 40;
			setBoard(16,16);
			break;
		case HARD:
			numMines = 99;
			setBoard(16,30);
			break;
		}
		mineAmount = numMines;
		setMineCells();
		checkCells();
	}
	
	//sets the board based on the grid dimensions
	public void setBoard(int r,int c){
		
		rows = r;
		columns = c; 
		cells = new Cell[r][c];
		for(int i = 0; i < rows; i++){
			for(int j = 0; j < columns; j++){
				cells[i][j] = new EmptyCell(50,i,j);
				add(cells[i][j], j*cells[0][0].getWidth(),i*cells[0][0].getHeight());
			}
		}
	}
	
	//Change random empty cells to mine cells
	public void setMineCells(){
		randRow = gen.nextInt(rows - 1);
		randColumn = gen.nextInt(columns - 1);
		if(numMines == 0){
			for(int r = 0; r < columns; r++){
				for(int c = 0; c < rows; c++){
					add(cells[c][r], r*cells[0][0].getWidth(),c*cells[0][0].getHeight());
				}	
			}
			return;
		}
		
		while(true){
			randRow = gen.nextInt(rows - 1);
			randColumn = gen.nextInt(columns - 1);
			if(numMines > 0 && randRow != prevRow && randColumn != prevCol && !(cells[randRow][randColumn] instanceof MineCell)){
				cells[randRow][randColumn] = new MineCell(50, 0, 0);
				prevRow = randRow;
				prevCol = randColumn;
				numMines--;
				setMineCells();
				break;
			}
		}
	}
	
	//reveal minecells if a minecell is hit, and recursively reveal empty cells and cells with no surrounding mines
	public void revealCells(Cell cell){
		if(cell.isRevealed()) return;
		
		cell.reveal();
		
		if(cell instanceof MineCell){
			//game over
			ms.gameOver();
			return;
		}
		
		if(cell.getMineCount() == 0){
			int row = cell.getRow();
			int column = cell.getCol();
			if(row + 1 < rows && column + 1 < columns) revealCells(cells[row+1][column+1]); //SE
			if(row - 1 >= 0 && column - 1 >= 0)        revealCells(cells[row-1][column-1]); //NW
			if(row - 1 >= 0 && column + 1 < columns)   revealCells(cells[row-1][column+1]); //NE
			if(row + 1 < rows && column - 1 >= 0)      revealCells(cells[row+1][column-1]); //SW
			if(row + 1 < rows)                         revealCells(cells[row+1][column]); //S
			if(column + 1 < columns)                   revealCells(cells[row][column+1]); //E
			if(row - 1 >= 0) 						   revealCells(cells[row-1][column]); //N
			if(column - 1 >= 0) 					   revealCells(cells[row][column-1]); //W
			
		}
	}

	/**
	 * Check a cell's surroundings for mines
	 */
	public void checkCells(){
		for(int r = 0; r < rows; r++){
			for(int c = 0; c < columns; c++){
				if(!(cells[r][c] instanceof MineCell)){
					for (int p = r - 1; p <= r + 1; p++){
	                    for (int q = c - 1; q <= c + 1; q++){
	                        if (0 <= p && p < rows && 0 <= q && q < columns){
	                            if (cells[p][q] instanceof MineCell){ 
	                                cells[r][c].addToMineCount();
	                            }
	                        }
	                    }
	                }
				}
			}
		}
	}
	
	
	/**
	 * Mark a suspected bomb with a flag
	 */
	public void setFlag(Cell c){
		if(c instanceof MineCell && !(c.isFlagged())){
			correctPlacement++;
			if(correctPlacement == mineAmount) ms.win();
		}
		FLAG_IMG = new GImage(IMAGE_LOCATION + "flag.png");
		FLAG_IMG.setSize(c.getSize());
		c.add(FLAG_IMG);
		
		c.isFlagged = true;
	}
	
	/**
	 * Removes a flag from a cell that already has one
	 */
	public void removeFlag(Cell f){
		if(f instanceof MineCell) correctPlacement--;
		f.remove(FLAG_IMG);
		f.isFlagged = false;
	}
	
}
