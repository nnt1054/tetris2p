


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
        return new AABB(width, height, x, y);
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


class AABB {
    
    constructor(width, height, x=0, y=0) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.lastPos = {'x': x, 'y': y};

        this.anchor = null;
        this.anchorPos = {'x': 0, 'y': 0}
        this.anchorees = [];

        this.foundCollisions = [];
    }

    get min() {
        return {
            'x': this.x,
            'y': this.y,
        }
    }

    get max() {
        return {
            'x': this.x + this.width,
            'y': this.y + this.height,
        }
    }

    get canvasPos() {
        return {
            'x': this.x + this.anchorPos.x,
            'y': this.y + this.anchorPos.y,
        }
    }

    setPos(x=null, y=null) {
        if (x) { this.lastPos.x = this.x; this.x = x; }
        if (y) { this.lastPos.y = this.y; this.y = y; }
        this.updateAnchorees();
    }

    // Called once at the beginning;
    setAnchor(aabb) {
        this.anchor = aabb;
        this.anchorPos = aabb.canvasPos;
        aabb.anchorees.push(this);
    }

    setAnchorPos(pos) {
        this.anchorPos = pos;
        this.updateAnchorees();
    }

    updateAnchorees() {
        // if anchor position changed, update positions of anchorees
        for (var i = 0; i < this.anchorees.length; i++) { 
            this.anchorees[i].setAnchorPos(this.canvasPos);
        }
    }

    checkCollision(aabb) {
        if (this.max.x < aabb.min.x || this.min.x > aabb.max.x) {
            return false;
        } else if (this.max.y < aabb.min.y || this.min.y > aabb.max.y) {
            return false;
        } else {
            return true;
        }
    }

    checkCollisions(aabbList) {
        var collisions = [];
        for (var i = 0; i < aabbList.length; i++) {
            if (aabbList[i] == this) {
                continue;
            }
            if (this.checkCollision(aabbList[i])) {
                collisions.push(aabbList[i]);
            }
        }
        return collisions;
    }

}


try {
  	module.exports = gameObject;
} catch (err) {
	  console.log('gameObject export failed');
}