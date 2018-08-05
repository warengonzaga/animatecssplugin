"use-strict";

var highSpeed = 0.1,
    midHighSpeed = 0.2,
    mediumSpeed = 0.3,
    normalSpeed = 0.5,
    slowSpeed = 0.7,
    oneSecSpeed = 1.0;

var tl = new TimelineMax();
    
function reset() {
    TweenMax.set(this.target, {x: 0, y: 0, z: 0, opacity: 1, scale: 1, rotationX: 0, rotationY: 0 , rotation: 0, skewX: 0, skewY: 0 , transformOrigin: "center center"});
}
 
function bounce() {
    console.log("Bounce!");
    TweenMax.to(this.target, mediumSpeed, {y: "-=30px"});
    TweenMax.to(this.target, normalSpeed, {delay: 0.2, y: 0, ease:Bounce.easeOut, onComplete: reset});
}

function flash() {
    console.log("Flash!");
    TweenMax.to(this.target, mediumSpeed, {alpha: 0});
    TweenMax.to(this.target, mediumSpeed, {delay: 0.3, alpha: 1});
    TweenMax.to(this.target, mediumSpeed, {delay: 0.6, alpha: 0});
    TweenMax.to(this.target, mediumSpeed, {delay: 0.9, alpha: 1, onComplete: reset});
}

function pulse() {
    console.log("Pulse!");
    TweenMax.to(this.target, normalSpeed, {scale: 1.1});
    TweenMax.to(this.target, normalSpeed, {delay: 0.3, scale: 1, onComplete: reset});
}

function rubberBand() {
    console.log("Rubber Band!");
    TweenMax.to(this.target, midHighSpeed, {scaleX: 1.2, scaleY: 0.8});
    TweenMax.to(this.target, fastSpeed, {scaleX: 1, scaleY: 1, delay: mediumSpeed, ease:Elastic.easeOut, onComplete: reset});
}

function shake() {
    TweenMax.to(this.target, normalSpeed, {x: "-=10px"});
    TweenMax.to(this.target, normalSpeed, {x: "+=40px", delay: highSpeed});
    TweenMax.to(this.target, normalSpeed, {x: "-=40px", delay: highSpeed * 2});
    TweenMax.to(this.target, normalSpeed, {x: "+=40px", delay: highSpeed * 3});
    TweenMax.to(this.target, normalSpeed, {x: "-=40px", delay: highSpeed * 4});
    TweenMax.to(this.target, normalSpeed, {x: "+=40px", delay: highSpeed * 5});
    TweenMax.to(this.target, normalSpeed, {x: "-=40px", delay: highSpeed * 6});
    TweenMax.to(this.target, normalSpeed, {x: "+=40px", delay: highSpeed * 7});
    TweenMax.to(this.target, normalSpeed, {x: "-=40px", delay: highSpeed * 8});
    TweenMax.to(this.target, normalSpeed, {x: 0, delay: highSpeed * 9, onComplete: reset});
}

function swing() {
    TweenMax.set(this.target, {transformOrigin: "center top"});
    TweenMax.to(this.target, midHighSpeed, {rotation: "+=10"});
    TweenMax.to(this.target, midHighSpeed, {rotation: "-=20", delay: mediumSpeed});
    TweenMax.to(this.target, midHighSpeed, {rotation: "+=15", delay: normalSpeed});
    TweenMax.to(this.target, midHighSpeed, {rotation: "-=8", delay: normalSpeed + 0.2});
    TweenMax.to(this.target, midHighSpeed, {rotation: "+=3", delay: normalSpeed + 0.4, onComplete: reset});
}

function tada() {
    TweenMax.set(this.target, {rotation: 0, scale: 1, force3D: true});
    TweenMax.to(this.target, highSpeed, {rotation: "+=5", scale: 0.9});
    TweenMax.to(this.target, highSpeed, {rotation: "-=10", scale: 1.1, delay: midHighSpeed});
    TweenMax.to(this.target, highSpeed, {rotation: "+=10", delay: midHighSpeed + 0.1});
    TweenMax.to(this.target, highSpeed, {rotation: "-=10", delay: midHighSpeed + (0.1 * 2)});
    TweenMax.to(this.target, highSpeed, {rotation: "+=10", delay: midHighSpeed + (0.1 * 3)});
    TweenMax.to(this.target, highSpeed, {rotation: "-=10", delay: midHighSpeed + (0.1 * 4)});
    TweenMax.to(this.target, highSpeed, {rotation: "+=5", scale: 1, delay: midHighSpeed + (0.1 * 5), onComplete: reset});
}

