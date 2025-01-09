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
  // 상품 갤러리
$(function(){
  //이미지 변경 함수 호출
  $(".image1").click(function(){
      $(".main_image").attr("src", "./image/Detailed_page/gI1.jpg");//변경될 이미지 주소를 넣어주세요
  });
  $(".image2").click(function(){
      $(".main_image").attr("src", "./image/Detailed_page/GI2.jpg");//변경될 이미지 주소를 넣어주세요
  });
  $(".image3").click(function(){
      $(".main_image").attr("src", "./image/Detailed_page/GI3.jpg");//변경될 이미지 주소를 넣어주세요
  });
  $(".image4").click(function(){
      $(".main_image").attr("src", "./image/Detailed_page/GI4.jpg");//변경될 이미지 주소를 넣어주세요
  });
  $(".imgbox>li").click(function(){
      $(this).addClass("on").siblings().removeClass("on");//변경될 이미지 주소를 넣어주세요
  });
});
// price
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="up.jpg"></div><div class="quantity-button quantity-down"><img src="down.jpg"></div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
//인풋값 받아와서 총가격 계산하기
$(function () {
  //총 가격 처음상태 입력하기
  var price = $(".price span").text();
  $(".total_price span").text(price);


  //숫자 조절시에 계산하기
  price = price.replace(/[^\d]+/g, "");
  $(".quantity-button").click(function () {
    //인풋 숫자값 가져오기
    var CountNumber = $(".numb_box input").val();
    //인풋 숫자값으로 계산
    var totalNumb = price * CountNumber;
    totalNumb = totalNumb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    $(".total_price span").text(totalNumb);//콤마 붙여서 총가격에 입력
  });

});

// select 클릭시 price 값 보이기
$(function(){
  $("#price_wrap").hide();
  $("select").on("change",function(){
    $("#price_wrap").show();
  });
  $(".close").click(function(){
    $("#price_wrap").hide();
  });
});

// scroll 메뉴
$('.menu li a').on('click', function(event) {
  $(this).parent().siblings().children().removeClass('active');
  $(this).addClass('active');
});
// $('.menu>li').on('click', function(event) {
//     $(this).siblings().removeClass('active');
//     $(this).addClass('active');
// });

$(window).on('scroll', function() {
  $('.section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top) {
          var id = $(this).attr('id');
          $('.menu li a').removeClass('active');
          $('.menu li a[href=#'+ id +']').addClass('active');
      }
  });
});

$(document).ready(function () {
  var jbOffset = $('#tabProduct').offset();
  /*선택자는 본인 구조에 맞게 수정*/
  $(window).scroll(function () {
    if ($(document).scrollTop() > 1300) {//적용이 시작되는 높이
      $('#tabProduct').addClass("fix");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
    else {
      $('#tabProduct').removeClass("fix");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
  });
});

// 아코디언
$(function(){
  $("#section2> ul> li").click(function(){
    $(this).children(".text_info").slideToggle();
    $(this).siblings().children(".text_info").slideUp();
  });
});
$(function(){
  $("#section2> ul> li").click(function(){
    $(this).toggleClass("turn");
    
    if($(this).hasClass("turn")===true){
        $(this).siblings().removeClass("turn");
      
    }

  });
});
// 알림창
$(function () {
  $(".prbuton1").click(function () {
    alert("회원에게만 글쓰기권한이 있습니다..");
    location.href = "./sub1.html"; 
  });
});
$(function () {
  $(".heart_h2").click(function () {
    alert("로그인 후 사용해주세요.");
    location.href = "./sub1.html"; 
  });
});

// 고정버튼
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 1000) {//아이콘이 나타나길 원하는 높이를 설정하세요
      $('.top_up').fadeIn();//나타날 아이콘 클래스 수정!
  } else {
      $('.top_up').fadeOut();//나타날 아이콘 클래스 수정!
  }
});
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 2000) {//아이콘이 나타나길 원하는 높이를 설정하세요
      $('.top_down').fadeIn();//나타날 아이콘 클래스 수정!
  } else {
      $('.top_down').fadeOut();//나타날 아이콘 클래스 수정!
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 500);//움직이는 시간 조정
  return false;
  }
  }
  });
  });
  
// 리뷰 select
$(function(){
   $(".filter_dropdown").hide();
  $(".symbol1").click(function(){
    $(".filter_dropdown1").toggle();
  });
  $(".symbol2").click(function(){
    $(".filter_dropdown2").toggle();
  });
  $(".symbol3").click(function(){
    $(".filter_dropdown3").toggle();
  });
});