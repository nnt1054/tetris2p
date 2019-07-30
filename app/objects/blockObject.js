


class blockObject extends gameObject {

	constructor(scene, width, height, x, y) {
	    super(scene)
      	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);



  		this.AABB = this.createAABB(width, height, x, y)

  		this.color = 'blue';
	}

	update(delta) {
	}

	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = this.color;
        this.scene.engine.context.fillRect(this.AABB.min.x, this.AABB.min.y, this.AABB.width, this.AABB.height);
	}
}

try {
  	module.exports = blockObject;
} catch (err) {
	  console.log('blockObject export failed');
}