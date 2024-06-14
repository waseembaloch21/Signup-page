let submitBtn = document.getElementById("subBtn");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let numberError = document.getElementById("numberError");
let passwordError = document.getElementById("passwordError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validUserName() && validUserEmail() && validUserPassword()) {
    alert("Form Submitted Successfully");
  }
});

// ########### for name valiation #################### \\

function validUserName() {
  let userName = document.getElementById("name").value;

  if (userName.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.previousElementSibling.classList.add("fa-xmark");

    return false;
  }

  if (!userName.match()) {
    nameError.innerHTML = "Name is Invalid";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add("fa-check");
  nameError.previousElementSibling.style.color = "#13a80e";
  return true;
}

// ################## for email validation #################### \\

function validUserEmail() {
  let userEmail = document.getElementById("email").value;

  if (userEmail.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.previousElementSibling.classList.add("fa-xmark");

    return false;
  }

  if (!userEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Email is Invalid";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add("fa-check");
  emailError.previousElementSibling.style.color = "#13a80e";
  return true;
}

// #################### password validation ######################### \\

function validUserPassword() {
  let userPass = document.getElementById("password").value;

  if (userPass.length == 0) {
    passwordError.innerHTML = "Password is required";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!userPass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
    passwordError.innerHTML = "password Contain 1 UpperCase 1 lowerCase 1 Number 1 Alphabet";
    passwordError.previousElementSibling.classList.add("fa-xmark");
  }
    passwordError.innerHTML = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  passwordError.previousElementSibling.style.color = "#13a80e";
  return true;
}