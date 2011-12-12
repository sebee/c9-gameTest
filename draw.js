// The draw loop. Should be called after each logic step.
function draw(){
    // This line clears the canvas at each iteration.
    window.context.clearRect(0, 0, window.canvas.width, window.canvas.height);
    
    // Draw all the objects here.
    for (var i = 0; i < objects.length; i++){
        objects[i].draw();
    }
    
    // Keep at the end.
    logic();
}