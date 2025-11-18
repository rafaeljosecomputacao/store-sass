// Responsive menu
function NavbarToggle() {
    let navbarToggle = document.querySelector('.header-bottom-navbar');

    if (navbarToggle.style.display === "none") {
        navbarToggle.style.display = "block";
    } else {
        navbarToggle.style.display = "none";
    }
}

// Current year for footer
var currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();