window.APP      = {};
APP.components  = {};
APP.controllers = {};
APP.model       = {};

// Setting's vivus.js
var duration   = 200;
var pathTiming = Vivus.EASE;
var animTiming = Vivus.EASE_OUT;

$(document).ready(function() {
  $(window).on("fontLoaded", initApp);
  window.enableFontLoadedDispatcher();

  initModules();
});

function initModules() {

}

function initApp() {
  $(window).off("fontLoaded", initApp);

  /*==================================
  =            Components            =
  ==================================*/

  new APP.menuComplete( $('.btn-responsive') );
}