function wobble() {

    tl.to(this.target, 0.13, {rotation: -3, x: -80 ,y: 4})
    .to(this.target, 0.13, {rotation: 3, x: 80 ,y: -4})
    .to(this.target, 0.13, {rotation: -3, x: -60 ,y: 3})
    .to(this.target, 0.13, {rotation: 3, x: 60 ,y: -3})
    .to(this.target, 0.13, {rotation: -3, x: -30 ,y: 2})
    .to(this.target, 0.13, {rotation: 3, x: 30 ,y: -2})
    .to(this.target, 0.13, {rotation: 0, x: -5 ,y: 0})
    .to(this.target, 0.13, {rotation: 0, x: 0 ,y: 0});
}

function jello() {

    tl.to(this.target, midHighSpeed, {skewX: -25 , skewY: -12.5 ,ease: Power1.easeOut})
    .to(this.target, highSpeed, {skewX: 7 , skewY: 14 ,ease: Power1.easeOut})
    .to(this.target, highSpeed, {skewX: -10 , skewY: -5 ,ease: Power1.easeOut})
    .to(this.target, highSpeed, {skewX: 3 , skewY: 1.5 ,ease: Power1.easeOut})
    .to(this.target, highSpeed, {skewX: -1 , skewY: -1 ,ease: Power1.easeOut})
    .to(this.target, highSpeed, {skewX: 0 , skewY : 0, ease: Power1.easeOut , onComplete: reset});
}


function bounceIn() {

    tl.to(this.target, highSpeed, {opacity: 0 , scale:0 })
    .to(this.target, midHighSpeed, {opacity: 1 , scale: 1.08 })
    .to(this.target, midHighSpeed, {opacity: 1 , scale: 0.8 })
    .to(this.target, highSpeed, {opacity: 1 , scale: 0.95 , ease: Power1.easeOut })
    .to(this.target, midHighSpeed, {opacity: 1 , scale: 1 , onComplete:reset });
}

function bounceInDown() {

    tl.set(this.target, {y: -200 })
    .to(this.target, midHighSpeed, {y: 0 })
    .to(this.target, midHighSpeed, {y:-20 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: 0 })
    .to(this.target, midHighSpeed, {y:-5 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: 0, onComplete:reset });
}

function bounceInLeft() {

    tl.set(this.target, {x: -2000 })
    .to(this.target, mediumSpeed, {x: 0 })
    .to(this.target, midHighSpeed, {x:-20 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: 0 })
    .to(this.target, midHighSpeed, {x:-5 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: 0, onComplete:reset });
}

function bounceInRight() {

    tl.set(this.target, {x: 2000 })
    .to(this.target, mediumSpeed, {x: 0 })
    .to(this.target, midHighSpeed, {x:20 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: 0 })
    .to(this.target, midHighSpeed, {x:5 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: 0, onComplete:reset });
}

function bounceInUp() {

    tl.set(this.target, {y: 200 })
    .to(this.target, midHighSpeed, {y: 0 })
    .to(this.target, midHighSpeed, {y:20 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: 0 })
    .to(this.target, midHighSpeed, {y:5 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: 0, onComplete:reset });
}

function bounceOut() {

    tl.to(this.target, midHighSpeed, {opacity: 1 , scale: 1 })
    .to(this.target, highSpeed, {opacity: 1 , scale: 0.95 , ease: Power1.easeOut })
    .to(this.target, midHighSpeed, {opacity: 1 , scale: 0.8 })
    .to(this.target, midHighSpeed, {opacity: 1 , scale: 1.08 })
    .to(this.target, 0.4, {opacity: 0 , scale:0 , onComplete: reset });
}

