const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav nav ul");
toggleBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    toggleBtn.classList.toggle("open");
});

