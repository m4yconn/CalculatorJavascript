let calc = "";
let openP = false;
let isRad = false;

function attDisplay(btn){
    const display = document.getElementById("display");

    if(display.value == "0" || display.value == "ERROR") display.value = "";
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

    if(isRad){
        calc += "**0.5"
    }

    isRad = false

    try{
        let resul = eval(calc);

        display.value = resul;
        calc = display.value;
    }
    catch(error){
        display.value = "ERROR"
        calc = ""
    }
    
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
        if(isRad){
            calc += "**0.5"
        }
        display.value += btn.value;
        calc += "/";
        isRad = false
        return true;
    }

    if(btn.value == "√"){
        display.value += btn.value;
        isRad = true;
        return true;
    }

    if(btn.value == "^"){
        if(isRad){
            calc += "**0.5"
        }
        display.value += btn.value;
        calc += "**";
        isRad = false
        return true;
    }

    if(isNaN(btn.value)){
        if(isRad){
            calc += "**0.5"
        }
        isRad = false;
    }
}