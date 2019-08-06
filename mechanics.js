$(document).ready(function() {
    $('html, body').animate({
      scrollTop: $("#yadyad").offset().top
    }, 1000);
  
    $('html, body').animate({
      scrollTop: $("#yuri").offset().top
    }, 2000);

  });

setTimeout( function newWindow( ){
  $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
    window.location.replace("Mypage/Mypage.html");
  }
});
},1000)

