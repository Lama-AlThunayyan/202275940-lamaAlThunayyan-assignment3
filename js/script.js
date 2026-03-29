// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// Mobile menu
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});


// =========================
// Theme toggle with localStorage
// =========================
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeBtn.textContent = isDark ? "☀️" : "🌙";
});


// =========================
// Dynamic Feature: Project Filter
// =========================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".card");
const emptyState = document.getElementById("emptyState");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    // active button style
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    emptyState.hidden = visibleCount !== 0;
  });
});


// =========================
// Data Handling + User Feedback:
// Form validation
// =========================
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function setError(input, errorElement, message) {
  input.classList.add("error");
  input.classList.remove("success");
  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  // reset form message
  formMsg.textContent = "";
  formMsg.classList.remove("show");

  // Name validation
  if (nameValue === "") {
    setError(nameInput, nameError, "Please enter your name.");
    isValid = false;
  } else if (nameValue.length < 2) {
    setError(nameInput, nameError, "Name must be at least 2 characters.");
    isValid = false;
  } else {
    setSuccess(nameInput, nameError);
  }

  // Email validation
  if (emailValue === "") {
    setError(emailInput, emailError, "Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    setSuccess(emailInput, emailError);
  }

  // Message validation
  if (messageValue === "") {
    setError(messageInput, messageError, "Please enter your message.");
    isValid = false;
  } else if (messageValue.length < 10) {
    setError(messageInput, messageError, "Message must be at least 10 characters.");
    isValid = false;
  } else {
    setSuccess(messageInput, messageError);
  }

  // Final feedback
  if (isValid) {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "#16a34a";
    formMsg.classList.add("show");
    contactForm.reset();

    // remove success borders after reset
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.classList.remove("success");
    });
  } else {
    formMsg.textContent = "Please fix the errors above and try again.";
    formMsg.style.color = "#dc2626";
    formMsg.classList.add("show");
  }
});