// The logic loop. Called after each draw loop.
/* TODO: implement an input loop.
 *       put the logic parts into different functions.
 */
var SPEED = 1;
var oldTime = 0;
var newTime;
var everyTenStep = 0;
var frameRateAvg = 0;
/* TODO: Delete this when testing is done.
 */
var testForAddingObject = 0;
var timeStep = 1;
var timePassed = 0;
var score = 0;
function logic(){
    if (oldTime === 0){
        oldTime = window.zeroTime;
    }
    newTime = new Date();
    newTime = newTime.getTime();
    timeStep = newTime - oldTime;
    if(timeStep > 0){
    }else{
        timeStep = 1;
    }
    updateRateInfo();
    timeStep = timeStep * SPEED;
    
    // Calls to change objects.
    for (var i = 0; i < objects.length; i++){
        objects[i].moveT();
    }
    if (testForAddingObject < 5){
        // The number if the if condition sets the number of small objects that
        // appear on the screen at the beginning.
        //alert('b');
        objects.push({
            mass: 1,
            x: 100 + timeStep,
            y: 100 + 2 * timeStep,
            xLen: 5,
            yLen: 5,
            xSpeed: Math.random() * 150 - 75,
            ySpeed: Math.random() * 150 - 75,
            moveH: moveH,
            moveV: moveV,
            moveT: moveT,
            style: "rgba(250, 25, 25, 1)",
            draw: drawRect,
            coll: basicCollision
        });
        //alert('a');
        testForAddingObject++;
    }/**/
    //physics();
    
    // Final calls.
    oldTime = newTime;
    timePassed += timeStep;
    score = Math.round(timePassed / 1000);
    setTimeout(function(){input();},16.666667 - timeStep);
}

function updateRateInfo(){
    document.getElementById("player_info").innerHTML = "Number of objects: " + 
        objects.length + "<br />Your Score : " + score;
    document.getElementById("timer").innerHTML = timeStep;
    if(everyTenStep == 20){
        document.getElementById("framerate").innerHTML = frameRateAvg / 10;
        everyTenStep = 0;
        frameRateAvg = 0;
    }
    everyTenStep++;
    frameRateAvg += 1000 / timeStep;
}