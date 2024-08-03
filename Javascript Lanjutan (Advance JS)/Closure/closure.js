// function init() {
//     let nama = "Naufal";
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
//     // console.dir(tampilNama); // Closure
//     // Menampilkan closure pada console yang dibutuhkan oleh function
// }
// init();

// closure
// suatu function dapat disebut sebagai closure ketika function yang berada dalam suatu function membutuhkan akses atau menggunakan variabel yang terdapat pada parent functionnya. ketika terdapat variabel dalam function ke dua maka function tersebut tidak disebut sebagai closure.


// function init() {
//     // let nama = "Naufal";
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama();


// Kenapa menggunakan closure?
// 1. untuk membuat function factories
// function factories adalah proses membuat function yang mengembalikan function lainnya atau proses membuat function berdasarkan function yang telah ada.

// 2. untuk membuat private method


// Contoh Function Factories
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga sehat selalu`);
    }
}

// membuat factories function atau function berdasarkan function yang telah ada sehingga tidak perlu membuat function yang sama berulang kali.
let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam);


// let add = function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// }
// let a = add();


// console.log(a());
// console.log(a());
// console.log(a());


let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

// Imediately Invoked Function Expression (IIFE)
// IIFE adalah function yang langsung dijalankan setelah dibuat tanpa perlu memanggilnya kembali. IIFE biasanya digunakan untuk membuat closure. IIFE menggunakan kurung kurawal () setelah function yang dibuat. 
console.log(add());
console.log(add());
console.log(add());


function perkalian(faktor) {
    return function (angka) {
        return angka * faktor;
    };
}

// Function Kali Lima 
const kaliLima = perkalian(5);

// cetak hasil perkalian ke console

console.log(kaliLima(5)); // 25