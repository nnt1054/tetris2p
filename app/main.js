



sceneList = {
    'mainMenu': mainMenu,
    'testScene': testScene,
}

var game = new engine(sceneList, 'testScene', {});
game.start();

// make the scenes here and pass them into the engine object