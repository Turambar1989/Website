//tworzenie wyrażenia
// const reg1 = new regExp("javascript");
// const reg2 = /javascipt/;

//metody najczęściej .test, .match
// console.log(/java/.test("javascipt"));
// // . dowolny znak
// // + jedno lub wiecej powtorzen poprzedniego znaku
// // ? zero lub jedno wystapienie poprzedniego znaku

// // ^ poczatek ciagu znakow
// // $ koniec
// // () grupowanie
// // {} dokladna liczba powtorzen poprzedniego elementu
// // [] tworzenie zestawu znaków

// // flagi po ukośniku /
// // /i duze litery tez
// // /m wieloliniowe dopasowanie
// // /g globalne dopasowanie

// // /\d/ dowolna cyfra
// // /\D/ dowolna niecyfra
// // data /\d\d-\d\d\d\d/ 12-2024

// // /\s/ dowolny biały znak
// // /\S/

// // /\w/ alfanumeryczny
// // /\W/

// // /n  /t działa też znaku ucieczki //
// console.log(/[5-9]/.test("346"));

document.getElementById("validationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  // mail 12_-.@aqwe.asdsad.pl
  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(email)) {
    alert("wrong email address");
    return;
  }

  //phone
  //   const phoneRegex = /^[0-9]{9}$/;
  // z pustymi znakami
  const phoneRegex = /^\d{3}\s?\d{3}\s?\d{3}\s?$/;
  if (!phoneRegex.test(phone)) {
    alert("wrong phone number");
    return;
  }

  //password (8-20 znaków) co najmniej 1 cyfra i 1 wielka litera
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,20}$/; //asercja w nawiasach są warunki najpierw sprawdza
  if (!passwordRegex.test(password)) {
    alert("wrong password");
    return;
  }

  alert("form sended");
});
