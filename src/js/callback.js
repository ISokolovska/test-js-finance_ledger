const throttle = require("lodash.throttle");
const callbackForm = document.querySelector(".form__request");
const DATA_KEY = "callback-form-state";

callbackForm.addEventListener("submit", onFormSubmit);
callbackForm.addEventListener("input", throttle(textInput, 500));

let valueForm = {
  name: "",
  email: "",
};

function textInput(e) {
  valueForm[e.target.name] = e.target.value;
  localStorage.setItem(DATA_KEY, JSON.stringify(valueForm));
}

function onFormSubmit(e) {
  e.preventDefault();
  valueForm.name = e.currentTarget.message.value;
  valueForm.email = e.currentTarget.email.value;

  console.log(valueForm);
  localStorage.removeItem(DATA_KEY);
  e.currentTarget.reset();
}

function updateOutput() {
  if (localStorage.getItem(DATA_KEY)) {
    valueForm = JSON.parse(localStorage.getItem(DATA_KEY));
    for (let key in valueForm) {
      callbackForm.elements[key].value = valueForm[key];
    }
  }
}
updateOutput();
