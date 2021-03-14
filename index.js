//Selecting the Cell

function clickfun(clicked_id) {    
    let i;
    var check;
    var bla = document.getElementById(clicked_id);
    for (i = 1; i <= 9; i++) {
        document.getElementById("row" + i).style.borderColor = "black";
    }
    bla.style.borderColor = "blue";
}

//Putting X

function callX() {
    let mySound = new Audio("click.wav");
    let i;
    for (i = 1; i <= 9; i++) {
        if (document.getElementById("row" + i).style.borderColor == "blue") {
            mySound.play();
            document.getElementById("row" + i).innerHTML = "X";
        }
    }
    resultAnalysis();
}

//Putting O

function callO() {
    let mySound = new Audio("click2.wav")
    let i;
    for (i = 1; i <= 9; i++) {
        if (document.getElementById("row" + i).style.borderColor == "blue") {
            mySound.play();
            document.getElementById("row" + i).innerHTML = "O";
        }
    }
    resultAnalysis();
}

//Clear cell

function clearCell() {
    let i;
    for (i = 1; i < 9; i++) {
        if (document.getElementById("row" + i).style.borderColor == "blue") {
            document.getElementById("row" + i).innerHTML = "";
        }
    }
}

//Game Functionality

function resultAnalysis() {
    var r1 = document.getElementById("row1").innerHTML;
    var r2 = document.getElementById("row2").innerHTML;
    var r3 = document.getElementById("row3").innerHTML;
    var r4 = document.getElementById("row4").innerHTML;
    var r5 = document.getElementById("row5").innerHTML;
    var r6 = document.getElementById("row6").innerHTML;
    var r7 = document.getElementById("row7").innerHTML;
    var r8 = document.getElementById("row8").innerHTML;
    var r9 = document.getElementById("row9").innerHTML;
    var mySound = new Audio("win.wav");
    var check = 0;
    var value = [3];
    var result;
    let i;
//||  || || || || || || ) 
    if(r1 == r2 && r2 == r3 && r1 != ""){
        value = [1,2,3]
        result = true;
    } else if((r4 == r5) && (r5 == r6) && (r4 != "")) {
        value = [4,5,6];
        result = true;
    } else if((r7 == r8) && (r8 == r9) &&(r7 != "")){
        value = [7,8,9];
        result = true;
    } else if((r1 == r4) && (r4 == r7)&& (r1 != "")){
        value = [1,4,7];
        result = true;
    } else if((r2 == r5) && (r5 == r8) &&(r2 != "")){
        value = [2,5,8];
        result = true;
    }else if((r3 == r6) && (r6 == r9)&& (r3 != "")){
        value = [3,6,9];
        result = true;
    }else if((r1 == r5) && (r5 == r9)&& (r1 != "")){
        value = [1,5,9];
        result = true;
    }else if((r3 == r5) && (r5 == r7) &&(r3 != "")){
        value = [3,5,7];
        result = true;
    }else{
        result = false;
    }
    //console.log(result);
        if (result == true) {
            winEffect();
        }
    function winEffect(){
        let i;
        for(i=0;i<3;i++){
            document.getElementById("row" + value[i]).style.backgroundColor = "#f39189";
        }
        document.body.style.backgroundColor="#007965"
        mySound.play();
    }
}