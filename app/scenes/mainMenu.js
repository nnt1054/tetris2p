




class mainMenu extends scene {

	setup(args) {
	    // instantiate game objects here and connect their object references
	    // this method is meant to be overridden, it's literally the only thing that needs to change besides like name
	    var background = new backgroundObject(this);
	    var ball = new bouncingBallObject(this);
	    this.gameObjects = [background, ball];
	}

}

try {
	module.exports = mainMenu;
} catch (err) {
	console.log('mainMenu export failed');
}