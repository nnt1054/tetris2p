class scene {

	constructor(engine, args={}) {

    this.engine = engine;
    this.gameObjects = [];
    this.setup(args);
    
		// this.update = this.update.bind(this);
		// this.draw = this.draw.bind(this);
	}


	setup(args) {
	 // instantiate game objects here and connect their object references
	 // this method is meant to be overridden, it's literally the only thing that needs to change besides like name
	}

  switchScene(scene, args) {
    this.engine.switchScene(scene, args);
  }

	update(delta) {
      for (var i = 0; i < this.gameObjects.length; i++) { 
          this.gameObjects[i].update(delta);
      }
	}

	draw(interpolationPercentage) {
    	// call draw function for each relevant object
      // 	this.context.fillStyle = 'lightgreen';
      // 	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.gameObjects.length; i++) {
          this.gameObjects[i].draw(interpolationPercentage);
      }
	}


}

try {
	module.exports = scene;
} catch (err) {
	console.log('scene export failed');
}