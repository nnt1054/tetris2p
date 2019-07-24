




class backgroundObject extends gameObject {
  

    constructor(scene) {
        super(scene)
    }

    
  	update(delta) {
  	   // jeff
  	}

  
  	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = 'lightgreen';
        this.scene.engine.context.fillRect(0, 0, this.scene.engine.canvas.width, this.scene.engine.canvas.height);
  	}

}

try {
	module.exports = backgroundObject;
} catch (err) {
	console.log('backgroundObject export failed');
}