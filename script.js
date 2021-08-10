let emailForm = document.getElementById("submit-form");
let emailInput = document.getElementById("email-input");

let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

emailForm.addEventListener("submit", (event) => {
  if (!emailRegex.test(emailForm.firstElementChild.value)) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add('error-message');
    errorMessage.innerHTML = "Oops! Please check your email"
    emailForm.appendChild(errorMessage);
    event.preventDefault();
  }
})