const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".rotating-logos__track");
    const logos = track.innerHTML;

    // Set a fixed number of repetitions (e.g., 5 times)
    repeatCount; // You can adjust this value

    // Duplicate the logos content multiple times for seamless scrolling
    track.innerHTML = logos.repeat(repeatCount);
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

document.addEventListener("DOMContentLoaded", function () {
    // Parse the query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const selectedService = params.get("service"); // Get the 'service' parameter

    if (selectedService) {
        // Locate the checkboxes
        const checkboxes = document.querySelectorAll("#services-checkboxes input[type='checkbox']");

        // Pre-check the checkbox that matches the selected service
        checkboxes.forEach((checkbox) => {
            if (checkbox.value === selectedService) {
                checkbox.checked = true;
            }
        });
    }
});

