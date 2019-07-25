


class draggableSquareObject extends gameObject{

	constructor(scene) {
	    super(scene)
      	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);
  		
  		this.width = 200;
  		this.height = 100;
  		this.clickAABB = this.createAABB(200, 100, 0, 0)
  		
  		this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  		this.colorIndex = 0;

  		this.dragged = false;
	}

	update(delta) {
    	this.allowClickDetection(this.clickAABB);

	    if (this.isClicked) {
	    	this.colorIndex = (this.colorIndex + 1) % this.colors.length;
	    }
	   
	   	if ('mousedown' in this.scene.engine.mouseEvents) {
	   		var mousePos = this.scene.engine.mouseEvents['mousedown'];
	       	if (this.pointInAABB(mousePos, this.clickAABB)) {
	           this.dragged = true;
	           this.dragOffsetLeft = mousePos.x - this.clickAABB.min.x;
	           this.dragOffsetTop = mousePos.y - this.clickAABB.min.y;
	       	}
		}

	   	if ('mouseup' in this.scene.engine.mouseEvents) {
        	this.dragged = false;
		}

		if (this.dragged) {
			if ('mousemove' in this.scene.engine.mouseEvents) {
				var mousePos = this.scene.engine.mouseEvents['mousemove'];
		  		this.clickAABB = this.createAABB(this.width, this.height,
		  				mousePos.x - this.dragOffsetLeft,
		  				mousePos.y - this.dragOffsetTop);
			}
		}
	}

	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = this.colors[this.colorIndex];
        this.scene.engine.context.fillRect(this.clickAABB.min.x, this.clickAABB.min.y, this.clickAABB.width, this.clickAABB.height);
	}

}

try {
  	module.exports = draggableSquareObject;
} catch (err) {
	  console.log('draggableSquareObject export failed');
}