


document.addEventListener("DOMContentLoaded", function () {
  // Loading overlay
//   setTimeout(function () {
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("main-content").classList.remove("hidden");
//   }, 1000);

  // Swiper initialization
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  // Menu icon toggle
  document.getElementById("menu-icon").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const shareIcon = document.getElementById("share-icon");
    const menuIcon = this;

    menu.classList.toggle("active");

    menuIcon.src = menu.classList.contains("active")
      ? "./asset/images/icon/close.svg"
      : "./asset/images/icon/menu.svg";

    shareIcon.classList.toggle("bg-[#AFCD80]");
    menu.style.height = menu.classList.contains("active")
      ? `${menu.scrollHeight}px`
      : "0";
  });

  // Width change reload
  let initialWidth = window.innerWidth;

  window.addEventListener("resize", function () {
    if (window.innerWidth !== initialWidth) {
      window.location.reload();
    }
  });

  // Scroll button
  const scrollButton = document.getElementById("scroll-button");
  const downArrow = "./asset/images/icon/down-arrow.svg";
  const upArrow = "./asset/images/icon/up-arrow.png";

  function updateScrollButton() {
    if (window.scrollY === 0) {
      scrollButton.setAttribute("aria-label", "Scroll Down");
      scrollButton.querySelector("img").src = downArrow;
    } else {
      scrollButton.setAttribute("aria-label", "Scroll Up");
      scrollButton.querySelector("img").src = upArrow;
    }
  }

  // Update button icon on scroll
  window.addEventListener("scroll", updateScrollButton);
  updateScrollButton(); // Initial check

  // Scroll to top or bottom on button click
  scrollButton.addEventListener("click", function () {
    if (scrollButton.getAttribute("aria-label") === "Scroll Down") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});
