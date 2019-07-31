


class playerObject extends gameObject {

	constructor(scene) {
	    super(scene)
      	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);

  		this.x = 64;
  		this.y = 0;

  		this.xVel = 10;
  		this.yVel = 0;
  		this.gravity = 0.005;
  		this.jump = -1.5;
  		this.jumpTimer = 0;
  		this.AABB = this.createAABB(64, 64, this.x, this.y)

  		this.color = 'blue';
	}

	update(delta) {
		var w = 87,
			a = 65,
			s = 83,
			d = 68,
			space = 32;

		if (a in this.scene.engine.keyState) {
			this.x -= this.xVel;
		}
		if (d in this.scene.engine.keyState) {
			this.x += this.xVel;
		}
		if (space in this.scene.engine.keyState) {
			if (this.jumpTimer <= 0) {
				this.yVel = this.jump;
				this.jumpTimer = 1000;
			}
		}
		this.jumpTimer -= delta;

		this.yVel += (this.gravity * delta);
		var yDisp = (this.yVel * delta) + (this.gravity * Math.pow(delta, 2));

		this.y += yDisp;
		this.AABB.setPos(this.x, this.y);

		var collisions = this.AABB.checkCollisions(this.scene.staticObjects);
		if (collisions.length > 0) {

			// checking for y values
			for (var i = 0; i < collisions.length; i++) {
				var aabb2 = collisions[i];
				if (this.AABB.ifRightCollisionOnly(aabb2)) {
					console.log('right!');
					this.x = aabb2.min.x - this.AABB.width;
				} else if (this.AABB.ifLeftCollisionOnly(aabb2)) {
					console.log('left!');
					this.x = aabb2.max.x;
				} else if (this.AABB.ifTopCollisionOnly(aabb2)) {
					this.y = aabb2.max.y;
					this.yVel = 0;
				} else if (this.AABB.ifBottomCollisionOnly(aabb2)) {
					this.y = aabb2.min.y - this.AABB.height;
				    this.yVel = 0;
					this.jumpTimer = 0;
				}
			}


			this.AABB.setPos(this.x, this.y);
		}

	}

	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = this.color;
        this.scene.engine.context.fillRect(this.AABB.min.x, this.AABB.min.y, this.AABB.width, this.AABB.height);
	}
}

try {
  	module.exports = playerObject;
} catch (err) {
	  console.log('playerObject export failed');
}