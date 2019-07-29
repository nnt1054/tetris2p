




class testScene extends scene {

	setup(args) {
	    // instantiate game objects here and connect their object references
	    // this method is meant to be overridden, it's literally the only thing that needs to change besides like name
	    var background = new backgroundObject(this);
	    var rect = new draggableSquareObject(this);
	    var switchSceneButton = new switchSceneButtonObject(this, 'mainMenu', 'blue');
	    var ball = new bouncingBallObject(this, 'blue');
	    this.gameObjects = [background, ball, switchSceneButton];

	    this.layerOrder = ['layer1', 'layer2', 'layer3'];
	    this.layers = {
	    	'layer1': [background],
	    	'layer2': [ball, switchSceneButton],
	    	'layer3': [],
	    }

	    this.draggableSquares = [];
	}

}

try {
	module.exports = testScene;
} catch (err) {
	console.log('testScene export failed');
}