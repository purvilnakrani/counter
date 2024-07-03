let count = 0;

const spanCounter = document.querySelector("#spanClass");
const increament = document.querySelector(".increamentClass");
const decreament = document.querySelector(".decreamentClass");
const reset = document.querySelector(".resetClass");

increament.addEventListener("click", function () {
  count++;
  spanCounter.innerHTML = count;
  colorChange();
});

reset.addEventListener("click", function () {
  count = 0;
  spanCounter.innerHTML = count;
  colorChange();
});

decreament.addEventListener("click", function () {
  count--;
  spanCounter.innerHTML = count;
  colorChange();
});

function colorChange() {
  if (count < 0) {
    spanCounter.style.color = "red";
  } else if (count > 0) {
    spanCounter.style.color = "green";
  } else {
    spanCounter.style.color = "white";
  }
}
