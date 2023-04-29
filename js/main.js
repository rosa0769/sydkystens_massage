// Dark mode toggle
const changeBtns = document.querySelectorAll(".change");

changeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const body = document.querySelector("body");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      btn.textContent = "OFF";
    } else {
      body.classList.add("dark");
      btn.textContent = "ON";
    }
  });
});

// Dropdown on mouse hover
function toggleNavbarMethod() {
  if (window.innerWidth > 992) {
    const dropdowns = document.querySelectorAll(".navbar .dropdown");
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseover", function () {
        const dropdownToggle = this.querySelector(".dropdown-toggle");
        dropdownToggle.click();
      });
      dropdown.addEventListener("mouseout", function () {
        const dropdownToggle = this.querySelector(".dropdown-toggle");
        dropdownToggle.click();
        dropdownToggle.blur();
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  toggleNavbarMethod();
});

window.addEventListener("resize", function () {
  toggleNavbarMethod();
});

// Back to top button
document.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
});

document.querySelector(".back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Date and time picker
document.getElementById("date").datetimepicker({
  format: "L",
});

document.getElementById("time").datetimepicker({
  format: "LT",
});

