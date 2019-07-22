 /**
 * @param {Number} delta
 *   The amount of time since the last update, in seconds.
 */
function update(delta) {
    // call udpate function of each relevent object
    console.log(delta);
}

// function update(delta) {
//     for (var i = 0, l = planets.length; i < l; i++) {
//         planets[i].update(delta);
//     }
// }

function draw(interpolationPercentage) {
    // call draw function for each relevant object
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function begin() {
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



// create Canvas and Initial Game Objects 
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    fpsCounter = document.getElementById('fpscounter'),
    fpsValue = document.getElementById('fpsvalue');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// var testObject1 = TestObject(1, 2, 3);

MainLoop.setUpdate(update).setDraw(draw).setBegin(begin).setEnd(end).start();