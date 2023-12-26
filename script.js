const themeToogle = document.getElementById("themeToogle");

const setTheme = localStorage.getItem("theme");
if (setTheme == "dark") {
  // light to dark
  document.documentElement.style.setProperty("--bg-color", "#040D12");
  document.documentElement.style.setProperty("--text-color", "#93B1A6");
  document.documentElement.style.setProperty("--keypad-bg-color", "#040D12");
  document.documentElement.style.setProperty("--keypad-bg-color2", "#183D3D");
  themeToogle.checked = true;
} else {
  document.documentElement.style.setProperty("--bg-color", "#F1EAFF");
  document.documentElement.style.setProperty("--text-color", "#D67BFF");
  document.documentElement.style.setProperty("--keypad-bg-color", "#F1EAFF");
  document.documentElement.style.setProperty("--keypad-bg-color2", "#D0A2F7");
}

themeToogle.addEventListener("change", function () {
  if (this.checked) {
    // light to dark
    document.documentElement.style.setProperty("--bg-color", "#040D12");
    document.documentElement.style.setProperty("--text-color", "#93B1A6");
    document.documentElement.style.setProperty("--keypad-bg-color", "#040D12");
    document.documentElement.style.setProperty("--keypad-bg-color2", "#183D3D");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#F1EAFF");
    document.documentElement.style.setProperty("--text-color", "#D67BFF");
    document.documentElement.style.setProperty("--keypad-bg-color", "#F1EAFF");
    document.documentElement.style.setProperty("--keypad-bg-color2", "#D0A2F7");
  }
});

let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
  playButtonSound();
}

function backspace() {
  if(result.value == 'Error'){
    result.value = '';
  }
  result.value = result.value.slice(0, -1);
  playButtonSound();
}

function clearResult() {
  result.value = "";
  playButtonSound();
}

function calculate() {
  try {
    if (result.value == "") {
      result.value = "0";
    }
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
  playButtonSound();
}

function playButtonSound() {
  const buttonSound = document.getElementById('buttonSound');
  buttonSound.currentTime = 0;
  buttonSound.play();

}
