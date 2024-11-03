'use strict'

function checkPassword() {
    const password = document.getElementById("pin");
    const pass = password.value;
    if (pass === "0624") {
        let element = document.getElementsByClassName("nextpages")[0];
        element.style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}
const target = document.getElementById("target");
target.addEventListener("click", checkPassword);
