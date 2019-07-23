

// function Planet(center, radius, orbitRadius, velocity, color) {
    // sun = new Planet({x: canvas.width*0.5, y: canvas.height * 0.5}, sunRadius, 0, 0, '#FFD000'),


class bouncingBallObject extends gameObject {
  

    constructor(scene) {
        super(scene)

        this.x = 128;
        this.y = 128;
        this.lastX = this.x;
        this.lastY = this.y;
        this.radius = 32;
        this.velocity = 0.1;
        this.color = 'red';

    }

    
  	update(delta) {

        this.lastY = this.y;
        this.y = this.y + this.velocity * delta;

        if (this.y > this.scene.engine.canvas.height && this.velocity > 0) {
          this.velocity = -this.velocity;
        } else if (this.y < 0 && this.velocity < 0) {
          this.velocity = -this.velocity;
        }


    }

  
  	draw(interpolationPercentage) {
        // Interpolate with the last position to reduce stuttering.
        var y = this.lastY + (this.y - this.lastY) * interpolationPercentage;
        this.circle(this.scene.engine.context, this.x, y);

        // this.scene.engine.context.circle(this.x, y, this.radius, this.color);
        // this.scene.engine.context.fillRect
  	}

    circle(context, x, y) {
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.lineWidth = 1;
        context.stroke();
    }

}

try {
	module.exports = bouncingBallObject;
} catch (err) {
	console.log('engine export failed');
}