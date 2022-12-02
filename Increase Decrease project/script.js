let lowerButtons = document.querySelector(".lower");
let upperButtons = document.querySelector(".upper");
let counting = document.getElementById("counter");
let counts = 0;

lowerButtons.addEventListener("click", function () {
  counts--;
  counting.textContent = counts;
});
upperButtons.addEventListener("click", function () {
  counts++;
  counting.textContent = counts;
});
