let login = document.querySelector(".login");
let aboutLink = document.querySelector(".about-link");
let form = document.querySelector(".login-form");
let aboutSection = document.querySelector(".about");
let aboutCloseButton = document.querySelector(".about-close-button");
let placesCloseButton = document.querySelector(".places-close-button");
let placesLink = document.querySelector(".places-link");
let placesSection = document.querySelector(".places");
let contactsSection = document.querySelector(".contacts");
let contactsLink = document.querySelector(".contacts-link");
let contactsCloseButton = document.querySelector(".contacts-close-button");


login.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        aboutSection.classList.add("hidden");
        placesSection.classList.add("hidden");
        contactsSection.classList.add("hidden");
    } else {
        form.classList.add("hidden");
    }
});

aboutLink.addEventListener("click", function () {
    if (aboutSection.classList.contains("hidden")) {
        aboutSection.classList.remove("hidden");
        form.classList.add("hidden");
        placesSection.classList.add("hidden");
        contactsSection.classList.add("hidden");
    } else {
        aboutSection.classList.add("hidden");
    }
});

placesLink.addEventListener("click", function () {
    if (placesSection.classList.contains("hidden")) {
        placesSection.classList.remove("hidden");
        form.classList.add("hidden");
        aboutSection.classList.add("hidden");
        contactsSection.classList.add("hidden");
    } else {
        placesSection.classList.add("hidden");
    }
});

contactsLink.addEventListener("click", function () {
    if (contactsSection.classList.contains("hidden")) {
        contactsSection.classList.remove("hidden");
        form.classList.add("hidden");
        aboutSection.classList.add("hidden");
        placesSection.classList.add("hidden");
    } else {
        contactsSection.classList.add("hidden");
    }
});

aboutCloseButton.addEventListener("click", function () {
    aboutSection.classList.add("hidden");
});

placesCloseButton.addEventListener("click", function () {
    placesSection.classList.add("hidden");
});

contactsCloseButton.addEventListener("click", function () {
    contactsSection.classList.add("hidden");
});


function myFunction() {
    let password = document.querySelector(".password-input");
    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
}