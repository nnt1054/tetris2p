



sceneList = {
    'mainMenu': mainMenu,
    'testScene': testScene,
    'spriteScene': spriteScene,
}

var game = new engine(sceneList, 'spriteScene', {});
game.start();

// make the scenes here and pass them into the engine object