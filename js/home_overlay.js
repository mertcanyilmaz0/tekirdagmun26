const overlay = document.getElementById("overlay");

document.getElementById("openOverlay")
.addEventListener("click", () => {

    overlay.classList.add("active");

});

document.getElementById("closeOverlay")
.addEventListener("click", () => {

    overlay.classList.remove("active");

});