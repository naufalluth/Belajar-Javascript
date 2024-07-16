// Javascript Object Methode

// 1. Object Literal
// let mahasiswa = {
// nama: "Naufal",
// nim: "2285190027",
// jurusan: "Bimbingan dan Konseling",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);

//     }
// };

// Paramater dalam console.log menggunakan backtick sehingga bisa menggunakan string literal. Tidak perlu menggunakan tanda + untuk menggabungkan string (Operator Concatenation)
// Pemanggilan properti dalam string literal dapat dilakukan dengan menggunakan "${namaProperti}" yang akan dipanggil.


// 2. Function Declaration
// function Mahasiswa(nama, nim, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.nim = nim;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam * 2;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
//     return mahasiswa;

// dalam membuat object dengan function declaration, pada akhir function harus di return object yang telah dibuat.

// ex = return mahasiswa;
// }

// // untuk membuat object baru maka dilakukan instansiasi object (pembuatan object) yang berisikan parameter () object yang akan dibuat.

// let naufal = Mahasiswa('Naufal', '2285190027', 10);
// let fauziah = Mahasiswa('Fauziah', '2285190064', 30);

// 3. Constructor Function (Keyword new)

// Constructor function memiliki syarat penulisan yaitu diharuskan menggunakan huruf kapital pada nama function yang akan diinisiani
// function Mahasiswa

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
//     this.main = function (jam) {
//         this.energi -= jam * 2;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
// }

// let Naufal = new Mahasiswa('naufal', 15);

// untuk membuat object baru dengan menggunakan constructor function. kita harus mendeklarasikan object baru dengan menggunakan keyword "new" diikuti dengan function dan parameter yang akan diinstansiasi.

// dengan menggunakan constructor function, kita tidak perlu return nilai dari function. Javascript akan secara otomatis mengembalikan object yang telah dibuat.

// 4. Object.create()

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     },
//     main: function (jam) {
//         this.energi -= jam * 2;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`)
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);

// dengan menggunakan object.create() kita bisa langsung menghubungkan object yang telah dibuat dengan object yang telah dibuat sebelumnya. parameter yang diisi adalah object yang akan dihubungkan dengan object yang baru dibuat. ex = let mahasiswa = Object.create(methodMahasiswa);

// yang berarti buat object mahasiswa baru dan hubungkan sekaligus dengan methodMahasiswa.
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Naufal = Mahasiswa('naufal', 15);


// 5. Prototipe/Prototype

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.nim = function (nim) {
    this.nim = nim;
    return `Halo ${this.nama}, nim kamu adalah ${this.nim}`
}

Mahasiswa.prototype.absen = function (absen) {
    this.absen = absen;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam * 2;
    return `Halo ${this.nama}, selamat main`
}

Mahasiswa.prototype.tidur = function (malam) {
    this.energi += malam * 10;
    return `Halo ${this.nama}, selamat tidur`
}

// method.prototype adalah method dalam javascript yang digunakan untuk menambahkan suatu properti atau method ke dalam object yang telah dibuat sebelumnya.

// Dengan menggunakan method prototype, kita tidak harus membuat object baru yang berisi method/properti yang akan digunakan. Kita dapat menghubungkan method dengan menggunakan prototype.

// Cara yang dilakukan untuk menggunakan protopype adalah dengan menambahkan method proptotype setelah object yang telah dibuat.

// Ex: Mahasiswa.prototype.makan = function (porsi) {
// EX: Mahasiswa.prototype.main = function (jam) {
// EX: Mahasiswa.prototype.tidur = function (malam) {

let naufal = new Mahasiswa('Naufal', 10);