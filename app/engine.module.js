



class engine {

	constructor(a=1, b=2, sceneList={}, initScene=null) {
		this.a = a;
		this.b = b;
		this.sceneList = sceneList;
		this.currentScene = initScene;
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
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	testMethod() {
		console.log('test method');
	}

	update(delta) {
	    // call udpate function of each relevent object
	    console.log(delta);
	}

	draw(interpolationPercentage) {
    	// call draw function for each relevant object
    	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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