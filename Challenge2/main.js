const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const hours = new Date().getHours();
console.log(hours);

updateSecs();
updateMins();
updateHours();

setInterval(updateSecs, 1000);

function updateSecs() {
  const seconds = new Date().getSeconds();
  if (seconds === 0) {
    updateMins();
  }
  sec.style.transform = getRotateStyle(seconds * 6);
}

function updateMins() {
  const minutes = new Date().getMinutes();
  if (minutes === 0) {
    updateHours();
  }
  min.style.transform = getRotateStyle(minutes * 6);
}

function updateHours() {
  const hours = new Date().getHours();
  hour.style.transform = getRotateStyle(hours * 5 * 6);
}

function getRotateStyle(time) {
  return `rotate(${(time + 270) % 360}deg)`;
}
