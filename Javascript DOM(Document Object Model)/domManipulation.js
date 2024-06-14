// element.innerHTML

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Muhammad Naufal Luthfi</em>";

// const sectionA = document.getElementById("a");
// sectionA.innerHTML = "Hello World";

// element.style.<property>

// judul.style.color = "Whitesmoke";
// judul.style.backgroundColor = "salmon";
// judul.style.textAlign = "center";

// memanipulasi attribute. element.setAttribute() dan element.getAttribute()

// judul.setAttribute("name", "naufal");

const p2 = document.querySelector(".p2");

// p2.setAttribute("class", "label");

// element.classList(), method yang digunakan untuk memanipulasi class pada element

// classList.add() -> menambahkan class pada element
p2.classList.add("Label");
// classList.remove() -> menghapus class pada element
p2.classList.remove("Label");
// classList.toggle() -> jika class tidak ada, maka tambahkan class. Jika class sudah ada, maka hapus class
p2.classList.toggle("Label");
// classList.item() -> mengetahui class pada element
p2.classList.item(1);
// classList.contains() -> mengecek class pada element
p2.classList.contains("Label");
// classList.replace() -> mengganti class pada element
p2.classList.replace("Label", "Label2");
