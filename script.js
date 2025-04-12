function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Listen to both 'mouseenter' and 'click'
["mouseenter", "click"].forEach(eventType => {
  moveRandom.addEventListener(eventType, function (e) {
    moveRandomEl(e.target);
  });
});



