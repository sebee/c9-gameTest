/* TODO(sebee): write doc for method. + make this work
 */
function smallCollision(){
    var l = objects.length;
    for (var i = 0; i < l; i++){
        for (var j = i + 1; j < objects.length; j++){
            var xDiff = objects[i].x - objects[j].x;
            var yDiff = objects[i].y - objects[j].y;
            if((xDiff < objects[j].xLen && yDiff < objects[j].yLen &&
                xDiff > 0 && yDiff > 0) || (xDiff > -1 * objects[i].xLen &&
                yDiff > -1 * objects[i].yLen && xDiff < 0 && yDiff < 0)){
                
                //alert("COLLISION");
                /*
                var u1 = [objects[i].xSpeed,objects[i].ySpeed];
                var m1 = objects[i].mass;
                var u2 = [objects[j].xSpeed,objects[j].ySpeed];
                var m2 = objects[j].mass;
                var v1 = [(u1[0] * (m1 - m2) + 2 * m2 * u2[0]) / ( m1 + m2 ),
                          (u1[1] * (m1 - m2) + 2 * m2 * u2[1]) / ( m1 + m2 )];
                var v2 = [(u2[0] * (m2 - m1) + 2 * m1 * u1[0]) / ( m1 + m2 ),
                          (u2[1] * (m2 - m1) + 2 * m1 * u1[1]) / ( m1 + m2 )];
                v1[0] += -objects[i].xSpeed;
                v1[1] += -objects[i].ySpeed;
                v2[0] += -objects[j].xSpeed;
                v2[1] += -objects[j].ySpeed;
                if (objects[i].speedChange){
                    objects[i].speedChange += v1;
                }else{
                    objects[i].speedChange = v1;
                }
                if (objects[j].speedChange){
                    objects[j].speedChange += v2;
                }else{
                    objects[j].speedChange = v2;
                }*/
            }
        }
    }
    for (var k = 0; k < l; k++){
        if (objects[k].speedChange){
            objects[k].xSpeed += objects[k].speedChange[0];
            objects[k].ySpeed += objects[k].speedChange[1];
        }
    }
}

function physics(){
    return a;
}