const form = document.getElementById("form");
const button = document.querySelector(".btn");
const inputName = document.querySelector(".name");
const inputPass = document.querySelector(".password");
const inputEmail = document.querySelector(".email");
const inputNameContainer = document.querySelector(".nameContainer");
const inputPassConatainer = document.querySelector(".paswordContainer");
const input = document.querySelectorAll(".input");
var nameUser = document.getElementById("name");

const isEmpty = () => {
  var email = "user@gmail.com";
  var password = "user1234";

  if (inputPass.value && inputEmail.value) {
    button.addEventListener("click", () => {
      if (inputPass.value === password && inputEmail.value === email) {
        window.location.href = "index.html";
        inputEmail.classList.remove("redBorder");
        inputPass.classList.remove("redBorder");
        inputNameContainer.innerHTML = "";
        nameValue();
      } else {
        inputNameContainer.innerHTML = "Incorrect Email or Password";
        inputEmail.classList.add("redBorder");
        inputPass.classList.add("redBorder");
      }
    });
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const nameValue = () => {
  var name1 = document.getElementById("name").value;
  localStorage.setItem("textvalue", name1);
  return false;
};
