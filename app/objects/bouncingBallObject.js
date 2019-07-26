

// function Planet(center, radius, orbitRadius, velocity, color) {
    // sun = new Planet({x: canvas.width*0.5, y: canvas.height * 0.5}, sunRadius, 0, 0, '#FFD000'),


class bouncingBallObject extends gameObject {
  

    constructor(scene, color='red') {
        super(scene)

  		this.posAABB = this.createAABB(128, 128, 128, 128)
        this.radius = 32;
        this.speed = 0.1;
        this.velocity = 0.1;
        this.direction = 1;
        this.color = color;

        this.target = null;
    }

    
  	update(delta) {

        this.lastY = this.posAABB.canvasPos.y;
        let y = this.posAABB.min.y + this.velocity * delta
        this.posAABB.setPos(this.posAABB.x, y);

        let canvasPos = this.posAABB.canvasPos;
        if (canvasPos.y > this.scene.engine.canvas.height && this.velocity > 0) {
            this.velocity = -this.velocity;
        } else if (canvasPos.y < 0 && this.velocity < 0) {
            this.velocity = -this.velocity;
        }
        
        // if (this.posAABB.y > 0 && this.velocity > 0) {
        //     this.velocity = -this.velocity;
        // } else if (this.posAABB.y < 0 && this.velocity < 0) {
        //     this.velocity = -this.velocity;
        // }

    }

  
  	draw(interpolationPercentage) {
        // Interpolate with the last position to reduce stuttering.
        let canvasPos = this.posAABB.canvasPos
        // var y = canvasPos.y;
        var y = this.lastY + (canvasPos.y - this.lastY) * interpolationPercentage;
        this.circle(this.scene.engine.context, canvasPos.x, y);

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
	console.log('bouncingBallObject export failed');
}