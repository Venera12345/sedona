var link = document.querySelector(".search-btn")
var popup = document.querySelector(".search-popup")
var arrivalDate = document.querySelector("[name=arrival-date]")
var departureDate = document.querySelector("[name=departure-date]")
var visitor = document.querySelector("[name=visitor-numbers-adult]")
var forma = document.querySelector("form")
var storage = localStorage.getItem("arrivalDate")
var isStorageSupport = true;


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-popup-show");
  popup.classList.remove("search-popup-error");
  arrivalDate.focus();
  if(storage) {
    arrivalDate.value = storage;
  }
});

forma.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !visitor.value) {
    evt.preventDefault();
    popup.classList.add("search-popup-error");
    console.log("Ведите значения");
  }
  else {
    if(isStorageSupport){
    localStorage.setItem("arrivalDate", arrivalDate.value);
  }
}
});
