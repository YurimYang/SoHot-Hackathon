// to top버튼
(() => {
  const scrollTop = () => {
    console.log("top click");
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
      console.log("scroll");
      console.log(window.scrollY);
      if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 500);
          scrollWindow();
        }, 10);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();
})();
