package silverlight.games;

import java.awt.Color;
import java.awt.Font;

import acm.graphics.GCompound;
import acm.graphics.GLabel;
import acm.graphics.GRect;

public class EmptyCell extends Cell {

	private GRect sqr;
	private GCompound wholeCell;
	private String mineAmount;
	private GLabel mineLabel;
	
	
	public EmptyCell(double size, int r, int c){
		super(r,c);
	}

	/**
	 * If the revealed cell is empty, reveal the number of surrounding mines
	 */
	@Override
	public void reveal() {
		isRevealed = true;
		sqr = new GRect(0, 0, CELL_WIDTH,CELL_HEIGHT);
		wholeCell = new GCompound();
		wholeCell.add(sqr,0,0);
		sqr.setFillColor(Color.LIGHT_GRAY);
		sqr.setFilled(true);
		add(wholeCell);
        mineAmount = getMineCount()+"";
        if(getMineCount() > 0){
        	mineLabel = new GLabel(mineAmount);
        	mineLabel.setFont(new Font("Comic Sans", 25, 18));
        	add(mineLabel, getHeight()/2 - mineLabel.getWidth()/2, getWidth()/2 + mineLabel.getHeight()/4);
        }
       
	}
	
	
}
