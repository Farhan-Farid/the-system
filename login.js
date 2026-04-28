let aymaan = ["AYMAAN", "AYMAANFEMBOY"];
let mahmudul = ["MAHMUDUL", "MODULETRUMPADMIN"];

let logbtn = document.getElementById("loginbtn");

function getValue() {
  let user = document.getElementById("username").value.toUpperCase();
  let pass = document.getElementById("password").value.toUpperCase();
  if (user === aymaan[0] && pass === aymaan[1]) {
    window.location.href = "aymaan.html";
  }
  if (user === mahmudul[0] && pass === mahmudul[1]) {
    window.location.href = "mahmudul.html";
  }
}
