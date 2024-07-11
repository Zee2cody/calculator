const display = document.getElementById("display");
const keys = document.querySelectorAll("button");



keys.forEach((key) => {
  key.addEventListener("click", function () {
    if (key.id === "clear") {
      display.textContent = "0";
    } else if (key.id === "calculate") {
      try {
        display.textContent = eval(display.textContent); 
      } catch (e) {
        display.textContent = "Error";
      }
    } else {
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = key.value;
      } else {
        display.textContent += key.value;
      }
    }
  });
});
