/*
*
* var TweenMaxCDN = "<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'></script>";
* document.write(TweenMaxCDN);
* 
*/

/* global TweenMax, Bounce, Elastic */

"use-strict";

var highSpeed = 0.1,
    midHighSpeed = 0.2,
    mediumSpeed = 0.3,
    normalSpeed = 0.5;
    
function reset() {
    TweenMax.set(this.target, {x: 0, y: 0, z: 0, scale: 1, rotation: 0, transformOrigin: "center center"});
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
    TweenMax.to(this.target, 0.2, {scaleX: 1.2, scaleY: 0.8});
    TweenMax.to(this.target, 0.8, {scaleX: 1, scaleY: 1, delay: mediumSpeed, ease:Elastic.easeOut, onComplete: reset});
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