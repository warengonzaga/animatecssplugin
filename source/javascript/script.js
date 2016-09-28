"use-strict";

function animation() {
    var e = document.getElementById("animations");
    var userSelect = e.options[e.selectedIndex].value;
    
    if (userSelect == "bounce") {
        console.log("Bounce Selected");
        return aBounce();
        
    } else if (userSelect == "flash") {
        console.log("Flash Selected");
        return bFlash();
        
    } else if (userSelect == "pulse") {
        console.log("Pulse Selected");
        return cPulse();
        
    } else if (userSelect == "rubber band") {
        console.log("Rubber Band Selected");
        return dRubberBand();

    } else if (userSelect == "shake") {
        console.log("Shake Selected");
        return eShake();
        
    } else if (userSelect == "swing") {
        console.log("Swing Selected");
        return fSwing();
    
    } else if (userSelect == "tada") {
        console.log("Tada Selected");
        return gTada();
        
    } else {
        return false; // Do Nothing
    }
}

function aBounce() {
    TweenMax.to("#texts", 1, {onStart: bounce});
}

function bFlash() {
    TweenMax.to("#texts", 1, {onStart: flash});
}

function cPulse() {
    TweenMax.to("#texts", 1, {onStart: pulse});
}

function dRubberBand() {
    TweenMax.to("#texts", 1, {onStart: rubberBand});
}

function eShake() {
    TweenMax.to("#texts", 1, {onStart: shake});
}

function fSwing() {
    TweenMax.to("#texts", 1, {onStart: swing});
}

function gTada() {
    TweenMax.to("#texts", 1, {onStart: tada});
}