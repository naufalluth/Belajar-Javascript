// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p3.style.backgroundColor = "lightblue";
// }

// const p2 = document.getElementsByClassName("p2")[0];
// p2.onclick = ubahWarna;

// addEventListener()

// const p4 = document.querySelector("section#b p");

// p4.addEventListener("click", function () {
//   const ul = document.querySelector("ul");
//   const liBaru = document.createElement("li");
//   const liIsi = document.createTextNode("Ini LI Event Handler");
//   liBaru.appendChild(liIsi);
//   ul.appendChild(liBaru);
// });

const p3 = document.querySelector(".p3");

// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
// };

// Event Handler hanya dapat menjalankan satu fungsi saja, fungsi lain akan direplace dengan fungsi paling terakhir

// sedangkan addEventListener() dapat menjalankan lebih dari satu fungsi. fungsi akan ditambahkan dan tumpuk sesuai dengan urutan penulisan code

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});

// Daftar Event Listener

// Mouse Event
// click, dblclick, mouseenter, mouseleave, mouseover, mouseout, mousedown, mouseup, mousemove
// keyboard Event
// keydown, keyup, keypress
// Resource Event
// load, error, unload
// Focus Event
// focus, blur, focusin, focusout
// View Event
// resize, scroll
// Form Event
// submit, change, input, invalid, reset
// CSS Animation Event
// animationstart, animationend, animationiteration
// Drag Event
// drag, dragstart, dragend, dragenter, dragleave, dragover, drop
// Clipboard Event
// copy, cut, paste
// Media Event
// play, pause, volumechange, ended
// Progress Event
// loadstart, progress, error, abort, load, loadend
// Storage Event
// storage, storagecommit
// Update Event
// update, obsolete
// Service Worker Event
// activate, message, install, fetch, sync
// Notification Event
// show, click, close, error
// History Event
// popstate, hashchange, pageshow, pagehide
// Offline Event
// online, offline
// Device Event
// devicemotion, deviceorientation, deviceproximity, userproximity
// Page Visibility Event
// visibilitychange
// Printing Event
// beforeprint, afterprint
// Speech Recognition Event
// result, nomatch, error, start, end, soundstart, soundend, speechstart, speechend
// Touch Event
// touchstart, touchend, touchmove, touchcancel
// Pointer Event
// pointerover, pointerout, pointerdown, pointerup, pointermove, pointercancel, pointerlockchange, pointerlockerror
// Animation Event
// animationstart, animationend, animationiteration
// Transition Event
// transitionend
// Server Sent Event
// message, open, error
// dll
