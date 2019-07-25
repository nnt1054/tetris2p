


class switchSceneButtonObject extends gameObject{

  	constructor(scene, nextScene='mainMenu', color='red') {
        super(scene)
        this.scene = scene;
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);

        this.clickAABB = this.createAABB(200, 100, 400, 200)

        this.nextScene = nextScene;
        this.color = color;
  	}

    update(delta) {
        this.allowClickDetection(this.clickAABB);

        if (this.isClicked) {
            this.scene.engine.switchScene(this.nextScene);
        }
  	}

  	draw(interpolationPercentage) {
        this.scene.engine.context.fillStyle = this.color;
        this.scene.engine.context.fillRect(this.clickAABB.min.x, this.clickAABB.min.y, this.clickAABB.width, this.clickAABB.height);
    }


}

try {
  	module.exports = switchSceneButtonObject;
} catch (err) {
	  console.log('switchSceneButtonObject export failed');
}