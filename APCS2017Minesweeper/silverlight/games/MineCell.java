package silverlight.games;

import acm.graphics.GImage;

public class MineCell extends Cell{

	private static final String IMAGE_LOCATION = "images/";
	private final GImage MINE_IMG = new GImage(IMAGE_LOCATION + "Mine.JPG");
			
			
	public MineCell(double size, int r, int c) {
		super(r, c);
	}

	/**
	 * When a minecell is revealed, add the mine picture
	 */
	@Override
	public void reveal() {
		add(MINE_IMG, 0,0);
		MINE_IMG.setVisible(true);
		isRevealed = true;
	}

}
