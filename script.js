let current = 0;
const screens = document.querySelectorAll('.screen');
const music = document.getElementById("bg-music");

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  if (current < screens.length) {
    screens[current].classList.add("active");
  }
}

// Force audio play on first click (mobile fix)
document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });
