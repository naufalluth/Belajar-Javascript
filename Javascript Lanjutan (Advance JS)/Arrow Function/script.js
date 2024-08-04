// // Arrow Function

// // Arrow Function merupakan metode penulisan function javascript modern. Arrow function digunakan untuk membuat pennulisan function menjadi lebih ringkas dan mudah untuk dibaca.


// // Contoh penulisan function biasa

// let tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Naufal'));

// // Penulisan dengan Arrow Function

// let tampilNama2 = (nama) => { return `Halo, ${nama}`; };

// console.log(tampilNama2('Luthfi'));

// // Jika function hanya memiliki 1 parameter, maka tidak memerlukan kurung. Boleh langsung dituliskan parameternya saja.

// let tampilNama3 = nama => { return `Halo, ${nama}` };

// console.log(tampilNama3('Muhammad'));

// // Jika terdapat dua parameter atau lebih maka parameter harus dituliskan di dalam kurung

// let salam = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(salam('Naufal', 'Pagi'));

// // Jika function hanya terdiri dari 1 baris code, tidak diperlukan adanya kurung kurawal dan keyword return (Disebut sebagai implisit return)

// let salamSiang = (nama) => `Selamat Siang, ${nama};`
// console.log(salamSiang("Luth"))


// // Jika parameter dalam function kosong maka harus tetap menggunakan kurung


// let salam2 = () => `Selamat Pagi, Semuanya!`;
// console.log(salam2());


// // Contoh Arrow Function dengan Map

// let mahasiswa = ['Naufal', 'Luthfi', 'Muhammad'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })

// console.log(jumlahHuruf) // [6, 6, 8]

// // Penulisan dengan Arrow Function

// let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf2);

// // Arrow Function dengan mengembalikan object

// let jumlahHuruf3 = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));
// console.table(jumlahHuruf3);

// // untuk mengembalukan object pada arrow function kuruf kurawal (object) harus dibungkus didalam tanda kurung ()

// // ex nama => ({nama: nama, panjang: nama.length});




// Konsep this pada Arrow Function

// const Mahasiswa = function () {
// this.nama = 'Naufal';
//     this.umur = 23;
//     this.sayHello = function () {
//         console.log(`Halo ${this.nama}, umur anda saat ini adalah ${this.umur} tahun`);
//     }

// };

// const naufal = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'Naufal';
//     this.umur = 23;
//     this.sayHello = () => {
//         console.log(`Halo ${this.nama}, umur anda saat ini adalah ${this.umur} tahun`);
//         console.log(this);

//         // Method pada arrow function dapat ditulis dengan menggunakan arrow function.
//     }


// };

// const naufal = new Mahasiswa();


// Constructor Function tidak bisa dibuat dengan menggunakan arrow function. Hal ini dikarenakan arrow function tidak memiliki konsep this. Jika kita menggunakan "this", maka javascript akan mencari this pada lexical scope diatasnya, secara terus-menerus sampai ke global scope (window). Jika tidak ditemukan, maka this akan bernilai undefined. Oleh karena itu, arrow function tidak cocok digunakan pada constructor function.



// Object Literal dengan Arrow Function

// const mahasiswa = {
//     nama: 'Naufal',
//     umur: 23,
//     sayHello: () => {
//         console.log(`Halo ${this.nama}, umur anda saat ini adalah ${this.umur} tahun`); // output : Halo undefined, umur anda saat ini adalah undefined tahun
//         console.log(this); // output : window
//     }
// }

// method sayHello akan menghasilkan nilai undefined hal ini dikarenakan arrow function tidak memiliki konsep this. Javascript akan mencari this pada lexical scope diatasnya. Dikarenakan tidak adanya object atau variabel dengan nilai this.nama dan this.umur maka javascript memberikan nilai "undefined"

// Object Literal dengan function expression biasa

// const mahasiswa2 = {
//     nama: 'Naufal',
//     umur: 23,
//     sayHello: function () {
//         console.log(`Halo ${this.nama}, umur anda saat ini adalah ${this.umur} tahun`); // output : Halo Naufal, umur anda saat ini adalah 23 tahun
//         console.log(this); // output : mahasiswa2
//     }
// }
// Namun berbeda jika menggunakan function declaration biasa. Maka this dalam console.log akan mengacu kepada this.nama dan this.umur pada object mahasiswa.




// Contoh Kasus Lain


// const Mahasiswa = function () {
//     this.nama = 'Naufal';
//     this.umur = 23;
//     this.sayHello = () => {
//         console.log(`Halo ${this.nama}, umur anda saat ini adalah ${this.umur} tahun`);
//         console.log(this);

//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);

// Hasil dari print console.log(this.umur++) akan menghasilkan nilai NaN. Dikarenakan setInterval langsung dideklarasikan bukan dalam bentuk function expression sehingga function setInterval mengalami hoisting. Sehingga this pada console.log(this.umur++) akan mengacu pada window. Karena this pada arrow function mengacu pada lexical scope diatasnya.


// untuk mengatasi hal ini kita bisa menggunakan arrow function pada setInterval. Hal ini dikarenakan arrow function tidak memiliki konsep this. Sehingga arrow function akan mencari this pada lexical scope diatasnya, yaitu pada this.umur

// Dengan kata lain. Dalam membuat function expression sebaiknya kita menggunakan arrow function agar this tidak mengacu pada window. Dan, mengambil nilai dari this pada object yang ditulis
// };

// const naufal = new Mahasiswa();




//  Contoh Kasus penggunaan di dunia nyata

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        // Penulisan dengan javascript lama
        // satu = temp;
        // satu = dua;
        // dua = temp;
        // dua = satu;

        // Penulidsan dengan Javascript Baru untuk menukar nilai variabel
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
})






