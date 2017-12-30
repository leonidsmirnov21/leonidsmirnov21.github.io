var link = document.querySelector(".contacts-button");
var map = document.querySelector(".img-map");
var preForm = document.querySelector(".pre-form");
var popup = document.querySelector(".write-us");
var mapPopup = document.querySelector(".map-popup");
var closePopup = popup.querySelector(".write-us-close");
var closeMap = document.querySelector(".map-popup-close");
var inputName = popup.querySelector("[name=name]");
var inputEmail = popup.querySelector("[name=email]");
var inputText = popup.querySelector("[name=text");
var storage = localStorage.getItem("inputName");

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("write-us-none");
    preForm.classList.remove("write-us-none");
    preForm.classList.add("write-us-show");
    mapPopup.classList.add("write-us-show");
});

map.addEventListener("touchstart", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("write-us-none");
    preForm.classList.remove("write-us-none");
    preForm.classList.add("write-us-show");
    mapPopup.classList.add("write-us-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("write-us-none");
    preForm.classList.add("write-us-none");
    mapPopup.classList.remove("write-us-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("write-us-show")) {
            mapPopup.classList.add("write-us-none");
            preForm.classList.add("write-us-none");
        }
    }
});
          
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-none");
    preForm.classList.remove("write-us-none");
    preForm.classList.add("write-us-show");
    popup.classList.add("write-us-show");
              
    if (storage) {
        inputName.value = storage;
        inputEmail.focus();
    } else {
        inputName.focus();
    }
});
          
closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-none");
    preForm.classList.add("write-us-none");
    popup.classList.remove("write-us-error");
});
          
popup.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputText.value) {
        evt.preventDefault();
        popup.classList.remove("write-us-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("write-us-error");
    } else {
        localStorage.setItem("inputName", inputName.value);
    }
});
          
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("write-us-show")) {
            popup.classList.add("write-us-none");
            preForm.classList.add("write-us-none");
            popup.classList.remove("write-us-error");
        }
    }
});
          
preForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-none");
    mapPopup.classList.add("write-us-none");
    preForm.classList.add("write-us-none");
    popup.classList.remove("write-us-error");
});
          