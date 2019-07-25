


class uiButtonObject extends gameObject{

	constructor(scene) {
	    super(scene)
      	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);
  		
  		this.clickAABB = this.createClickableArea(200, 100, 400, 200)
  		
  		this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  		this.colorIndex = 0;
	}

	update(delta) {
	   if ('click' in this.scene.engine.mouseEvents) {
	       if (this.isClicked(this.scene.engine.mouseEvents['click'], this.clickAABB)) {
	           this.colorIndex = (this.colorIndex + 1) % this.colors.length;
	       }
	   }
	   
	   if ('mousedown' in this.scene.engine.mouseEvents) {
	       console.log('mousedown');
	   }
	   if ('mouseup' in this.scene.engine.mouseEvents) {
	       console.log('mouseup btw');
	   }
	   
	   if ('66' in this.scene.engine.keyPress) {
	       this.colorIndex = 4;
	   }
	}

	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = this.colors[this.colorIndex];
        this.scene.engine.context.fillRect(this.clickAABB.min.x, this.clickAABB.min.y, this.clickAABB.width, this.clickAABB.height);
	}

    isClicked(point, aabb) {
        return ((point.x > aabb.min.x) && (point.x < aabb.max.x)) && ((point.y > aabb.min.y) && (point.y < aabb.max.y))
    }

}

try {
  	module.exports = uiButtonObject;
} catch (err) {
	  console.log('uiButton export failed');
}