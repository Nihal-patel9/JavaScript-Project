const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const countValue = document.getElementById("countValue");

decrementBtn.addEventListener("click", () => {
  const value = Number(countValue.innerText);
  if (value > 0) {
    countValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

incrementBtn.addEventListener("click", () => {
  const value = Number(countValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    countValue.innerText = value + 1;
  }
});

resetBtn.addEventListener("click", () => {
  countValue.innerText = 0;
});