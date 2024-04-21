let dt = new Date();

var getHr = dt.getHours();
var getMin = dt.getMinutes();
var getSec = dt.getSeconds();

let hours = document.querySelector(".hr");
let minutes = document.querySelector(".min");
let seconds = document.querySelector(".sec");

hours.innerHTML = getHr;
minutes.innerHTML = getMin;
seconds.innerHTML = getSec;

setInterval(updateTime, 1000);

function updateTime() {
  let dt = new Date();
  let getHr = dt.getHours();
  let getMin = dt.getMinutes();
  let getSec = dt.getSeconds();
  hours.innerHTML = getHr;
  minutes.innerHTML = getMin;
  seconds.innerHTML = getSec;
}
