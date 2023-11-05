const contactForm = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const company = document.querySelector("#company");
const selectedCountry = document.querySelector("#countrySelect");
let flagEmail = false;
let inputflag = false;

function getInput(InputsArray) {
  InputsArray.map((input) => {
    localStorage.setItem(input.id, input.value);
  });
  if (flagEmail === true && inputflag === true) {
    window.location.replace("thanks.html"); // does not appear on history
  } else {
    return;
  }
}

function checkEmail(input) {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   return emailRegex.test(String(email).toLowerCase());
  if (input.value.trim() === "") {
    showError(input, "This field cannot be empty. Please fill in it.");
  } else {
    if (emailRegex.test(input.value.trim())) {
      showSuccess(input);
      flagEmail = true;
    } else {
      showError(input, "Email is not valid");
    }
  }
}
function checkRequired(inputArray) {
  console.log;
  inputArray.map((input) => {
    if (input.value.trim() === "") {
      showError(input, "This field cannot be empty. Please fill in it.");
    } else {
      showSuccess(input);

      inputflag = true;
    }
  });
}

async function showError(input, message) {
  // console.log()
  const parent = input.parentElement;
  parent.classList.add("error");
  let childElements = parent.children;
  const errorDiv = childElements.item(2);
  errorDiv.innerHTML = message;
  errorDiv.style.display = "block";
  console.log(errorDiv);
}
function showSuccess(input) {
  const parent = input.parentElement;
  parent.classList.add("success");
  parent.classList.remove("error");
  let childElements = parent.children;
  const errorDiv = childElements.item(2);
  console.log(errorDiv);
  errorDiv.style.display = "none";
}
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([firstName, lastName, email, company]);
  checkEmail(email);
  getInput([firstName, lastName, email, company, countrySelect]);
});

function setFocus(on) {
  var element = document.activeElement;
  if (on) {
    setTimeout(function () {
      element.parentNode.classList.add("focus");
      let parent = element.parentElement;
      let childElements = parent.children;
      const errorDiv = childElements.item(2);
      errorDiv.style.display = "none";
    });
  } else {
    let box = document.querySelector(".input-container");
    box.classList.remove("focus");
    $("input").each(function () {
      var $input = $(this);
      var $parent = $input.closest(".input-container");
      if ($input.val()) $parent.addClass("focus");
      else $parent.removeClass("focus");
    });
  }
}

function UILabel() {
  alert("hello");
  if (firstName.value.trim() === "")
    firstName.parentNode.classList.add("focus");
}
