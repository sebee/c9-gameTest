var keyBoard = {
    w: false,
    a: false,
    s: false,
    d: false
};
var keynum, keychar;
function input(){
    
    /*if (window.keyboard.isPressed('w')){
        alert("5");
    }*/
    updateInput();
    
    // Last call of the function.
    setTimeout(function(){draw();},1);
}
function keyBoardDown(e){
    //alert("0");
    //IE
    if(window.event) {
        keynum = e.keyCode;
	}
    // Netscape/Firefox/Opera
    else if(e.which) {
        keynum = e.which;
	}
    keychar = String.fromCharCode(keynum);
    if (keychar == "W" || keychar == "&"){
        //alert("5");
        //objects[0].ySpeed += -10;
        keyBoard.w = true;
    }
    if(keychar == "S" || keychar == "("){
        keyBoard.s = true;
        //objects[0].ySpeed += 10;
    }
    if(keychar == "A" || keychar == "%"){
        keyBoard.a = true;
        //objects[0].xSpeed += -10;
    }
    if(keychar == "D" || keychar == "'"){
        keyBoard.d = true;
//        objects[0].xSpeed += 10;
    }else{
        //alert(keychar);
    }
    //alert(keychar);
}

function keyBoardUp(e){
    //alert("0");
    //IE
    if(window.event) {
        keynum = e.keyCode;
	}
    // Netscape/Firefox/Opera
    else if(e.which) {
        keynum = e.which;
	}
    keychar = String.fromCharCode(keynum);
    if (keychar == "W" || keychar == "&"){
        //alert("5");
        //objects[0].ySpeed += -10;
        keyBoard.w = false;
    }
    if(keychar == "S" || keychar == "("){
        keyBoard.s = false;
        //objects[0].ySpeed += 10;
    }
    if(keychar == "A" || keychar == "%"){
        keyBoard.a = false;
        //objects[0].xSpeed += -10;
    }
    if(keychar == "D" || keychar == "'"){
        keyBoard.d = false;
//        objects[0].xSpeed += 10;
    }else{
        //alert(keychar);
    }
    //alert(keychar);
}
    

function updateInput(){
    if (keyBoard.w === true){
        //alert("5");
        objects[0].ySpeed += -1; 
    }
    if(keyBoard.s === true){
        objects[0].ySpeed += 1;
    }
    if(keyBoard.a === true){
        objects[0].xSpeed += -1;
    }
    if(keyBoard.d === true){
        objects[0].xSpeed += 1;
    }
}
    