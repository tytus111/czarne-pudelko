js
Skopiuj kod
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", function () {
        checkPassword();
    });
});

function checkPassword() {
    const passwords = {
        "haslo1": "podstrona1.html",
        "haslo2": "podstrona2.html",
        "haslo3": "podstrona3.html"
    };

    let input = document.getElementById("passwordInput").value;
    let errorMessage = document.getElementById("error-message");

    if (passwords[input]) {
        window.location.href = passwords[input];
    } else {
        errorMessage.innerText = "Źle!";
        errorMessage.style.display = "block";
    }
}
