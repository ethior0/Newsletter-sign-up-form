const container = document.querySelector(".container");
const inputEmail = document.querySelector("#emailInput");
const button = document.querySelector("#btnSubmit");
const invalidLabel = document.querySelector(".emailInvalid");

function inputIsValid() {
  const emailRegex = /\S+@\S+\.\S+/;
  const inputText = inputEmail.value;

  return inputText.match(emailRegex); 
}

function changeWindow(email) {
  container.innerHTML = '';
  container.classList.add("newWindowContainer");

  const imgIcon = createEl("img");
  imgIcon.setAttribute("src", `./assets/images/icon-success.svg`);
  const h1 = createEl("h1", `Thanks for <br>subscribing!`);
  const p = createEl("p", `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`)
  const button = createEl("button", `Dismiss message`);
  button.classList.add("btnStyle");

  container.appendChild(imgIcon);
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(button);
}

function createEl(el, text) {
  const elem = document.createElement(el)
  elem.innerHTML = text
  return elem;
}

function invalidInputStyle() {
  invalidLabel.style.display = 'block';
  inputEmail.classList.add("invalidInputStyle");
}

function removeInvalidStyle() {
  invalidLabel.style.display = 'none';
  inputEmail.classList.remove("invalidInputStyle");
}

button.addEventListener("click", function(e) {
  e.preventDefault();

  if (inputIsValid()) {
    // console.log(inputIsValid());
    const email = inputIsValid()[0];
    changeWindow(email);
  } else {
    invalidInputStyle();
  }
});

inputEmail.addEventListener("click", function(e) {
  removeInvalidStyle();
});