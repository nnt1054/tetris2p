



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
		this.keyUpdateCounter = 0;
		// {keyCode: update counter}
		// this.keyUpdates = {};

		this.canvas.addEventListener('click', function(event) {
			console.log('single', event.x - event.target.offsetLeft, event.y - event.target.offsetTop);
		}, false);
		this.canvas.addEventListener('dblclick', function(event) {
			console.log('double', event.x - event.target.offsetLeft, event.y - event.target.offsetTop);
		}, false);

		// keep track of keyboard presses
		document.addEventListener("keydown", function(event) {
			if (!(event.keyCode in window.engine.keyState)) {
				window.engine.keyState[event.keyCode] = 0;
			}
			window.engine.keyUpdateCounter = 0;
		});
		document.addEventListener("keyup", function(event) {
			console.log(String.fromCharCode(event.keyCode) + ': ' + Math.round(window.engine.keyState[event.keyCode]) + 'ms');
			delete window.engine.keyState[event.keyCode];
		});
	}

	switchScene(scene, args) {
	 // this.currentScene = new this.sceneList[scene](args)
	}

	update(delta) {

		// 1. Check for Input
		var idle = true;
		for (var key in this.keyState) {
			  this.keyState[key] += delta;
    	  idle = false;
		}
	    if (!idle) {
	    	  this.keyUpdateCounter += 1;
	    }
		  if (this.keyUpdateCounter > 60) {
		      console.log('keyhold interrupted');
			    this.keyState = {};
		  }


		// 2. Update Game Objects
	    if (this.currentScene) {
	        this.currentScene.update(delta);
    	}

    	// 3. Check Physics Collisions
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