//sub_uc_list02.html 탭 네비게이션 슬라이드 움직임
$(".tab_list li").click(function (e) {
  // make sure we cannot click the slider
  if ($(this).hasClass(".slider_btn") && $(this).hasClass(".golist_btn")) {
    return;
  }

  /* Add the slider movement */

  // what tab was pressed
  let whatTab = $(this).index();

  // Work out how far the slider needs to go
  let howFar = 142 * whatTab - 142;

  $(".slider_btn").css({
    left: howFar + "px",
  });
  if ($(".tab_list li").hasClass("on")) {
    $(".tab_list li").removeClass("on");
  }
  $(this).addClass("on");
});

// to top버튼
(() => {
  const scrollTop = () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "TOP";
    scrollBtn.setAttribute("class", "to_top");
    document.body.appendChild(scrollBtn);

    const scrollBtnDisplay = () => {
      window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);

    const scrollWindow = () => {
      if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 50);
          scrollWindow();
        }, 10);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();
})();

// 메인화면 텍스트 슬라이드
$(document).ready(function () {
  var swiper = new Swiper(".main_txt_slide", {
    effect: "flip",
    grabCursor: true,
    loop: true,

    autoplay: {
      delay: 2000,
      //   disableOnInteraction: false,
    },
  });
});
