// to top버튼
(() => {
  const scrollTop = () => {


    const scrollaBtn = document.createElement("a");
    const scrollBtn = document.createElement("button");


    scrollBtn.innerHTML = "TOP";
    scrollaBtn.setAttribute("href","#top")
    scrollBtn.setAttribute("class", "to_top");
    scrollaBtn.appendChild(scrollBtn);
    document.body.appendChild(scrollaBtn);

    const scrollBtnDisplay = () => {
      window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);









    // scroll-behavior: smooth;와 중첩되지 않도록 scrollto 제거


    // const scrollWindow = () => {
    //   // console.log("scroll");
    //   // console.log(window.scrollY);
    //   if (window.scrollY != 0) {
    //     // console.log("func");
    //     setTimeout(function () {
    //       // console.log("func2");
    //       window.scrollTo(0, window.scrollY-50);
    //        // window.scrollTo(0,0);
    //       scrollWindow();
    //     }, 1);
    //   }
    // };
    // scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();
})();


// 메인화면 텍스트 슬라이드
$(document).ready(function () {
  // scrollTop();
  // 부트스트랩 메인 슬라이드
  $(function () {
    $(".main_txt_slide").carousel({
      interval: 3000,
      pause: "hover",
    });
  });
  // 슬라이트 텍스트 애니메이션
  $(".main_txt01_lin00").waypoint(
    function () {
      $(".main_txt01_lin00").addClass("animated delay05 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt01_lin01").waypoint(
    function () {
      $(".main_txt01_lin01").addClass("animated delay07 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt01_lin02").waypoint(
    function () {
      $(".main_txt01_lin02").addClass("animated delay09 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt02_lin00").waypoint(
    function () {
      $(".main_txt02_lin00").addClass("animated delay05 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt02_lin01").waypoint(
    function () {
      $(".main_txt02_lin01").addClass("animated delay07 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt02_lin02").waypoint(
    function () {
      $(".main_txt02_lin02").addClass("animated delay09 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt03_lin00").waypoint(
    function () {
      $(".main_txt03_lin00").addClass("animated delay05 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt03_lin01").waypoint(
    function () {
      $(".main_txt03_lin01").addClass("animated delay07 fadeInDown");
    },
    {
      offset: "80%",
    }
  );
  $(".main_txt03_lin02").waypoint(
    function () {
      $(".main_txt03_lin02").addClass("animated delay09 fadeInDown");
    },
    {
      offset: "80%",
    }
  );

  // 메뉴 tab슬라이드
  var swiper = new Swiper(".category_tab_swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: { 600: { slidesPerView: "auto" } },
  });
});

// 모바일 네비게이션
$(".btn_hamburger").click(function () {
  
  $(".main_navigation").addClass("open");
});
$(".close_btn").click(function () {
  $(".main_navigation").removeClass("open");
});

// faq 아코디언테이블
$(".tab_btn").click(function () {
  $(".tab_btn").removeClass("on");
  $(this).addClass("on");
});
$(".acc_item").click(function () {

  $(this).toggleClass("on");

});
$(window).resize(function () {
  var width = window.innerWidth;
  if (width <= 600) {
    $(".category_tab_wrap").addClass("category_tab_swiper");
  } else {
    $(".category_tab_wrap").removeClass("category_tab_swiper");
  }
});
