


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
	
	createClickableArea(width, height, x=0, y=0) {
	    return {
	      'min': {'x': x, 'y': y},
	      'max': {'x': x+width, 'y': y+height},
	      'width': width,
	      'height': height,
	    }
	}

}

try {
  	module.exports = gameObject;
} catch (err) {
	  console.log('gameObject export failed');
}