const colorPreview = document.querySelector(".color-preview");
const colorCode = document.querySelector(".color-code");
const generateBtn = document.querySelector(".generate");
const copyBtn = document.querySelector(".copy");
const messageColor = document.querySelector(".message");

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateRandomColor = function () {
  const colorParts = [];
  for (let i = 0; i < 6; i++) {
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
  }
  const finalColor = `#${colorParts.join("")}`;
  return finalColor;
};

function updateUI(color) {
  colorPreview.style.backgroundColor = color;
  colorCode.textContent = color;
}

generateBtn.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  updateUI(randomColor);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCode.textContent);
  messageColor.textContent = "Copied Successfully";
  messageColor.classList.add("show");
  setTimeout(() => {
    messageColor.classList.remove("show");
    setTimeout(() => {
      messageColor.textContent = "";
    }, 400);
  }, 2000);
});
