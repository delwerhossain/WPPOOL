document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  function initSwiper() {
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
  }

  // Toggle menu icon
  function toggleMenu() {
    const menu = document.getElementById("menu");
    const shareIcon = document.getElementById("share-icon");
    const menuIcon = document.getElementById("menu-icon");

    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("active");

      menuIcon.src = menu.classList.contains("active")
        ? "./asset/images/icon/close.svg"
        : "./asset/images/icon/menu.svg";

      shareIcon.classList.toggle("bg-custom-green");

      menu.style.height = menu.classList.contains("active")
        ? `${menu.scrollHeight}px`
        : "0";
    });
  }
  function toggleMenu1() {
    const menu = document.getElementById("menu1");
    const shareIcon = document.getElementById("share-icon1");
    const menuIcon = document.getElementById("menu-icon1");

    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("active");

      menuIcon.src = menu.classList.contains("active")
        ? "./asset/images/icon/close.svg"
        : "./asset/images/icon/menu-black.svg";

      shareIcon.classList.toggle("bg-custom-green");

      menu.style.height = menu.classList.contains("active")
        ? `${menu.scrollHeight}px`
        : "0";
    });
  }

  // Handle scroll button
  function handleScrollButton() {
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
      window.scrollTo({
        top:
          scrollButton.getAttribute("aria-label") === "Scroll Down"
            ? document.body.scrollHeight
            : 0,
        behavior: "smooth",
      });
    });
  }

  // Debounce function to limit the rate of function execution
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  // Handle window resize with debounce
  function handleResize() {
    const breakpoints = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    };

    function getCurrentBreakpoint(width) {
      if (width < breakpoints.sm) return "default";
      if (width >= breakpoints.sm && width < breakpoints.md) return "sm";
      if (width >= breakpoints.md && width < breakpoints.lg) return "md";
      if (width >= breakpoints.lg && width < breakpoints.xl) return "lg";
      if (width >= breakpoints.xl && width < breakpoints["2xl"]) return "xl";
      return "2xl";
    }

    let initialBreakpoint = getCurrentBreakpoint(window.innerWidth);

    function onResize() {
      let currentBreakpoint = getCurrentBreakpoint(window.innerWidth);
      if (currentBreakpoint !== initialBreakpoint) {
        window.location.reload();
      }
    }

    window.addEventListener("resize", debounce(onResize, 150));
  }

  // Initialize all functions
  initSwiper();
  toggleMenu();
  toggleMenu1();
  handleScrollButton();
  handleResize();
});
