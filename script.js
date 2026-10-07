const countdownEl = document.getElementById('countdown');
let remaining = 5;

const updateCountdown = () => {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
  const seconds = String(remaining % 60).padStart(2, '0');
  countdownEl.textContent = `${minutes}:${seconds}`;

  if (remaining > 0) {
    remaining -= 1;
  } else {
    remaining = 5;
  }
};

updateCountdown();
setInterval(updateCountdown, 1000);

const rings = document.querySelectorAll('.ring');
let ringPhase = 0;

setInterval(() => {
  ringPhase += 1;
  rings.forEach((ring, index) => {
    const spin = ringPhase * (index + 1) * 8;
    ring.style.transform = `scale(${0.95 - index * 0.25}) rotate(${spin}deg)`;
    ring.style.opacity = String(1 - index * 0.22);
  });
}, 120);