function bounceOutDown() {

    tl.set(this.target, {y: 0 })
    .to(this.target, midHighSpeed, {y: 20 })
    .to(this.target, midHighSpeed, {y: 0 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: 10 })
    .to(this.target, midHighSpeed, {y: 0 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: 1000, onComplete:reset });
}

function bounceOutLeft() {

    tl.set(this.target, {x: 0 })
    .to(this.target, mediumSpeed, {x: -5 })
    .to(this.target, midHighSpeed, {x:0, ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: -20 })
    .to(this.target, midHighSpeed, {x:0 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: -2000, onComplete:reset });
}

function bounceOutRight() {

    tl.set(this.target, {x: 0 })
    .to(this.target, mediumSpeed, {x: 5 })
    .to(this.target, midHighSpeed, {x:0, ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: 20 })
    .to(this.target, midHighSpeed, {x:0 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {x: 2000, onComplete:reset });
}

function bounceOutUp() {

    tl.set(this.target, {y: 0 })
    .to(this.target, midHighSpeed, {y: -20 })
    .to(this.target, midHighSpeed, {y: 0 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: -10 })
    .to(this.target, midHighSpeed, {y: 0 , ease: Back.easeOut.config(1.7) })
    .to(this.target, midHighSpeed, {y: -1000, onComplete:reset });
}

function fadeIn() {

    tl.set(this.target, { opacity: 0 })
    .to(this.target, oneSecSpeed, {opacity: 1 , ease: Power1.easeOut, onComplete:reset });
}

function fadeInDown() {

    tl.set(this.target, { opacity: 0 , y: -200 })
    .to(this.target, oneSecSpeed, {opacity: 1, y :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInDownBig() {

    tl.set(this.target, { opacity: 0 , y: -2000 })
    .to(this.target, oneSecSpeed, {opacity: 1, y :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInLeft() {

    tl.set(this.target, { opacity: 0 , x: -500 })
    .to(this.target, oneSecSpeed, {opacity: 1, x :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInLeftBig() {

    tl.set(this.target, { opacity: 0 , x: -2000 })
    .to(this.target, oneSecSpeed, {opacity: 1, x :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInRight() {

    tl.set(this.target, { opacity: 0 , x: 500 })
    .to(this.target, oneSecSpeed, {opacity: 1, x :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInRightBig() {

    tl.set(this.target, { opacity: 0 , x: 2000 })
    .to(this.target, oneSecSpeed, {opacity: 1, x :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInUp() {

    tl.set(this.target, { opacity: 0 , y: 200 })
    .to(this.target, oneSecSpeed, {opacity: 1, y :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeInUpBig() {

    tl.set(this.target, { opacity: 0 , y: 2000 })
    .to(this.target, oneSecSpeed, {opacity: 1, y :0, ease: Power1.easeOut, onComplete:reset });
}

function fadeOut() {

    tl.set(this.target, { opacity: 1 })
    .to(this.target, oneSecSpeed, {opacity: 0 , ease: Power1.easeOut, onComplete:reset });
}

function fadeOutDown() {

    tl.set(this.target, { opacity: 1 , y: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, y :200, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutDownBig() {

    tl.set(this.target, { opacity: 1 , y: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, y :2000, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutLeft() {

    tl.set(this.target, { opacity: 1 , x: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, x :-500, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutLeftBig() {

    tl.set(this.target, { opacity: 1 , x: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, x :-2000, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutRight() {

    tl.set(this.target, { opacity: 1 , x: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, x :500, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutRightBig() {

    tl.set(this.target, { opacity: 1 , x: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, x :2000, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutUp() {

    tl.set(this.target, { opacity: 1 , y: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, y :-200, ease: Power1.easeOut, onComplete:reset });
}

function fadeOutUpBig() {

    tl.set(this.target, { opacity: 1 , y: 0 })
    .to(this.target, oneSecSpeed, {opacity: 0, y :-2000, ease: Power1.easeOut, onComplete:reset });
}

function flip() {

    tl.to(this.target, slowSpeed, {rotationY : -180 , ease: Power1.easeOut})
    .to(this.target, highSpeed, {scale : 1.5, ease: Power1.easeOut})
    .to(this.target, midHighSpeed, {rotationY : -180 , scale : 1 , onComplete: reset});
}

function flipInX() {

    tl.set(this.target, {rotationX : -90 , opacity: 0})
    .to(this.target, 1.5, {rotationX : 0 , opacity: 1 , ease: Back.easeOut.config(4) , onComplete: reset});
}

function flipInY() {

    tl.set(this.target, {rotationY : -120 , opacity: 0})
    .to(this.target, 1.5, {rotationY : 0 , opacity: 1 , ease: Back.easeOut.config(3) , onComplete: reset});
}

function flipOutX() {

    tl.set(this.target, {rotationX : 0 , opacity: 1})
    .to(this.target, oneSecSpeed, {rotationX : 30 , opacity: 1 , ease: Back.easeOut.config(4)})
    .to(this.target, oneSecSpeed, {rotationX : 90 , opacity: 0 , ease: Back.easeOut.config(4) , onComplete: reset});
}

function flipOutY() {

    tl.set(this.target, {rotationY : 0 , opacity: 1})
    .to(this.target, oneSecSpeed, {rotationY : -30 , opacity: 1 , ease: Back.easeOut.config(4)})
    .to(this.target, oneSecSpeed, {rotationY : 90 , opacity: 0 , ease: Back.easeOut.config(4) , onComplete: reset});
}

function lightSpeedIn() {

    tl.set(this.target, { opacity: 0 , skewX: 50 , x: 500 })
    .to(this.target, 2, {opacity: 1, x :0, skewX: 0 , ease: Back.easeOut.config(1), onComplete:reset });

}

function lightSpeedOut() {

    tl.set(this.target, { opacity: 1, x :0, skewX: 0 })
    .to(this.target, 3, {opacity: 0 , skewX: 50 , x: 500 , ease: Back.easeOut.config(1), onComplete:reset });

}

function rotateIn() {

    tl.set(this.target, {rotationZ : -150 , opacity: 0})
    .to(this.target, 1.1, {rotationZ : 0 , opacity: 1 , ease: Power1.easeOut , onComplete: reset});
}

function rotateInDownLeft() {

    tl.set(this.target, {rotationZ : -15 , transformOrigin: "left bottom" , opacity: 0})
    .to(this.target, oneSecSpeed, {rotationZ : 0 , opacity: 1 , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateInDownRight() {

    tl.set(this.target, {rotationZ : 15 , transformOrigin: "right bottom" , opacity: 0})
    .to(this.target, oneSecSpeed, {rotationZ : 0 , opacity: 1 , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateInUpLeft() {

    tl.set(this.target, {rotationZ : 17 , transformOrigin: "left bottom" , opacity: 0})
    .to(this.target, oneSecSpeed, {rotationZ : 0 , opacity: 1 , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateInUpRight() {

    tl.set(this.target, {rotationZ : -17 , transformOrigin: "right bottom" , opacity: 0})
    .to(this.target, oneSecSpeed, {rotationZ : 0 , opacity: 1 , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateOut() {

    tl.set(this.target, {rotationZ : 0 , opacity: 1})
    .to(this.target, slowSpeed, {rotationZ : 200 , opacity: 0 , ease: Power1.easeOut , onComplete: reset});
}

function rotateOutDownLeft() {

    tl.set(this.target, {rotationZ : 0 , opacity: 1})
    .to(this.target, 1.3, {rotationZ : 15 , opacity: 0 , transformOrigin: "left bottom" , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateOutDownRight() {

    tl.set(this.target, {rotationZ : 0 , opacity: 1})
    .to(this.target, 1.3, {rotationZ : -15 , opacity: 0 , transformOrigin: "right bottom" , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateOutUpLeft() {

    tl.set(this.target, {rotationZ : 0 , transformOrigin: "left bottom" , opacity: 1})
    .to(this.target, oneSecSpeed, {rotationZ : -15 , opacity: 0  , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

function rotateOutUpRight() {

    tl.set(this.target, {rotationZ : 0 , transformOrigin: "right bottom" , opacity: 1})
    .to(this.target, oneSecSpeed, {rotationZ : 15 , opacity: 0  , ease: Back.easeOut.config(1.7) , onComplete: reset});
}

