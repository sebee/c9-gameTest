function init(){
    
    var zeroTime = new Date();
    zeroTime = zeroTime.getTime();
    //var timeStep = 1;
    window.canvas = document.getElementById("canvas");
    window.context = canvas.getContext("2d");
    draw();
}

/* TODO:
 *    - write a function which measure the whole elapsed time since the game
 *      has been started. This can be used as a score keeping function as well.
 *    - start the game with only one small object, and the big player controlled
 *      one. The small object should be relatively slow.
 *    - make sure that every few turns (seconds) either a new object appears or
 *      they all get faster
 *    - implement the collision function at least between the large object and
 *      the small objects
 *    - game should stop when the big object collides with a small object. The
 *      longer the player can avert this the more point (s)he'll get in the end.
 *    - implement a menu system. Work out what should be in it.
 *    - track high-scores somehow.
 *    - make the different objects' colours costumizable through in-game options
 *    - save everything into git.
 */