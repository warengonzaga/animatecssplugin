## AnimateCSSPlugin ➡ [Demo](http://warengonzaga.github.io/sites/animatecssplugin.html) [![GitHub release](https://img.shields.io/github/release/WarenGonzaga/AnimateCSSPlugin.svg)](https://github.com/WarenGonzaga/AnimateCSSPlugin/releases) [![Build Status](https://travis-ci.org/WarenGonzaga/AnimateCSSPlugin.svg?branch=master)](https://travis-ci.org/WarenGonzaga/AnimateCSSPlugin) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Built with Gulp](https://img.shields.io/badge/Built%20with-GULP-%23CF4646.svg)](http://gulpjs.com/) [![chat](https://img.shields.io/badge/chat-gitter-green.svg)](https://gitter.im/animatecssplugin/Lobby)
<i>"The Easiest Way to Animate"</i>
***

### For GreenSock (TweenMax & TweenLite) </h3>
<p> AnimateCSSPlugin is a plugin for GreenSock Animation Platform or GSAP. This plugin is replicate of all animation from Animate.css. The reason was they cannot be both use in creating custom animation such as Banner Ads making. So I decided to create a project the could be mimic all of the animation that can be found on Animate.css. I know this is silly idea but this will help others to use both animate.css and gsap with no worries. You can contribute and mimic the animtions from animate.css then make a pull request the I will review it as soon as possible thanks!

<h3> Usage </h3>
<p>Put the plugin in your html inside your head above the link of your GSAP (<u>TweenMax</u> or <u>TweenLite</u>)</p>
<h4> TweenMax: </h4>
```html

 <script src="http://warengonzaga.github.io/cdn/animatecssplugin/animateCSSPlugin.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
 
```

<h4> TweenLite: </h4>
```html

<script src="http://warengonzaga.github.io/cdn/animatecssplugin/animateCSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/easing/EasePack.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenLite.min.js"></script>
 
```

<h3> Example </h3>

<p>This is for using Animate.css - <b>Bounce:</b></p>
```javascript
 TweenMax.to("#obj", 1, {onStart: bounce});
```

<p>This is for using Animate.css - <b>Flash:</b></p>
```javascript
 TweenMax.to("#obj", 1, {onStart: flash});
```

<p>This is for using Animate.css - <b>Rubber Band:</b></p>
```javascript
 TweenMax.to("#obj", 1, {onStart: rubberBand});
```

<h3> Example Script </h3>
```javascript

function animation() {
  TweenMax.to("#objectOne", 1, {onStart: bounce});
  TweenMax.to("#objectTwo", 1, {onStart: flash, delay: 1})
  TweenMax.to("#objectThree", 1, {onStart: shake, delay: 2});
}

```

<h2> Codepen </h2>
Try the codepen demo here! --> http://codepen.io/Waren_Gonzaga/pen/YGGRBz

<h3> Installation </h3>
AnimateCSSPlugin requires [Node.js](https://nodejs.org/) v4+ to run.
Download and extract the [latest release](https://github.com/WarenGonzaga/AnimateCSSPlugin/releases)
Install the dependencies and devDependencies.
```sh
 $ npm install
 $ npm install -g gulp
```

<h3> Development </h3>
What to contribute? That would be great!
AnimateCSSPlugin.js uses Gulp.js + Jade + SASS for faster development. Make a change in your file and instantanously see your updates!

```sh
 $ gulp dev
```

<h3> Building Source </h3>
To build your changes do this:

```sh
 $ gulp build
```

<h3> Contribution </h3>
* To contribute you must have idea on how to use GreenSock Animation Platform.
* To contribute you should have experience in using preprocessors such as Jade and SASS.
* To contribute follow the coding style in the dev/animateCSSPlugin.js so this will make the project neat and consistent. 

It will generate `demo/` and `build/` folders in your directory. Demo folder contains one html file, css file and js file for demo purposes while Build folder contains the minified javascript of AnimateCSSPlugin (AnimateCSSPlugin.min.js) and production javascript version of AnimateCSSPlugin (AnimateCSSPlugin.js). Make pull request for any updates!

<h3> GreenSock Forum </h3>
<b>[GreenSock Forum Link](http://greensock.com/forums/topic/15115-animatecssplugin-is-now-open/)</b>

<h3> Official Blog </h3>
<b>[AnimateCSSPlugin.js Blog Link](http://warengonzaga.com/blog/2016/09/20/animatecssplugin-js-gsap/)</b>

</> with <3 by Waren Gonzaga
