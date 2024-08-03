// Execution Context, Hoisting & Scope

// console.log(nama); // Output: undefined, dikarenakan variabel nama dideklarasikan setelah console.log
// var nama = "Naufal";



// Ketika menjalankan suatu program dalam javascript terdapat dua fase yang dilalui yaitu Creation Phase dan Execution Phase

// Creation Phase merupakan fase dimana javascript akan mengecek apakah ada variabel atau function yang dideklarasikan, jika ada maka akan diangkat ke atas (hoisting) dan diberikan nilai undefined.

// Dengan kata lain, Creation phase merupakan proses pengecekan variabel dan function yang terdapat pada script. Jika terdapat variabel dan function yang yang dideklarasikan maka variabel dan function tersebut akan diberikan nilai undefined.

// Terdapat beberapa hal yang dideklarasikan pada Creation Phase:
// 1. Membuat global object / Window
// 2. Membuat object this / Window
// 3. Mendeklarsikan variabel = undefined
// 4. Mendeklarasikan function = fn()
// 5. Hoisting (Memindahkan deklarasi variabel dan function ke atas)

// Hoisting adalah proses mengangkat deklarasi variabel dan function ke atas. Maksud memindahkan atau mengangkat variabel atau function adalah javascript secara default akan menganggap bahwa variabel atau function sudah dideklrasikan sebelum perintah dijalankan. Sehingga variabel atau function bisa dipanggil ketika program dijalankan.

// Execution Phase
// Execution Phase merupakan fase dimana javascript akan mengeksekusi program yang telah dideklarasikan pada Creation Phase. Pada fase ini javascript akan mengeksekusi program dari atas ke bawah.


// var nama = "Muhammad Naufal Luthfi";
// var umur = 23;

// function sayHello() {
//     return `Halo, nama saya ${nama}, usia saya saat ini adalah ${umur}. salam kenal!`;
// }

// console.log(sayHello());
// Output: Halo, nama saya Muhammad Naufal Luthfi, usia saya saat ini adalah 23. salam kenal!


// terdapat 2 jenis scope dalam javascript yaitu:

// 1. Global Scope
// Global Scope adalah variabel yang dideklarasikan diluar function. Variabel yang dideklarasikan diluar function dapat diakses dimana saja dalam script.
// 2. Local Scope
// Local Scope adalah variabel yang dideklarasikan didalam function. Variabel yang dideklarasikan didalam function hanya dapat diakses dalam function tersebut.

// terdapat beberapa hal yang dijalankan dalam local creation dan execution phase:
// 1. Membuat local object / window
// 2. membuat arguments (array yang berisi nilai yang dikirimkan ke function)
// 3. Hoisting (memindahkan deklarasi variabel dan function ke atas)



// var nama = "Muhammad Naufal Luthfi";
// var username = "@naufal.luth";

// function cetakUrl(username) {
//     var instagramURL = "https://instagram.com/";
//     return instagramURL + username;
// }

// console.log(cetakUrl(username));





// function a() {
//     console.log("ini a");
//     function b() {
//         console.log("ini b");
//         function c() {
//             console.log("ini c");
//         }
//         c();
//     }
//     b();
// }
// a();


// Latihan

function satu() {
    var nama = "Muhammad Naufal Luthfi";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = "Naufal";
satu();
dua("Erik");
console.log(nama);