/**
 * This is script
 */


/*var TweenMaxCDN = "<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'></script>";
 
document.write(TweenMaxCDN);*/

var highSpeed = 0.1,
    mediumSpeed = 0.3,
    normalSpeed = 0.5;
 
function bounce() {
    console.log("Bounce!");
    TweenMax.to(this.target, mediumSpeed, {y: "-=30px"});
    TweenMax.to(this.target, normalSpeed, {delay: 0.2, y: 0, ease:Bounce.easeOut});
}

function flash() {
    console.log("Flash!");
    TweenMax.to(this.target, mediumSpeed, {alpha: 0});
    TweenMax.to(this.target, mediumSpeed, {delay: 0.3, alpha: 1});
    TweenMax.to(this.target, mediumSpeed, {delay: 0.6, alpha: 0});
    TweenMax.to(this.target, mediumSpeed, {delay: 0.9, alpha: 1});
}

function pulse() {
    console.log("Pulse!");
    TweenMax.to(this.target, normalSpeed, {scale: 1.1});
    TweenMax.to(this.target, normalSpeed, {delay: 0.3, scale: 1});
}

function rubberBand() {
    console.log("Rubber Band!");
    TweenMax.to(this.target, 0.2, {scaleX: 1.2, scaleY: 0.8});
    TweenMax.to(this.target, 0.8, {scaleX: 1, scaleY: 1, delay: mediumSpeed, ease:Elastic.easeOut});
}