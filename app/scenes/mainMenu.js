




class mainMenu extends scene {

	setup(args) {
	    // instantiate game objects here and connect their object references
	    // this method is meant to be overridden, it's literally the only thing that needs to change besides like name
	    var background = new backgroundObject(this);
	    var ball = new bouncingBallObject(this);
	    var button = new uiButtonObject(this);
	    var rect = new draggableSquareObject(this, 0, 0, name='rect1');
	   	var rect2 = new draggableSquareObject(this, 50, 50, name='rect2');
	    var switchSceneButton = new switchSceneButtonObject(this, 'testScene', 'black');
	    this.gameObjects = [background, ball, rect2, rect, switchSceneButton];
	}

}

try {
	module.exports = mainMenu;
} catch (err) {
	console.log('mainMenu export failed');
}