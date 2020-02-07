/*=================================
=            baseClass            =
=================================*/

APP.baseClass = function ($el)
{
  var that    = this;
  that.$el    = $el;
  that.toLoad = 0;

  that.safeInit = function ()
  {
    that.initIfExists();
  }

  that.initIfExists = function ()
  {
    if(!!$el.length)
    {
      that.init();
    }
  }

  /**
   *
   * Active/Disabled animation all icon's
   *
   */

  that.animateOrNot = function (obj)
  {
    enquire.register("screen and (max-width: 1023px)",
    {
      match : function ()
      {
        obj.finish();
        obj.play();
      }
    });

    if(APP.isMobile )
    {
      obj.finish();
      obj.play()
    }
  }

  return that;
}
