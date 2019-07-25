


class uiButtonObject extends gameObject{

	constructor(scene) {
	    super(scene)
      	this.scene = scene;
  		this.update = this.update.bind(this);
  		this.draw = this.draw.bind(this);
  		
  		this.clickAABB = this.createAABB(200, 100, 400, 200)
  		
  		this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  		this.colorIndex = 0;
	}

	update(delta) {
    	this.allowClickDetection(this.clickAABB);

		if (this.isClicked()) {
           this.colorIndex = (this.colorIndex + 1) % this.colors.length;
		}

		if ('66' in this.scene.engine.keyPress) {
			this.colorIndex = 4;
		}

	}

	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = this.colors[this.colorIndex];
        this.scene.engine.context.fillRect(this.clickAABB.min.x, this.clickAABB.min.y, this.clickAABB.width, this.clickAABB.height);
	}

}

try {
  	module.exports = uiButtonObject;
} catch (err) {
	  console.log('uiButton export failed');
}