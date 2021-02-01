import './import-jquery'

export default ($(function () {

  const state = {
    opened: false,
    masked: true
  };

  $(function () {

    $('.mobile-nav-menu-li-title-1').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').next().hide();
        return;
      }
      if($(this).hasClass('contentNO')){
        return;
      }

      $('.mobile-nav-menu-li-title-2.active').removeClass('active').next().hide();

      $('.mobile-nav-menu-li-title-1.active').removeClass('active').next().hide();
      $(this).addClass('active').next().show();

    });

    $('.mobile-nav-menu-li-title-2').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').next().hide();
        return;
      }
      if($(this).hasClass('contentNO')){
        return;
      }

      $('.mobile-nav-menu-li-title-2.active').removeClass('active').next().hide();
      $(this).addClass('active').next().show();

    });

    $('.mobile-nav-menu-li-title-3').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').next().hide();
        return;
      }
      if($(this).hasClass('contentNO')){
        return;
      }

      $('.mobile-nav-menu-li-title-3.active').removeClass('active').next().hide();
      $(this).addClass('active').next().show();

    });

    $('.mobile-nav-menu-li-title-4').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').next().hide();
        return;
      }
      if($(this).hasClass('contentNO')){
        return;
      }

      $('.mobile-nav-menu-li-title-4.active').removeClass('active').next().hide();
      $(this).addClass('active').next().show();

    });


    $('.contentsMask').click(function () {
      subMenuToggle();
    });

    $('#mobileSideMenu').click(function () {
      $('.contentsMask .side-menu-close').addClass('active')
      subMenuToggle();
    });

    function subMenuToggle() {
      const type = 1;

      if (!state.opened) {
        ////$('.subMenu').css('top', 0);
        //if (type == "1" || type == "3") {
        //    $('.subMenu').css('position', 'fixed');
        //    $('.subMenu').css('height', '100%');
        //} else {
        //    $('.subMenu').css('position', 'absolute');
        //    $('.subMenu').css('height', 'auto');
        //    $(window).scrollTop(0);
        //}
      }

      //$('.subMenu').css('left', opened ? -240 : 0);
      $('.subMenu').css({
        'transform': 'translateX(' + (state.opened ? -240 : 0) + 'px)',
        '-webkit-transform': 'translateX(' + (state.opened ? -240 : 0) + 'px)',
        '-moz-transform': 'translateX(' + (state.opened ? -240 : 0) + 'px)',
        '-ms-transform': 'translateX(' + (state.opened ? -240 : 0) + 'px)',
        '-o-transform': 'translateX(' + (state.opened ? -240 : 0) + 'px)'
      });

      if (!state.opened) {
        //if (type == "1" || type == "2") {
        //$('.mainContents').css('left', state.opened ? 0 : 240);
        $('.mainContents').css({
          'transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-webkit-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-moz-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-ms-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-o-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)'
        });
        //}
      } else {
        //$('.mainContents').css('left', state.opened ? 0 : 240);
        $('.mainContents').css({
          'transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-webkit-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-moz-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-ms-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
          '-o-transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)'
        });
      }

      if (state.masked) {
        if (state.opened) {
          $('.contentsMask').hide();
        } else {
          $('.contentsMask').show();
        }
      }
      if (!state.opened) {
        $('#mobileSideMenu').addClass('active');
      } else {
        $('#mobileSideMenu').removeClass('active');
      }
      state.opened = !state.opened;
    }

    $(window).on("load", resizeMainContents);
    $(window).on("resize", resizeMainContents);
    $(window).on("orientationchange", resizeMainContents);

    function resizeMainContents() {
      let prewinWidth = 768;
      const winxs2 = 992;
      const ww = $(window).width();

      if (ww != prewinWidth) {
        if (ww > winxs2 && prewinWidth <= winxs2) {
          //$('.mainContents').css('left', 0);
          $('.mainContents').css({
            'transform': 'translateX(' + (state.opened ? 0 : 240) + 'px)',
            '-webkit-transform': 'translateX(0px)',
            '-moz-transform': 'translateX(0px)',
            '-ms-transform': 'translateX(0px)',
            '-o-transform': 'translateX(0px)'
          });
        } else if (ww <= winxs2 && prewinWidth > winxs2) {
          //$('.mainContents').css('left', state.opened ? 240 : 0);
          $('.mainContents').css({
            'transform': 'translateX(' + (state.opened ? 240 : 0) + 'px)',
            '-webkit-transform': 'translateX(' + (state.opened ? 240 : 0) + 'px)',
            '-moz-transform': 'translateX(' + (state.opened ? 240 : 0) + 'px)',
            '-ms-transform': 'translateX(' + (state.opened ? 240 : 0) + 'px)',
            '-o-transform': 'translateX(' + (state.opened ? 240 : 0) + 'px)'
          });
        }
      }
      prewinWidth = ww;
      //console.log($('.subMenu').height())
      //$('.subMenu').height($(window).height() - 65);
      //console.log($(window).height());
      //console.log($('.subMenu').height());

    }
  });
}))