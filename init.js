function init(){
    
    var zeroTime = new Date();
    zeroTime = zeroTime.getTime();
    //var timeStep = 1;
    window.canvas = document.getElementById("canvas");
    window.context = canvas.getContext("2d");
    draw();
}

/* TODO:
 *    - start the game with only one small object, and the big player controlled
 *      one. The small object should be relatively slow.
 *    - make sure that every few turns (seconds) either a new object appears or
 *      they all get faster
 *    - implement the collision function at least between the large object and
 *      the small objects
 *    - game should stop when the big object collides with a small object. The
 *      longer the player can avert this the more point (s)he'll get in the end.
 *    - implement a menu system. Work out what should be in it.
 *    - implement a way to pause the game and then resume at the same place.
 *    - make sure that during alerts the game is paused.
 *    - track high-scores somehow.
 *    - make the different objects' colours costumizable through in-game options
 */