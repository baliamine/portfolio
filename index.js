function validatePhoneNumber(input) {
  var num = document.getElementById("phoneNumberE");
  num.innerText = "";
}

function validateEmail(input) {
  var emailError = document.getElementById("emailE");
  emailError.innerText = "";
}

function validateFeedbacks(input) {
  var feedbackError = document.getElementById("feedbackE");
  feedbackError.innerText = "";
}
// validation form
function validateForm(form) {
  var phoneNumber = form.number.value;
  var email = form.email.value;
  var feedbacks = form.text.value;

  // div-id
  var num = document.getElementById("phoneNumberE");
  var emailError = document.getElementById("emailE");
  var feedback = document.getElementById("feedbackE");

  num.innerText = "";
  emailError.innerText = "";
  feedback.innerText = "";

  var isValid = true;

  if (phoneNumber.length !== 8) {
    num.innerText = "Veuillez entrer un numéro de 8 chiffres";
    isValid = false;
  }
  if (isNaN(phoneNumber)) {
    num.innerText = "veuillez entrer un numéro valide ";
    isValid = false;
  }
  if (phoneNumber == "") {
    num.innerText = "veuillez entrer un numéro ";
    isValid = false;
  }

  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "" || !emailRegex.test(email)) {
    emailError.innerText = "Veuillez entrer un email valide";
    isValid = false;
  }

  if (feedbacks === "") {
    feedback.innerText = "Veuillez entrer un feedback";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "#NABAR-Home";
  }

  return isValid;
}

//   scroll

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

//   popup
window.onload = function () {
  var popup = document.getElementById("popup");
  var checkbox = document.getElementById("robotCheckbox");
  var closeButton = document.getElementById("closePopup");

  // Show the pop-up when the page loads
  popup.style.display = "flex";

  // Enable the "Continue" button only when the checkbox is checked
  checkbox.addEventListener("change", function () {
    closeButton.disabled = !this.checked;
  });

  // Close the pop-up when the "Continue" button is clicked
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
};
