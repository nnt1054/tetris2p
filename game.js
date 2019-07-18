function update(delta) {
    // call udpate function for each relevent object
}

function draw(interpolationPercentage) {
    // call draw function for each relevant object
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function start() {
    // check and process input
}

function end(fps, panic) {
    // calculate fps
    fpsCounter.textContent = Math.round(fps) + ' FPS';
    if (panic) {
        var discardedTime = Math.round(MainLoop.resetFrameDelta());
        console.warn('Main loop panicked, probably because the browser tab was put in the background. Discarding ' + discardedTime + 'ms');
    }
}

function setup() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        fpsCounter = document.getElementById('fpscounter'),
        fpsValue = document.getElementById('fpsvalue');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var testObject1 = TestObject(1, 2, 3);

    MainLoop.setUpdate(update).setDraw(draw).setStart(start).setEnd(end).start();
}