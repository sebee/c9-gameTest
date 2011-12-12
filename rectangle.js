/* An Array of objects to be used in the program.
 */
var objects = new Array();
objects.push({
    type: "rectangle",
    mass: 50,
    x: 0,
    y: 0,
    xLen: 50,
    yLen: 50,
    xSpeed: 0,
    ySpeed: 0,
    moveH: moveH,
    moveV: moveV,
    moveT: moveT,
    style: "rgba(150, 150, 150, 1)",
    draw: drawRect,
    coll: basicCollision
}/*,{
    type: "rectangle",
    x: 50,
    y: 20,
    xLen: 100,
    yLen: 75,
    xSpeed: 66,
    ySpeed: 250,
    moveH: moveH,
    moveV: moveV,
    moveT: moveT,
    style: "rgba(70,120,150,0.5)",
    draw: drawRect,
    coll: basicCollision
}*/);
/* TODO: Move the general methods (moveH, moveV, moveT) to a general .js file
 * when creating new geometries.
 */
/* Method to move the object horizontally.
 */
function moveH(s){
    this.x += s;
}
/* Method to move the object vertically.
 */
function moveV(s){
    this.y += s;
}
/* Method to move the object around by its speed multiplied by a time. Will be
 * used when the logic loop is done.
 */
function moveT(){
    var t = timeStep / 1000;
    this.x += this.xSpeed * timeStep / 1000;
    this.y = this.y + this.ySpeed * timeStep / 1000;
    this.coll();
}
/* Method to draw the rectangle object. Used in the draw() loop.
 */
function drawRect(){
    context.fillStyle = this.style;
    context.fillRect(Math.round(this.x), Math.round(this.y), this.xLen, this.yLen);
}
/* Method used to handle collisions of the rectangles with the sides of the
 * canvas. Very basic.
 */
function basicCollision(){
    if(this.x + this.xLen > canvas.width){
        this.xSpeed = -1 * this.xSpeed;
        this.x = canvas.width - this.xLen;
    }
    if(this.x < 0){
        this.xSpeed = -1 * this.xSpeed;
        this.x = 0;
    }
    if(this.y + this.yLen > canvas.height){
        this.ySpeed = -1 * this.ySpeed;
        this.y = canvas.height - this.yLen;
    }
    if(this.y < 0){
        this.ySpeed = -1 * this.ySpeed;
        this.y = 0;
    }
}