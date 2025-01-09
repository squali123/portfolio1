// top
$(function () {
    setInterval(function () {
      $("#top ul").delay(3000);
      $("#top ul").animate({
        marginTop: '-30px'
      });
      $("#top ul").delay(3000);
      $("#top ul").animate({
        marginTop: '-60px'
      });
      $("#top ul").animate({
        marginTop: '0px'
      }, 0);
  
    });
  });
// header
  $( document ).ready( function() {
    var jbOffset = $( '#nav' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 30) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#nav' ).addClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $( '#nav' ).removeClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });
// hambutager,overlay
  $('.hambutager_button').click(function(ev){
    ev.preventDefault();
    $(this).toggleClass('active');
    $('.overlay').toggleClass('visible');
    $('.header').toggleClass('overlay_h');
  });
// header_emo
  $(function () {
    $(".basket").click(function () {
      alert("로그인 후 사용해주세요.");
      location.href = "./sub1.html"; 
    });
  });
