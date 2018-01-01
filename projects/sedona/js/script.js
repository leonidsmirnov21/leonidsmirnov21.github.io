var link = document.querySelector(".button-open");
var popup = document.querySelector(".search-hotel-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    if (popup.classList.contains("form-off")) {
        popup.classList.remove("form-off");
        popup.classList.add("form-on");
    }
    else {
        popup.classList.remove("form-on");
        popup.classList.add("form-off");
    }
});