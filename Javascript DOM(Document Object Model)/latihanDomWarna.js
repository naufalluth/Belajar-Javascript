const tombolWarna = document.getElementById("tombolUbahWarna");

// EventListener Ubah Warna
tombolWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "Salmon";
  //   document.body.setAttribute("class", "salmon");
  document.body.classList.toggle("salmon");
});

// Button Acak Warna
const tAcakWarna = document.createElement("button");
const tAcakText = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(tAcakText);
tAcakWarna.setAttribute("type", "button");

tombolWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
// Reset Button
const tReset = document.createElement("Button");
const resetText = document.createTextNode("Reset Warna");
tReset.appendChild(resetText);
tReset.setAttribute("type", "reset");
tAcakWarna.after(tReset);

// Slider Warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  document.body.style.backgroundColor = "rgb(" + r + ", 100, 100)";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", 100)";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ", " + b + ")";
});

// FUNCTION RESET WARNA
tReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(255, 255, 255)";
});
// mousemove
document.body.addEventListener("mousemove", function (event) {});

// Margin Left Button
const button = document.getElementsByTagName("button");
for (let i = 0; i < button.length; i++) {
  button[i].style.marginLeft = "5px";
}
