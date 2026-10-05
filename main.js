// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// ==============================
// CLOSE MENU WHEN LINK IS CLICKED
// ==============================

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ==============================
// CONTACT BUTTON
// ==============================

const contactBtn =
    document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {

    alert(
        "Hello! 👋\n\n" +
        "Thank you for visiting my website!\n\n" +
        "Email: yourname@example.com"
    );

});


// ==============================
// PAGE LOAD MESSAGE
// ==============================

window.addEventListener("load", function() {

    console.log(
        "Welcome to StudentHub! 🚀"
    );

});