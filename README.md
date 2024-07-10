# WPPOOL JOB TASK

## About This Project

This project is an assignment for WPPool. It is a responsive web page that includes an interactive image slider, a downloadable report button, and a responsive header with a toggleable navigation menu.

### Technologies Used

- **HTML5**: For structuring the web page.
- **Tailwind CSS**: For styling the web page.
- **Swiper.js**: For the interactive image slider.
- **Google Charts**: For displaying graphs and charts.
- **JavaScript**: For interactivity and functionality.
- **Animate.css**: For CSS animations.

## Project Structure

- project-root/
- │
- ├── index.html # Main HTML file
- ├── asset/
- │ ├── images/ # Folder for images
- │ │ ├── company/ # Folder for company
- │ │ ├── portfolio/ # Folder for portfolio
- │ │ └── slider/ # Folder for slider
- │ │ ├── stories/ # Folder for stories
- │ ├── css/
- │ │ └── styles.css # Custom CSS (if any)
- │ ├── js/
- │ └── script.js # Custom JavaScript (if any)
- │
- ├── dist/
- │ ├── output.css # tailwindcss output file
- ├── node_modules/
- ├── .gitignore # This git ignore file
- ├── package-lock.json
- ├── package.json
- ├── .gitignore # This git ignore file
- ├── README.md # This README file
- ├── tailwind.config.js # This tailwind config file
- └── package.json # Project configuration (if using npm/yarn)

## Getting Started

### Prerequisites

To run this project locally, you need to have a web browser and optionally a local server environment like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/delwerhossain/WPPOOL.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd WPPOOL
   ```

### Setting Up Tailwind CSS

1. **Install Tailwind CSS via npm:**
   ```sh
   npm install -D tailwindcss
   ```
2. **Create a Tailwind configuration file:**
   ```sh
   npx tailwindcss init
   ```
3. **Configure the `tailwind.config.js` file:**
   ```js
   module.exports = {
     purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```
4. **Create a CSS file and import Tailwind:**

   In `src/styles.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Build your CSS:**
   ```sh
   npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch
   ```

### Running the Project

1. **Open the `index.html` file directly in your web browser:**

   ```sh
   open index.html
   ```

   OR

2. **Use a local server to serve the files:**

   If you have Live Server installed in Visual Studio Code, right-click on the `index.html` file and select `Open with Live Server`.

### Usage

- The navigation menu can be toggled using the menu icon.
- The image slider can be navigated using the custom navigation buttons.
- The "Download the 2024 Report" button will prompt a download of the report.

## Customization

### Tailwind CSS

Tailwind CSS is used for styling. You can customize the styles by editing the classes in the HTML files or by adding custom styles in the `styles.css` file.

### Swiper.js

Swiper.js is used for the image slider. You can customize the slider settings in the `script.js` file:

```js
let swiper = new Swiper(".mySwiper", {
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
```

### Menu Icon toggle

```js

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
```

## Scroll Button

```js


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
```
