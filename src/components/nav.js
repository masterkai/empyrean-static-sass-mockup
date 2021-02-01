import './import-jquery'
const menuWidth = 200
export default ($(function () {
// click event
  $('.menuToggle').on('click mouseenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log($(this));
    $(this).addClass('activated').next().show().addClass('activated');
  });
  $('.itemLevel1').on('click mouseenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log($(this));
    $(this).addClass('activated').next().show().addClass('activated').css({left:menuWidth});
  });
  $('.itemLevel2').on('click mouseenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log($(this));
    $(this).addClass('activated').next().show().addClass('activated').css({left:menuWidth});
  });
  $('.itemLevel3').on('click mouseenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log($(this));
    $(this).addClass('activated').next().show().addClass('activated').css({left:menuWidth});
  });

// leave event
  $('.menuToggle').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);
    if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-1') || $(theObj).parent().hasClass('nav-menu-1'))) {
      $(thisObi).removeClass('activated').next().hide().removeClass('activated');
    }
  });

  $('.itemLevel1').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);
    if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-2') || $(theObj).parent().hasClass('nav-menu-2'))) {
      $(thisObi).removeClass('activated').next().hide().removeClass('activated');
    }
  });
  $('.itemLevel2').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);
    if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-3') || $(theObj).parent().hasClass('nav-menu-3'))) {
      $(thisObi).removeClass('activated').next().hide().removeClass('activated');
    }
  });
  $('.itemLevel3').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);
    if (!($(theObj).hasClass('activated') || $(theObj).hasClass('nav-menu-4') || $(theObj).parent().hasClass('nav-menu-4'))) {
      $(thisObi).removeClass('activated').next().hide().removeClass('activated');
    }
  });

// nav-menu-level leave event
  $('.nav-menu-1').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);
    // console.log(theObj);
    if (!$(theObj).hasClass('activated')) {
      $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
    }
  });
  $('.nav-menu-2').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);

    if (!$(theObj).hasClass('activated')) {
      $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
    }
  });
  $('.nav-menu-3').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);

    if (!$(theObj).hasClass('activated')) {
      $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
    }
  });
  $('.nav-menu-4').on('mouseleave', function (e) {
    const thisObi = $(this), theObj = $(e.relatedTarget);

    if (!$(theObj).hasClass('activated')) {
      $(thisObi).removeClass('activated').hide().prev().removeClass('activated');
    }
  });

}))