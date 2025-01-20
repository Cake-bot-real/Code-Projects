function updateCheckboxes() {
    const service = new URLSearchParams(window.location.search).get("service");
    for (const child of document.querySelector("#services-checkboxes").children) {
        const checkbox = child.children[0];
      checkbox.checked = (checkbox.value == service);
    }
  }
document.addEventListener("DOMContentLoaded", function () {
    updateCheckboxes();
});