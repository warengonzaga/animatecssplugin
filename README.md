## AnimateCSSPlugin ➡ [Demo Here](http://warengonzaga.github.io/sites/animatecssplugin.html) [![Build Status](https://travis-ci.org/WarenGonzaga/AnimateCSSPlugin.svg?branch=master)](https://travis-ci.org/WarenGonzaga/AnimateCSSPlugin)
### For GreenSock (TweenMax & TweenLite) </h3>
<p> AnimateCSSPlugin is a plugin for GreenSock Animation Platform or GSAP. This plugin is replicate of all animation from Animate.css. The reason was they cannot be both use in creating custom animation such as Banner Ads making. So I decided to create a project the could be mimic all of the animation that can be found on Animate.css. I know this is silly idea but this will help others to use both animate.css and gsap with no worries. You can contribute and mimic the animtions from animate.css then make a pull request the I will review it as soon as possible thanks!

<h3> Usage </h3>
<p>Put the plugin in your html inside your head above the link of your GSAP (<u>TweenMax</u> or <u>TweenLite</u>)</p>
<h4> TweenMax: </h4>
```html

 <script src="http://warengonzaga.github.io/cdn/animatecssplugin/0.2.2/animateCSSPlugin.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
 
```

<h4> TweenLite: </h4>
```html

<script src="http://warengonzaga.github.io/cdn/animatecssplugin/0.2.2/animateCSSPlugin.min.js"></script>
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

<p data-height="361" data-theme-id="0" data-slug-hash="YGGRBz" data-default-tab="js,result" data-user="Waren_Gonzaga" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Waren_Gonzaga/pen/YGGRBz/">AnimateCSSPlugin for GSAP</a> by Waren Gonzaga (<a href="http://codepen.io/Waren_Gonzaga">@Waren_Gonzaga</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<h3> GreenSock Forum </h3>
<b>[GreenSock Forum Link](http://greensock.com/forums/topic/15115-animatecssplugin-is-now-open/)</b>

<h3> Official Blog </h3>
<b>[AnimateCSSPlugin.js Blog Link](http://warengonzaga.com/blog/2016/09/20/animatecssplugin-js-gsap/)</b>

<h3> Contribution </h3>
<p> * To contribute you must have idea on how to use GreenSock Animation Platform. </p>
<p> * To contribute you should have experience in Jade (html preprocessor) this will help the development faster for the index. </p>
<p> * To contribute follow the coding style in the dev/animateCSSPlugin.js so this will make the project neat and consistent. </p>

<h4> Public Chat (for animateCSSPlugin discussion and support) </h4>
<center><a href="https://tlk.io/animateCSSPlugin" target="_blank" title="Go to group discussion?
"><b>Click This</b></a></center>
<p><i>Coded with <font color="red"><b> <3 </b></font> by Waren Gonzaga</i></p>