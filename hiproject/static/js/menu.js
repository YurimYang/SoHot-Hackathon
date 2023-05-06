

$(document).ready(function (){

  $(".submenu-button").on("click",function(){

    $(this).toggleClass("submenu-opened");
    if ($(this).siblings("ul").hasClass("open")) {
      $(this).siblings("ul").removeClass("open").hide();
    } else {
      $(this).siblings("ul").addClass("open").show();
    }
  })

})
$(".service").on("click",function(){


  $(".overlay").hide();

  $(".main_navigation").toggleClass("open");
})
$(".func").on("click",function(){

    $(".overlay").hide();
  $(".main_navigation").toggleClass("open");
})
// $(".btn_hamburger").on("click",fuction(){
//   console.log("btn");
//
//   $(".main_navigation").toggleClass("open");
// })
