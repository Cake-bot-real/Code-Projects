// Mobile menu toggle
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Auto-close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll(".navbar__links");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      menu.classList.remove("is-active");
      menuLinks.classList.remove("active");
    });
  });

  // Set current year in footer
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // AJAX review form submit (if present)
  const reviewForm = document.querySelector(".review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(reviewForm);

      try {
        const response = await fetch(reviewForm.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          window.location.href = "https://know-a-guy.org/"; // ✅ Adjust as needed
        } else {
          alert("There was a problem submitting your review.");
        }
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      }
    });
  }

  // Manual review card append (optional fallback)
  const manualReviewForm = document.getElementById('review-form');
  if (manualReviewForm) {
    manualReviewForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const reviewerName = document.getElementById('reviewer-name').value;
      const reviewText = document.getElementById('review-text').value;

      if (reviewerName && reviewText) {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        const reviewerNameElement = document.createElement('h4');
        reviewerNameElement.textContent = reviewerName;

        const reviewTextElement = document.createElement('p');
        reviewTextElement.textContent = reviewText;

        reviewCard.appendChild(reviewerNameElement);
        reviewCard.appendChild(reviewTextElement);

        document.getElementById('submitted-reviews').appendChild(reviewCard);
        manualReviewForm.reset();
      }
    });
  }
});

// Toggle pricing plans
function switchPricing() {
  const checkbox = document.getElementById("pricing-toggle-checkbox");
  const regularPrices = document.querySelectorAll(".basic-service-price");
  const firstPrices = document.querySelectorAll(".first-service-price");
  const firstDiscounts = document.querySelectorAll(".save-percentage");

  if (checkbox.checked) {
    regularPrices.forEach(price => price.classList.add("hidden"));
    firstPrices.forEach(price => price.classList.remove("hidden"));
    firstDiscounts.forEach(discount => discount.style.display = "inline");
  } else {
    regularPrices.forEach(price => price.classList.remove("hidden"));
    firstPrices.forEach(price => price.classList.add("hidden"));
    firstDiscounts.forEach(discount => discount.style.display = "none");
  }
}
