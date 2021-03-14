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
    let i;
    for (i = 1; i <= 9; i++) {
        if (document.getElementById("row" + i).style.borderColor == "blue") {
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
    var result;
    let i;

    if ((r1 == r2 && r2 == r3 && r1 != "")|| ((r4 == r5) && (r5 == r6) && (r4 != "")) || ((r7 == r8) && (r8 == r9)) &&(r7 != "")|| ((r1 == r4) && (r4 == r7))&& (r1 != "")|| ((r2 == r5) && (r5 == r8)) &&(r2 != "")|| ((r3 == r6) && (r6 == r9))&& (r3 != "")|| ((r1 == r5) && (r5 == r9))&& (r1 != "")|| ((r3 == r5) && (r5 == r7) &&(r3 != ""))) {
        result = true;
    } else {
        result = false;
    }
    //console.log(result);
        if (result == true) {
            winEffect();
        }
    function winEffect(){
        document.body.style.backgroundColor="green"
        mySound.play();
    }
}