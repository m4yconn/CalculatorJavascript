let calc = "";
let openP = false;

function attDisplay(btn){
    const display = document.getElementById("display");

    if(display.value == "0") display.value = "";
    if(display.value.length >= 12) return;

    if(btn.value === "( )"){
        checkParanteses();
        return;
    }

    if(checkOperador(btn)) return;

    display.value += btn.value
    calc += btn.value;

}

function clsDisplay(){
    var display = document.getElementById("display");
    
    openP = false;
    display.value = "0";
    calc = "";
}

function resulCalc(){
    var display = document.getElementById("display");

    let resul = eval(calc);

    display.value = resul;
    calc = display.value;
}

function checkParanteses(){
    var display = document.getElementById("display");

    if(openP){
        display.value += ")";
        calc += ")";
        openP = false;
    }
    else{
        display.value += "(";
        calc += "(";
        openP = true;
    }
}

function checkOperador(btn){
    var display = document.getElementById("display");

    if(btn.value == "÷"){
        display.value += btn.value;
        calc += "/";
        return true;
    }

    if(btn.value == "√"){
        display.value += btn.value;
        calc += "**0.5"
        return true;
    }

    if(btn.value == "^"){
        display.value += btn.value;
        calc += "**";
        return true;
    }
}