let roll = document.getElementById("roll");
let label = document.getElementById("label");

roll.onclick = function() {
    label.textContent = Math.floor((Math.random() * 6) + 1);
}