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
    }
     else if (userSelect == "wobble") {
        console.log("Wobble Selected");
        return hWobble();
    }
     else if (userSelect == "jello") {
        console.log("Jello Selected");
        return iJello();
    }
     else if (userSelect == "bounceIn") {
        console.log("bounceIn Selected");
        return jBounceIn();
    }
     else if (userSelect == "bounceInDown") {
        console.log("bounceInDown Selected");
        return kBounceInDown();
    }
      else if (userSelect == "bounceInLeft") {
        console.log("bounceInLeft Selected");
        return lBounceInLeft();
    }
      else if (userSelect == "bounceInRight") {
        console.log("bounceInRight Selected");
        return mBounceInRight();
    }
     else if (userSelect == "bounceInUp") {
        console.log("bounceInUp Selected");
        return nBounceInUp();
    }
     else if (userSelect == "bounceOut") {
        console.log("bounceOut Selected");
        return oBounceOut();
    }
    else if (userSelect == "bounceOutDown") {
        console.log("bounceOutDown Selected");
        return pBounceOutDown();
    }
    else if (userSelect == "bounceOutLeft") {
        console.log("bounceOutLeft Selected");
        return qBounceOutLeft();
    }
    else if (userSelect == "bounceOutRight") {
        console.log("bounceOutRight Selected");
        return rBounceOutRight();
    }
    else if (userSelect == "bounceOutUp") {
        console.log("bounceOutUp Selected");
        return sBounceOutUp();
    }
    else if (userSelect == "fadeIn") {
        console.log("fadeIn Selected");
        return tfadeIn();
    }
    else if (userSelect == "fadeInDown") {
        console.log("fadeInDown Selected");
        return ufadeInDown();
    }
    else if (userSelect == "fadeInDownBig") {
        console.log("fadeInDownBig Selected");
        return vfadeInDownBig();
    }
    else if (userSelect == "fadeInLeft") {
        console.log("fadeInLeft Selected");
        return wfadeInLeft();
    }
    else if (userSelect == "fadeInLeftBig") {
        console.log("fadeInLeft Selected");
        return xfadeInLeftBig();
    }
    else if (userSelect == "fadeInRight") {
        console.log("fadeInRight Selected");
        return yfadeInRight();
    }
    else if (userSelect == "fadeInRightBig") {
        console.log("fadeInRightBig Selected");
        return zfadeInRightBig();
    }
    else if (userSelect == "fadeInUp") {
        console.log("fadeInUp Selected");
        return aafadeInUp();
    }
    else if (userSelect == "fadeInUpBig") {
        console.log("fadeInUpBig Selected");
        return abfadeInUpBig();
    }
    else if (userSelect == "fadeOut") {
        console.log("fadeOut Selected");
        return acfadeOut();
    }
    else if (userSelect == "fadeOutDown") {
        console.log("fadeOutDown Selected");
        return adfadeOutDown();
    }
    else if (userSelect == "fadeOutDownBig") {
        console.log("fadeOutDownBig Selected");
        return aefadeOutDownBig();
    }
    else if (userSelect == "fadeOutLeft") {
        console.log("fadeOutLeft Selected");
        return affadeOutLeft();
    }
    else if (userSelect == "fadeOutLeftBig") {
        console.log("fadeOutLeftBig Selected");
        return agfadeOutLeftBig();
    }
    else if (userSelect == "fadeOutRight") {
        console.log("fadeOutRight Selected");
        return ahfadeOutRight();
    }
    else if (userSelect == "fadeOutRightBig") {
        console.log("fadeOutRightBig Selected");
        return aifadeOutRightBig();
    }
    else if (userSelect == "fadeOutUp") {
        console.log("fadeOutUp Selected");
        return ajfadeOutUp();
    }
    else if (userSelect == "fadeOutUpBig") {
        console.log("fadeOutUpBig Selected");
        return akfadeOutUpBig();
    }
    else if (userSelect == "flip") {
        console.log("flip Selected");
        return alflip();
    }
    else if (userSelect == "flipInX") {
        console.log("flipInX Selected");
        return amflipInX();
    }
    else if (userSelect == "flipInY") {
        console.log("flipInY Selected");
        return anflipInY();
    }
    else if (userSelect == "flipOutX") {
        console.log("flipOutX Selected");
        return aoflipOutX();
    }
    else if (userSelect == "flipOutY") {
        console.log("flipOutY Selected");
        return apflipOutY();
    }














    else {
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

function hWobble() {
    TweenMax.to("#texts", 1, {onStart: wobble});
}

function iJello() {
    TweenMax.to("#texts", 1, {onStart: jello});
}

function jBounceIn() {
    TweenMax.to("#texts", 1, {onStart: bounceIn});
}

function kBounceInDown() {
    TweenMax.to("#texts", 1, {onStart: bounceInDown});
}

function lBounceInLeft() {
    TweenMax.to("#texts", 1, {onStart: bounceInLeft});
}

function mBounceInRight() {
    TweenMax.to("#texts", 1, {onStart: bounceInRight});
}

function nBounceInUp() {
    TweenMax.to("#texts", 1, {onStart: bounceInUp});
}

function oBounceOut() {
    TweenMax.to("#texts", 1, {onStart: bounceOut});
}

function pBounceOutDown() {
    TweenMax.to("#texts", 1, {onStart: bounceOutDown});
}

function qBounceOutLeft() {
    TweenMax.to("#texts", 1, {onStart: bounceOutLeft});
}

function rBounceOutRight() {
    TweenMax.to("#texts", 1, {onStart: bounceOutRight});
}

function sBounceOutUp() {
    TweenMax.to("#texts", 1, {onStart: bounceOutUp});
}

function tfadeIn() {
    TweenMax.to("#texts", 1, {onStart: fadeIn});
}

function ufadeInDown() {
    TweenMax.to("#texts", 1, {onStart: fadeInDown});
}

function vfadeInDownBig() {
    TweenMax.to("#texts", 1, {onStart: fadeInDownBig});
}

function wfadeInLeft() {
    TweenMax.to("#texts", 1, {onStart: fadeInLeft});
}

function xfadeInLeftBig() {
    TweenMax.to("#texts", 1, {onStart: fadeInLeftBig});
}

function yfadeInRight() {
    TweenMax.to("#texts", 1, {onStart: fadeInRight});
}

function zfadeInRightBig() {
    TweenMax.to("#texts", 1, {onStart: fadeInRightBig});
}

function aafadeInUp() {
    TweenMax.to("#texts", 1, {onStart: fadeInUp});
}

function abfadeInUpBig() {
    TweenMax.to("#texts", 1, {onStart: fadeInUpBig});
}

function acfadeOut() {
    TweenMax.to("#texts", 1, {onStart: fadeOut});
}

function adfadeOutDown() {
    TweenMax.to("#texts", 1, {onStart: fadeOutDown});
}

function aefadeOutDownBig() {
    TweenMax.to("#texts", 1, {onStart: fadeOutDownBig});
}

function affadeOutLeft() {
    TweenMax.to("#texts", 1, {onStart: fadeOutLeft});
}

function agfadeOutLeftBig() {
    TweenMax.to("#texts", 1, {onStart: fadeOutLeftBig});
}

function ahfadeOutRight() {
    TweenMax.to("#texts", 1, {onStart: fadeOutRight});
}

function aifadeOutRightBig() {
    TweenMax.to("#texts", 1, {onStart: fadeOutRightBig});
}

function ajfadeOutUp() {
    TweenMax.to("#texts", 1, {onStart: fadeOutUp});
}

function akfadeOutUpBig() {
    TweenMax.to("#texts", 1, {onStart: fadeOutUpBig});
}

function alflip() {
    TweenMax.to("#texts", 1, {onStart: flip});
}

function amflipInX() {
    TweenMax.to("#texts", 1, {onStart: flipInX});
}

function anflipInY() {
    TweenMax.to("#texts", 1, {onStart: flipInY});
}

function aoflipOutX() {
    TweenMax.to("#texts", 1, {onStart: flipOutX});
}

function apflipOutY() {
    TweenMax.to("#texts", 1, {onStart: flipOutY});
}
<<<<<<< HEAD



=======
>>>>>>> c3b0a2610aa4b6c37dde2a0012ea6e02212428e1
