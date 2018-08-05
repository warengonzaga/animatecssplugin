## AnimateCSSPlugin [![Developer](https://img.shields.io/badge/Developed%20by-WarenGonzaga-blue.svg)](https://github.com/WarenGonzaga/) [![GitHub release](https://img.shields.io/github/release/WarenGonzaga/AnimateCSSPlugin.svg)](https://github.com/WarenGonzaga/AnimateCSSPlugin/releases) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
<i>"The Easiest Way to Animate"</i> - **[Demo](http://warengonzaga.github.io/sites/animatecssplugin.html)**
***
[![Build Status](https://travis-ci.org/WarenGonzaga/AnimateCSSPlugin.svg?branch=master)](https://travis-ci.org/WarenGonzaga/AnimateCSSPlugin) [![devDependencies Status](https://david-dm.org/WarenGonzaga/AnimateCSSPlugin/dev-status.svg)](https://david-dm.org/WarenGonzaga/AnimateCSSPlugin?type=dev) [![GitHub fork](https://img.shields.io/github/forks/WarenGonzaga/AnimateCSSPlugin.svg)](https://github.com/WarenGonzaga/AnimateCSSPlugin)
[![GitHub star](https://img.shields.io/github/stars/WarenGonzaga/AnimateCSSPlugin.svg)](https://github.com/WarenGonzaga/AnimateCSSPlugin) [![Built with Gulp](https://img.shields.io/badge/Built%20with-GULP-%23CF4646.svg)](http://gulpjs.com/) [![chat](https://img.shields.io/badge/chat-gitter-green.svg)](https://gitter.im/animatecssplugin/Lobby)
[![Liberapay giving](http://img.shields.io/liberapay/receives/WarenGonzaga.svg?logo=liberapay)](https://github.com/WarenGonzaga/AnimateCSSPlugin)

### For GreenSock (TweenMax & TweenLite) </h3>
<p>AnimateCSSPlugin is a plugin for GreenSock Animation Platform or GSAP. This plugin is a replicate of all animations from Animate.css. The reason was they cannot be both used in creating custom animation such as Banner Ads making. So I decided to create a project that could be mimic all of the animations that can be found on Animate.css. I know this is a silly idea but this will help others to use both animate.css and GSAP with no worries. You can contribute and mimic the animations from animate.css then make a pull request then I will review it as soon as possible thanks!</p>

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

1. AnimateCSSPlugin requires [Node.js](https://nodejs.org/) v7+ to run.
2. Download and extract the [latest release](https://github.com/WarenGonzaga/AnimateCSSPlugin/releases).
3. Install the dependencies and devDependencies.

```sh
 $ npm install
 $ npm install -g gulp
```

<h3> Development </h3>
What to contribute? That would be great!
AnimateCSSPlugin.js uses Gulp.js + Pug.js (formely Jade) + SASS for faster development. Make a change in your file and instantanously see your updates!

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
* To contribute you should have experience in using preprocessors such as Pug.js (formely Jade) and SASS.
* To contribute follow the coding style in the dev/animateCSSPlugin.js so this will make the project neat and consistent.

<h4>Note</h4>

It will generate `demo/` and `build/` folders in your directory. **Demo** folder contains one html file, css file and js file for demo purposes while **Build** folder contains the minified javascript of AnimateCSSPlugin (AnimateCSSPlugin.min.js) and production javascript version of AnimateCSSPlugin (AnimateCSSPlugin.js). After executing the `gulp build` command please do a `gulp update` so that the downloadable files are always updated. The downloadable files are the animateCSSPlugin files in the root of this project. Always pull the latest copy of this repo to prevent any problem while contributing. Make pull request for any updates!

<h3> GreenSock Forum </h3>
GreenSock Forum - http://greensock.com/forums/topic/15115-animatecssplugin-is-now-open/

<h3>Donate</h3>
If you love this project please consider to support the development by donating. We spend our time just to save your time! Be a sponsor or backer of this project.<br>

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/warengonzagaofficial)
[![Donate](https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg)](https://www.buymeacoffee.com/warengonzagadev)<br>
**Bitcoin:** 39qo5h3aic9K2aTFRzdGSVNuqtS8uMBKJu

<h3>Author</h3>

AnimateCSSPlugin is Developed and Maintained by **Waren Gonzaga**

* **Facebook:** https://facebook.com/warengonzagaofficialpage
* **Twitter:** https://twitter.com/waren_gonzaga
* **Email:** warengonzaga.dev@gmail.com

In Collaboration with [SakhirAtwi](https://github/SakhirAtwi) and awesome help from [contributors](https://github.com/WarenGonzaga/AnimateCSSPlugin/graphs/contributors).

***
**</>** with **<3** by **Waren Gonzaga**
