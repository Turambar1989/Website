const input = document.getElementById("password");
const messageContainer = document.querySelector(".messageContainer");
const password = "user1234";
const message = "You got it!";
const wrongMessage1 = `Hint for password: 
user1234`;
input.addEventListener("input", function (e) {
  //   console.log(e.target.value);
  if (password === e.target.value) {
    messageContainer.textContent = message;
  } else {
    messageContainer.textContent = wrongMessage1;
  }
});
input.addEventListener("focus", function () {
  input.classList.add("passwordInput");
});
// input.addEventListener("focus", function (e) {
//     e.target.classList.add("passwordInput");
//   });
input.addEventListener("blur", function (e) {
  e.target.classList.remove("passwordInput");
});

//drugi paragraf
const input2 = document.getElementById("password2");
const messageContainer2 = document.querySelector(".messageContainer2");
const passwords2 = ["user1234", "spring", "summer", "autumn", "winter"];
const messages2 = [
  "You got it!",
  "Good Spring Password",
  "Good Summer Password",
  "Good Autumn Password",
  "Good Winter Password",
];
const wrongMessage2 =
  "Hint for passwords: user1234, spring, summer, autumn, winter";
input2.addEventListener("input", function (e) {
  //   console.log(e.target.value);
  messageContainer2.textContent = wrongMessage2;
  const text = e.target.value;
  // console.log(text);
  passwords2.forEach((password, index) => {
    if (password === text) {
      messageContainer2.textContent = messages2[index];
    }
  });
});
input2.addEventListener("focus", function () {
  input2.classList.add("passwordInput");
});
// input.addEventListener("focus", function (e) {
//     e.target.classList.add("passwordInput");
//   });
input2.addEventListener("blur", function (e) {
  e.target.classList.remove("passwordInput");
});

//trzeci
const input3 = document.getElementById("password3");
const messageContainer3 = document.querySelector(".messageContainer3");
const passwords3 = ["FiRsT", "SeconD", "THIRD", "F"];
const messages3 = ["First", "Second", "Third", "f"];

const wrongMessage3 = `Hint for passwords: 
FiRsT, SeconD, THIRD, F`;

// 1 sposób dodawanie do tablicy

// input.addEventListener("input", function (e) {
//   //   console.log(e.target.value);
//   messageContainer.textContent = wrongMessage;
//   const text = e.target.value;
//   let newPasswords = [];
//   for (let i = 0; i < passwords.length; i++) {
//     newPasswords.push(passwords[i].toLowerCase());
//   }
//   passwords.forEach((password, index) => {
//     if (password === text) {
//       messageContainer.textContent = messages[index];
//     }
//   });
//   newPasswords.forEach((newPass, index) => {
//     if (newPass === text) {
//       messageContainer.textContent = messages[index];
//     }
//   });
// });

// 2 sposób forEach()

input3.addEventListener("input", function (e) {
  //   console.log(e.target.value);
  messageContainer3.textContent = wrongMessage3;
  const text = e.target.value;
  passwords3.forEach((password, index) => {
    if (password === text) {
      messageContainer3.textContent = messages3[index];
    } else if (password.toLowerCase() === text) {
      messageContainer3.textContent = messages3[index];
    }
  });
});

// 3 sposób map

// input.addEventListener("input", function (e) {
//   messageContainer.textContent = wrongMessage;
//   const text = e.target.value;
//   const newPasswords = passwords.map((password) => {
//     return password.toLowerCase();
//   });
//   for (let i = 0; i < passwords.length; i++) {
//     if (passwords[i] === text) {
//       messageContainer.textContent = messages[i];
//     }
//   }
//   for (let i = 0; i < passwords.length; i++) {
//     if (newPasswords[i] === text) {
//       messageContainer.textContent = messages[i];
//     }
//   }
// });

input3.addEventListener("focus", function () {
  input3.classList.add("passwordInput");
});
// input.addEventListener("focus", function (e) {
//     e.target.classList.add("passwordInput");
//   });
input3.addEventListener("blur", function (e) {
  e.target.classList.remove("passwordInput");
});
