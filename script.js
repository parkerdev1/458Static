const body = document.querySelector("body");

console.log("loaded", body);
window.setInterval(() => {
  if (body.classList.contains('dark-background')) {
    body.classList.remove('dark-background');
  } else {
    body.classList.add('dark-background');
  }
}, 1200);

function myStopFunction() {
  clearTimeout(myTimeout);
}
