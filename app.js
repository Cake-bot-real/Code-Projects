const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu"); // The hamburger menu button
    const navMenu = document.getElementById("navbar__container"); // The mobile menu container
    const navLinks = document.querySelectorAll(".navbar__links"); // All nav links

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Hide the menu
            menuToggle.checked = false; // Uncheck the checkbox if using a checkbox toggle
        });
    });
});

// Function to toggle the different deals
function switchPricing() {
    const checkbox = document.getElementById("pricing-toggle-checkbox");
    const regularPrices = document.querySelectorAll(".basic-service-price");
    const firstPrices = document.querySelectorAll(".first-service-price");
    const firstDiscounts = document.querySelectorAll(".save-percentage");

    if (checkbox.checked) {
        // Show first-time prices, hide regular prices
        regularPrices.forEach((price) => price.classList.add("hidden")); // Corrected `classlist` to `classList`
        firstPrices.forEach((price) => price.classList.remove("hidden"));

        // Show all discount elements
        firstDiscounts.forEach((discount) => {
            discount.style.display = "inline";
        });
    } else {
        // Show regular prices, hide first-time prices
        regularPrices.forEach((price) => price.classList.remove("hidden"));
        firstPrices.forEach((price) => price.classList.add("hidden"));

        // Hide all discount elements
        firstDiscounts.forEach((discount) => {
            discount.style.display = "none";
        });
    }
}

window.addEventListener("load", () => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
})

