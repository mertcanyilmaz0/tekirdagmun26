document.querySelectorAll(".seal_button").forEach((btn) => {

  let isUnsealed = false;

  btn.classList.add("sealed");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Eğer zaten açıldıysa → direkt git
    if (isUnsealed) {
      window.location.href = btn.href;
      return;
    }

    // İlk kırılma
    isUnsealed = true;

    btn.classList.remove("sealed");
    btn.classList.add("unsealed");

    setTimeout(() => {
      window.location.href = btn.href;
    }, 800);
  });

});