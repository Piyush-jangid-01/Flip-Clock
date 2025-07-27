const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

let prev = {
    hour: "",
    minute: "",
    second: "",
    ampm: ""
};

function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function flipIfChanged(el, newVal, key) {
  if (prev[key] != newVal) {
    el.classList.add("flip");
    el.textContent = newVal;
    prev[key] = newVal;

    setTimeout(() => el.classList.remove("flip"), 500);
  }
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  flipIfChanged(hourEl, formatTime(hours), "hour");
  flipIfChanged(minuteEl, formatTime(minutes), "minute");
  flipIfChanged(secondEl, formatTime(seconds), "second");
  flipIfChanged(ampmEl, ampm, "ampm");
}

updateClock();
setInterval(updateClock, 1000);