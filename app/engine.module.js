



class engine {

	constructor(sceneList={}, initScene=null, args={}) {

		window.engine = this; //might want to change this later

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

		// {keyCode: duration held down}
		this.keyState = {};

		this.canvas.addEventListener('click', function(event) {
			console.log('single');
		}, false);
		this.canvas.addEventListener('dblclick', function(event) {
			console.log('double');
		}, false);

		// keep track of keyboard presses
		document.addEventListener("keydown", function(evt) {
			if (!(evt.keyCode in window.engine.keyState)) {
				window.engine.keyState[evt.keyCode] = 0;
			} else {
				console.log('key being held down');
			}
		});
		document.addEventListener("keyup", function(evt) {
			console.log(window.engine.keyState[evt.keyCode])
			delete window.engine.keyState[evt.keyCode];
		});
	}

	switchScene(scene, args) {
	 // this.currentScene = new this.sceneList[scene](args)
	}

	update(delta) {
		// update timer for how long keys have been held down
		for (var key in this.keyState) {
			this.keyState[key] += delta;
		}
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