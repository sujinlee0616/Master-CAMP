// Javascript 실습 파일

// $(document).keyup(function(e){
//   if(e.keyCode === 27){
//     $('.grid').toggleClass('grid-show');
//   }
// });

// window.resize(function(){
//   location.reload();
// });

var viewport = window.matchMedia('(max-width: 999px)');


//모바일일 경우만 실행
if(viewport.matches){
  var nav = $('.navigation');
  var menu = $('.menu');
  var btn = $('<button class="btn-menu" aria-label="메인 메뉴 열기"></button>');
  var bar_top = $('<span class="menubar menubar-top"></span>');
  var bar_middle = $('<span class="menubar menubar-middle"></span>');
  var bar_bottom = $('<span class="menubar menubar-bottom"></span>');
  var item = $('.menu > li');
  var text = $('.menu-item-text');

  btn.append(bar_top, bar_middle, bar_bottom);
  nav.prepend(btn);
  item.addClass('menu-item');
  item.attr('tabindex', '0');
  text.addClass('icon-plus');

  btn.click(function () {
    $(this).toggleClass('btn-menu-act');
    menu.toggleClass('menu-act');
    if ($(this).hasClass('btn-menu-act')) {
      $(this).attr('aria-label', '메인 메뉴 닫기');
    } else {
      $(this).attr('aria-label', '메인 메뉴 열기');
    }
  });


  // item.on('click', function(){
  //   item.removeClass('menu-item-act');
  //   $(this).addClass('menu-item-act');
  // });

  //엔터키(키코드13번)누르거나 또는(||) 스페이스바 누를 때 서브메뉴 나오도록 
  // item.on('keyup', function (e) {
  //   if(e.keyCode === 13 || e.keyCode === 32){
  //     item.removeClass('menu-item-act');
  //     $(this).addClass('menu-item-act');
  //   }

    // 위의 두 개 한 번에 쓰고 싶다면 이렇게 쓰면 된다. 
  item.on('click keyup', function(e){
    if(e.type === 'click' || e.keyCode === 13 || e.keyCode === 32){
      item.removeClass('menu-item-act');
      $(this).addClass('menu-item-act');
      if($(this).hasClass('menu-item-act')){
        text.removeClass('icon-minus').addClass('icon-plus');
        $(this).find(text).removeClass('icon-plus').addClass('icon-minus');
      }
    }  
  });


  menu.focusin(function(){
    menu.addClass('menu-act');
    btn.addClass('btn-menu-act');
  })

  menu.focusout(function(){
    menu.removeClass('menu-act');
    btn.removeClass('btn-menu-act');
  });



}


