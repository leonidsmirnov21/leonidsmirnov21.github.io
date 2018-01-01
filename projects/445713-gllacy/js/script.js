var link = document.querySelector(".button-form");
var preForm = document.querySelector(".pre-form");
var popup = document.querySelector(".modal-form");
var closePopup = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var inputName = popup.querySelector("[name=name]");
var inputEmail = popup.querySelector("[name=email]");
var inputText = popup.querySelector("[name=feedback-text");
var storage = localStorage.getItem("inputName");
          
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    preForm.classList.add("modal-show");
    popup.classList.add("modal-show");
              
    if (storage) {
        inputName.value = storage;
        inputEmail.focus();
    } else {
        inputName.focus();
    }
});
          
closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    preForm.classList.remove("modal-show");
});
          
form.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("inputName", inputName.value);
    }
});
          
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            preForm.classList.remove("modal-show");
        }
    }
});
          
preForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    preForm.classList.remove("modal-show");
});
          