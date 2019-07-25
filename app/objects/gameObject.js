


class gameObject {

	constructor(scene) {
    	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);

  		this._isClicked = false;
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
		this._isClicked = false;
		this._isClickTarget = (this.scene.clickTarget === this);

		if ('mousedown' in this.scene.engine.mouseEvents) {
	       	if (this.pointInAABB(this.scene.engine.mouseEvents['mousedown'], aabb)) {
	        	this.scene.clickTarget = this;
	        	this.clickOffsetLeft = this.getMousePos().x - this.clickAABB.min.x;
	        	this.clickOffsetTop = this.getMousePos().y - this.clickAABB.min.y;
	       	}
		}

		if ('mouseup' in this.scene.engine.mouseEvents) {
       		if (this.scene.clickTarget === this) {
		       	if (this.pointInAABB(this.scene.engine.mouseEvents['mouseup'], aabb)) {
	       			this._isClicked = true;
		       	}
	   			this.scene.clickTarget = null;
       		}
		}

	}

	isClicked() {
		return this._isClicked;
	}

	isClickTarget() {
		return this._isClickTarget;
	}

	getMousePos() {
		return this.scene.engine.mousePos;
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