APP.menuComplete = function ($el) {

  var self        = this;
  var that        = APP.baseClass($el);
  var menu        = $(".menu-toolbar");
  var menuH       = menu.height();
  var fixedShape  = false;

  self.init = function () {
    shapeMenuAdapter();
    enquires();
  }

  // Acessar Minha Conta
  var icon_0 = new Vivus('resp-svg-0', {
    type               : 'delayed',
    duration           : duration,
    pathTimingFunction : pathTiming,
    animTimingFunction : animTiming,
    file     : 'img/icons/svg-54.svg',
    onReady  : function (myVivus) {
      myVivus.el.setAttribute('stroke', '#FFFFFF');
      myVivus.el.setAttribute('fill', '#FFFFFF');
      myVivus.el.setAttribute('fill-opacity', '0');

      that.animateOrNot(myVivus);
    }
  }, function (obj) {
    obj.el.style.transition = 'fill-opacity 0.75s';
    obj.el.setAttribute('fill-opacity', '1');
  });

  // Pessoa Física
  var icon_1 = new Vivus('resp-svg-1', {
    type               : 'delayed',
    duration           : duration,
    pathTimingFunction : pathTiming,
    animTimingFunction : animTiming,
    file     : 'img/icons/svg-34.svg',
    onReady  : function (myVivus) {
      myVivus.el.setAttribute('stroke', '#FFFFFF');
      myVivus.el.setAttribute('fill', '#FFFFFF');
      myVivus.el.setAttribute('fill-opacity', '0');

      myVivus.stop();
      that.animateOrNot(myVivus);
    }
  }, function (obj) {
    obj.el.style.transition = 'fill-opacity 0.75s';
    obj.el.setAttribute('fill-opacity', '1');
  });

  // Corporate
  var icon_2 = new Vivus('resp-svg-2', {
    type               : 'delayed',
    duration           : duration,
    pathTimingFunction : pathTiming,
    animTimingFunction : animTiming,
    file     : 'img/icons/svg-35.svg',
    onReady  : function (myVivus) {
      myVivus.el.setAttribute('stroke', '#FFFFFF');
      myVivus.el.setAttribute('fill', '#FFFFFF');
      myVivus.el.setAttribute('fill-opacity', '0');

      myVivus.stop();
      that.animateOrNot(myVivus);
    }
  }, function (obj) {
    obj.el.style.transition = 'fill-opacity 0.75s';
    obj.el.setAttribute('fill-opacity', '1');
  });

  // Agronegócios
  var icon_3 = new Vivus('resp-svg-3', {
    type               : 'delayed',
    duration           : duration,
    pathTimingFunction : pathTiming,
    animTimingFunction : animTiming,
    file     : 'img/icons/svg-36.svg',
    onReady  : function (myVivus) {
      myVivus.el.setAttribute('stroke', '#FFFFFF');
      myVivus.el.setAttribute('fill', '#FFFFFF');
      myVivus.el.setAttribute('fill-opacity', '0');

      myVivus.stop();
      that.animateOrNot(myVivus);
    }
  }, function (obj) {
    obj.el.style.transition = 'fill-opacity 0.75s';
    obj.el.setAttribute('fill-opacity', '1');
  });

  // O Original
  var icon_4 = new Vivus('resp-svg-4', {
    type               : 'delayed',
    duration           : duration,
    pathTimingFunction : pathTiming,
    animTimingFunction : animTiming,
    file     : 'img/icons/svg-37.svg',
    onReady  : function (myVivus) {
      myVivus.el.setAttribute('stroke', '#FFFFFF');
      myVivus.el.setAttribute('fill', '#FFFFFF');
      myVivus.el.setAttribute('fill-opacity', '0');

      myVivus.stop();
      that.animateOrNot(myVivus);
    }
  }, function (obj) {
    obj.el.style.transition = 'fill-opacity 0.75s';
    obj.el.setAttribute('fill-opacity', '1');
  });

  // +
  var icon_5 = new Vivus('resp-svg-5', {
    type               : 'delayed',
    duration           : duration,
    pathTimingFunction : pathTiming,
    animTimingFunction : animTiming,
    file     : 'img/icons/svg-38.svg',
    onReady  : function (myVivus) {
      myVivus.el.setAttribute('stroke', '#FFFFFF');
      myVivus.el.setAttribute('fill', '#FFFFFF');
      myVivus.el.setAttribute('fill-opacity', '0');

      myVivus.stop();
      that.animateOrNot(myVivus);
    }
  }, function (obj) {
    obj.el.style.transition = 'fill-opacity 0.75s';
    obj.el.setAttribute('fill-opacity', '1');
  });

  $('.btn-responsive').on("click touchend", openMenu );

  function openMenu (e) {
    $(this).toggleClass("toggle-icon");
    toggleModal();

    if(e) e.preventDefault();
  }

  function enquires () {
    enquire.register("screen and (min-width: 1001px)", {
      match : function () {
        $(".menu-toolbar").css({ 'height': '101px' });

        menu.find(".macro").hover(function () {
          var h_sub = $(this).find(".sub-menu").height();

          $(this).find(".sub-menu").velocity("stop", true).velocity({
            opacity  : 1
          }, {
            delay    : 200,
            duration : 250,
            display  : 'block'
          });

          $(".menu-toolbar").velocity("stop", true).velocity({
            height: 101 + h_sub
          }, {
            duration : 400,
            easing   : 'easeInOutQuint',
            display  : 'block'
          });
        }, function () {
          $(this).find(".sub-menu").velocity("stop", true).velocity({
            opacity  : 0
          }, {
            duration : 100,
            display  : 'none'
          });

          $(".menu-toolbar").velocity("stop", true).velocity({
            height  : 101
          }, {
            duration : 400,
            easing   : 'easeInOutQuint',
            display  : 'none'
          });
        });

        $(document).on('click touchstart', function (e) {
          if (!$(e.target).closest('.menu-toolbar').length) {
            $(".menu-toolbar").find(".sub-menu").velocity("stop", true).velocity({
              opacity  : 0
            }, {
              duration : 100,
              display  : 'none'
            });

            $(".menu-toolbar").find(".access-my-account .links").slideUp('400', function () {
              $(".access-my-account").removeClass('is-open-list');
              $(".menu-toolbar").velocity("stop", true).velocity({
                height   : 101
              }, {
                duration : 400,
                easing   : 'easeInOutQuint'
              });
            });
          }
        });
      },
      unmatch : function () {
        $(".menu-toolbar").css({ 'height': '61px' });

        $(document).on('click touchstart', function (e) {
          if (!$(e.target).closest('.menu-toolbar').length) {
            $(".menu-toolbar").find(".access-my-account .links").slideUp('400', function () {
              $(".access-my-account").removeClass('is-open-list');
              $(".menu-toolbar").velocity("true", true).velocity({
                height   : 61
              }, {
                duration : 400,
                easing   : 'easeInOutQuint'
              });
            });
          }
        });
      }
    });
  }

  function shapeMenuAdapter () {
    menu.find(".menu__item").hover(function (e) {
      var h_sub = $(this).find(".sub-menu").height();

      menu.velocity("stop", true).velocity({
        height: 101 + h_sub
      }, {
        duration : 400,
        easing   : 'easeInOutQuint'
      });
    }, function () {
      menu.velocity("stop", true).velocity({
        height: 101
      }, {
        duration : 500,
        easing   : 'easeInOutQuint'
      });
    });
  }

  that.animateInVivus = function () {
    // icon_0.play();
    icon_1.play();
    icon_2.play();
    icon_3.play();
    icon_4.play();
    icon_5.play();
  }

  that.animateOutVivus = function () {
    // icon_0.play(-1);
    icon_1.play(-1);
    icon_2.play(-1);
    icon_3.play(-1);
    icon_4.play(-1);
    icon_5.play(-1);
  }

  /*----------  Settings Modal  ----------*/

  toggleModal = function () {
    if( $(".btn-responsive").hasClass("toggle-icon") ) {
      $(".menu-toolbar").removeClass("overMenu");
      $("body").addClass("body-hidden body-fixed");

      $(".menu-toolbar").removeClass('overMenu');
      $(".menu-toolbar").addClass("hide-menu");

      $(".responsive-modal").css("position","fixed").scrollTop(0).stop().animate({ height: '100%' }, 700, "easeInOutQuint");
      $(".responsive-modal").find(".box-list").stop().animate({ opacity: 1 }, 750, "easeInOutQuint", function ()
      {
        that.animateInVivus();
      });
    } else {
      $(".responsive-modal").find(".box-list").stop().animate({ opacity: 0 }, 700, "easeInOutQuint", function ()
      {
        $(".menu-toolbar").addClass("overMenu");
        $(".menu-toolbar").removeClass('hide-menu');
      });
      closeModal();
    }
  }

  function closeModal () {
    $("body").removeClass("body-hidden body-fixed");

    $(".responsive-modal").stop().animate({ height: '0' }, 700, "easeInOutQuint", function () {
      $(".responsive-modal").scrollTop(0);

      if(APP.model.fixedShape)
      {
        $(".menu-toolbar").addClass('overMenu');
      }
    });
  }

  self.init();
}
