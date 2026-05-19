const menuBtn = document.querySelector("#menu_btn");
const navbar = document.querySelector("#navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});