


class gameObject {

	constructor(scene) {
  	  this.scene = scene;
  
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);
	}

	update(delta) {
	    console.log('update should be overridden');
	}

	draw(interpolationPercentage) {
  	  console.log('update should be overridden');
	}

}

try {
  	module.exports = gameObject;
} catch (err) {
	  console.log('gameObject export failed');
}