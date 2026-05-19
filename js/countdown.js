const targetDate = new Date("2026-12-31T23:59:59").getTime();

function changeNumber(box, newValue) {
  const current = box.querySelector(".num");

  if (current.innerText === newValue) return;

  const oldClone = current.cloneNode(true);
  oldClone.classList.remove("current");
  oldClone.classList.add("num", "out");

  const newEl = document.createElement("span");
  newEl.classList.add("num", "in");
  newEl.innerText = newValue;

  box.appendChild(oldClone);
  box.appendChild(newEl);

  current.remove();

  setTimeout(() => {
    newEl.classList.remove("in");
    newEl.classList.add("current");
  }, 350);

  setTimeout(() => {
    oldClone.remove();
  }, 350);
}
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  changeNumber(document.getElementById("days"), String(days).padStart(2, "0"));
  changeNumber(document.getElementById("hours"), String(hours).padStart(2, "0"));
  changeNumber(document.getElementById("minutes"), String(minutes).padStart(2, "0"));
  changeNumber(document.getElementById("seconds"), String(seconds).padStart(2, "0"));
}

setInterval(updateCountdown, 1000);
updateCountdown();