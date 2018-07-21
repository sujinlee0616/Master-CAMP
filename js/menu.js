// Javascript 실습 파일

// $(document).keyup(function(e){
//   if(e.keyCode === 27){
//     $('.grid').toggleClass('grid-show');
//   }
// });

var btn = $('.btn-menu');

btn.click(function(){
  $(this).toggleClass('btn-menu-act');
});