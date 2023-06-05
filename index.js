"use strict";

const showButton = document.querySelectorAll(".showmodal-btn");
const hideButton = document.querySelector(".hide-button");
console.log(showButton);
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".box");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openMOdal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < showButton.length; i++) {
  showButton[i].addEventListener("click", openMOdal);
}
hideButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
