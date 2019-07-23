



class engine {

	constructor(sceneList={}, initScene=null, args={}) {
		this.sceneList = sceneList;
		
    this.currentScene = new this.sceneList[initScene](this, args);

		this.createCanvas();

		this.update = this.update.bind(this);
		this.draw = this.draw.bind(this);
		this.begin = this.begin.bind(this);
		this.end = this.end.bind(this);
	}

	createCanvas() {
		// create Canvas and Initial Game Objects 
		this.canvas = document.getElementById('canvas'),
		this.context = this.canvas.getContext('2d'),
		this.fpsCounter = document.getElementById('fpscounter'),
		this.fpsValue = document.getElementById('fpsvalue');


		// this.canvas.width = window.innerWidth;
		// this.canvas.height = window.innerHeight;
		this.canvas.width = 800;
		this.canvas.height = 400;

	}

	switchScene(scene, args) {
	 // this.currentScene = new this.sceneList[scene](args)
	}

	update(delta) {
	    if (this.currentScene) {
	        this.currentScene.update(delta);
	    }
	}

	draw(interpolationPercentage) {
    	if (this.currentScene) {
          this.context.clearRect(0, 0, canvas.width, canvas.height);
    	    this.currentScene.draw(interpolationPercentage);
    	}
	}

	begin() {
		// check and process input
	}

	end(fps, panic) {
	    // calculate fps
	    this.fpsCounter.textContent = Math.round(fps) + ' FPS';
	    if (panic) {
	        var discardedTime = Math.round(MainLoop.resetFrameDelta());
	        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
	    }
	}

	start() {
		MainLoop.setUpdate(this.update).setDraw(this.draw).setBegin(this.begin).setEnd(this.end).start();
	}

}

try {
	module.exports = engine;
} catch (err) {
	console.log('engine export failed');
}