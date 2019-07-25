


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

	createAABB(width, height, x=0, y=0) {
	    return {
	      'min': {'x': x, 'y': y},
	      'max': {'x': x+width, 'y': y+height},
	      'width': width,
	      'height': height,
	    }
	}

	allowClickDetection(aabb) {
		this.isClicked = false;

		if ('mousedown' in this.scene.engine.mouseEvents) {
	       	if (this.pointInAABB(this.scene.engine.mouseEvents['mousedown'], aabb)) {
	           this.mousedown = true;
	       	}
		}

		if ('mouseup' in this.scene.engine.mouseEvents) {
	       	if (this.pointInAABB(this.scene.engine.mouseEvents['mouseup'], aabb)) {
	       		if (this.mousedown) {
	       			this.isClicked = true;
	       		}
	       	}
        	this.mousedown = false;
		}

	}

	pointInAABB(point, aabb) {
        return ((point.x > aabb.min.x) && (point.x < aabb.max.x)) && ((point.y > aabb.min.y) && (point.y < aabb.max.y));
	}

}

try {
  	module.exports = gameObject;
} catch (err) {
	  console.log('gameObject export failed');
}