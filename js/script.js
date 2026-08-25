const button = document.getElementById("colorBtn");

let darkMode = false;

button.addEventListener("click", function () {
    if (!darkMode) {
        document.body.style.background = "#222";
        document.body.style.color = "white";
        button.textContent = "Light Mode";
        darkMode = true;
    } else {
        document.body.style.background = "#f4f4f4";
        document.body.style.color = "#333";
        button.textContent = "Dark Mode";
        darkMode = false;
    }
});