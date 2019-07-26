




class mainMenu extends scene {

	setup(args) {
	    // instantiate game objects here and connect their object references
	    // this method is meant to be overridden, it's literally the only thing that needs to change besides like name
	    var background = new backgroundObject(this);
	    var ball = new bouncingBallObject(this);
	    var ball2 = new bouncingBallObject(this);
	    var button = new uiButtonObject(this);
	    var rect = new draggableSquareObject(this, 0, 0, name='rect1');
	   	var rect2 = new draggableSquareObject(this, 50, 50, name='rect2');
	    var switchSceneButton = new switchSceneButtonObject(this, 'testScene', 'black');


        ball.posAABB.setAnchor(rect.clickAABB);
        ball2.posAABB.setAnchor(rect2.clickAABB);
        ball2.target = rect2.clickAABB;
	    this.gameObjects = [background, ball, ball2, rect2, rect, switchSceneButton];
	}

}

try {
	module.exports = mainMenu;
} catch (err) {
	console.log('mainMenu export failed');
}