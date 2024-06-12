// DOM SELECTION
//getElementById()

const judul = document.getElementById("judul");
// sebelum mengambil element, simpan element yang akan diambil ke dalam sebuah variabel.

judul.style.color = "WhiteSmoke";
judul.style.backgroundColor = "Salmon";
judul.innerHTML = "Muhammad Naufal Luthfi";
judul.style.textAlign = "center";

// document.getElementsByTagName()

const paragraph = document.getElementsByTagName("p");

// untuk manipulasi dengan menggunakan get Element By Tag Name, kita tidak bisa menggunakan cara yang sama dengan getElementById.

// HTMLCollection memiliki sifat yang sama seperti array, masing-masing value didalamnya memiliki nomor indecx.

// untuk memanipulasi element SPESIFIK yang berada dalam HTMLCollection, kita harus memanggil nomor Index dari elementnya.

// paragraph[0].style.backgroundColor = "lightblue";
// paragraph[1].style.backgroundColor = "lightblue";
// paragraph[2].style.backgroundColor = "lightblue";
// paragraph[3].style.backgroundColor = "lightblue";

// ATAU UNTUK MENGUBAH/MEMANIPULASI SEMUA ELEMENT PADA HTMLCollection, DAPAT DIGUNAKAN LOOPING

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = "lightblue";
}

// Apabila hanya terdapat 1 elemet yang memiliki tag yang diambil sebagai contoh 'h1', maka kita bisa menambahkan nomor index pertama atau [0] pada akhir penulisan selection. seperti contoh dibawah ini

const h1 = document.getElementsByTagName("h1")[0];

// document.getElementsByClassName()
// -> HTMLCollection

const p1 = document.getElementsByClassName("p1");
p1[0].style.backgroundColor = "lightgreen";
p1[0].innerHTML =
  "<strong>ini hasil manipulasi dengan menggunakan getElementsByClassName</strong>";
// atau

// const p1 = document.getElementsByClassName("p1")[0];
// p1.style.backgroundColor = "lightgreen";
