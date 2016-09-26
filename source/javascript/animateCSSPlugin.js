/**
 * This is script
 */


/*
*
* var TweenMaxCDN = "<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'></script>";
* document.write(TweenMaxCDN);
* 
*/

"use-strict";

var highSpeed = 0.1,
    midHighSpeed = 0.2,
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
    TweenMax.to(this.target, normalSpeed, {x: 0, delay: highSpeed * 9});
}

function swing() {
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "+=10"});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "-=20", delay: mediumSpeed});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "+=15", delay: mediumSpeed * 2});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "-=15", delay: mediumSpeed * 3});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: 0, delay: mediumSpeed * 4});
}

function tada() {
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "+=10", scale: 0.9});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "-=20", scale: 1.1, delay: highSpeed});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "+=20", delay: highSpeed * 2});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "-=20", delay: highSpeed * 3});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "+=20", delay: highSpeed * 4});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: "-=20", delay: highSpeed * 5});
    TweenMax.to(this.target, mediumSpeed, {rotationZ: 0, scale: 1, delay: highSpeed * 6});
}