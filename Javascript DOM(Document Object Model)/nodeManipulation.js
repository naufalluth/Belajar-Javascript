// DOM Manipulation (Node Manipulation)

// Membuat Element Baru pada Document

// 1. document.createElement()
// membuat element baru
const para4 = document.createElement("p");
// 2. document.createTextNode()
// membuat text yang akan dimasukkan ke dalam element yang baru dibuat
const text4 = document.createTextNode("ini Paragraf ke-4");
// 3. node.appendChild()
// simpan tulisan ke dalam paragraf

para4.appendChild(text4);

// simpan paragraf ke section A
const sectionA = document.getElementById("a");
sectionA.appendChild(para4);

// 4. node.insertBefore()

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);
// 5. node.removeChild()
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);
// 6. node.replaceChild()
const sectionB = document.getElementById("b");
const p4 = sectionB.getElementsByTagName("p")[0];
const h2 = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");

h2.appendChild(teksH2Baru);

sectionB.replaceChild(h2, p4);

// Langkah-langkah dalam menambahkan atau mereplace element pad DOM

// 1. Buat element baru (document.createElement())
// 2. Buat text node untuk element baru (document.createTextNode())
// 3. Simpan text node ke dalam element baru (element.appendChild())
// 4. Simpan element baru ke dalam DOM (node.appendChild())
// 5. Replace element yang lama dengan element yang baru (node.replaceChild())
