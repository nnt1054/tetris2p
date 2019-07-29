


class draggableSquareObject extends gameObject {

	constructor(scene, x=0, y=0, name='rect') {
	    super(scene)
      	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);
  		
  		this.width = 200;
  		this.height = 100;
  		this.clickAABB = this.createAABB(200, 100, x, y)
  		this.name = name;

  		this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  		this.colorIndex = 0;

  		this.dragged = false;
	}

	update(delta) {
    	this.allowClickDetection(this.clickAABB);

	    if (this.isClicked()) {
	    	this.colorIndex = (this.colorIndex + 1) % this.colors.length;
	    }

	    if (this.isClickTarget()) {
			var pos = this.getMousePos();
			var x = pos.x - this.clickOffsetLeft,
				y = pos.y - this.clickOffsetTop;
			this.clickAABB.setPos(x,y);
	    }


	    var collisions = this.clickAABB.checkCollisions(this.scene.draggableSquares);
	    if (collisions.length > 0) {
	    	console.log(collisions[0]);
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