const mobile_nav_menu = document.querySelector(".mobile-nav__container");
const hamburger_icon = document.getElementById("hamburger");
const show_nav = () => {
  if (mobile_nav_menu.style.display === "none") {
    mobile_nav_menu.style.display = "block";
  } else {
    mobile_nav_menu.style.display = "none";
  }
};

hamburger_icon.addEventListener("click", show_nav);
