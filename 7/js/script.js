var mainMenu = document.querySelector(".main-header");
var hamburger = document.querySelector(".main-header__toggle");

mainMenu.classList.remove("main-header--nojs");

if (hamburger != null) {
  hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  if (mainMenu.classList.contains("main-header--closed")) {
		mainMenu.classList.remove("main-header--closed");
    mainMenu.classList.add("main-header--opened");
	} else {
    mainMenu.classList.add("main-header--closed");
    mainMenu.classList.remove("main-header--opened");
  }
});
}

var link = document.querySelector(".popular__btn");
var popup = document.querySelector(".modal-window");
var closePopup = popup.querySelector(".add-cart__btn");
var overlay = document.querySelector(".overlay");

if (link != null) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-window--show");
    overlay.classList.add("overlay--show");
  });
}

closePopup.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window--show");
  overlay.classList.remove("overlay--show");
});

var link2 = document.querySelectorAll(".product-item__cart");
var popup2 = document.querySelector(".modal-window");
var closePopup2 = popup2.querySelector(".add-cart__btn");

for (var i = 0; i < link2.length ; i++) {
	link2[i].addEventListener("click", function(event) {
  	event.preventDefault();
		popup2.classList.add("modal-window--show");
    overlay.classList.add("overlay--show");
  });
}
closePopup2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("modal-window--show");
  overlay.classList.remove("overlay--show");
});
