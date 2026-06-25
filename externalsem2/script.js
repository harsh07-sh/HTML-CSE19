const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");
const resultText = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const value = parseFloat(fahrenheitInput.value);

  if (Number.isNaN(value)) {
    resultText.textContent = "Please enter a valid number.";
    resultText.style.color = "#d14343";
    return;
  }

  const celsius = ((value - 32) * 5) / 9;
  resultText.textContent = `${value.toFixed(1)}F = ${celsius.toFixed(1)}C`;
  resultText.style.color = "#111";
});

fahrenheitInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convertButton.click();
  }
});
