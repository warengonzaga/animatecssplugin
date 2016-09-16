
function animation() {
    var e = document.getElementById("animations");
    var userSelect = e.options[e.selectedIndex].value;
    
    if (userSelect == "bounce") {
        console.log("Bounce Selected");
        return a();
        
    } else if (userSelect == "flash") {
        console.log("Flash Selected");
        return b();
        
    } else if (userSelect == "pulse") {
        console.log("Pulse Selected");
        return c();
        
    } else {
        return false; // Do Nothing
    }
}

function a() {
    TweenMax.to("#texts", 1, {onStart: bounce});
}

function b() {
    TweenMax.to("#texts", 1, {onStart: flash});
}

function c() {
    TweenMax.to("#texts", 1, {onStart: pulse});
}