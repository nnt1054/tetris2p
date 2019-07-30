

class spriteScene extends scene {

	setup(args) {
	    // instantiate game objects
	    var background = new backgroundObject(this);
	    var ground = new blockObject(this, this.canvas.width*2, 32, -this.canvas.width, this.canvas.height - 32);
	    var floating = new blockObject(this, this.canvas.width/2, 32, this.canvas.width/2, this.canvas.height/2);
	    var player = new playerObject(this);

	    // create layers
	    this.layerOrder = ['layer1', 'layer2', 'layer3'];
	    this.layers = {
	    	'layer1': [background, floating],
	    	'layer2': [ground],
	    	'layer3': [player],
	    }

	    // create collision tag lists
	    this.staticObjects = [ground.AABB, floating.AABB];


	    // add initial game objects
	    this.gameObjects = [background, player];
	}

}

try {
	module.exports = spriteScene;
} catch (err) {
	console.log('testScene export failed');
}