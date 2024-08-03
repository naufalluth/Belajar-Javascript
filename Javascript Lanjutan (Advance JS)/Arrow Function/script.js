// Arrow Function

// Arrow Function merupakan metode penulisan function javascript modern. Arrow function digunakan untuk membuat pennulisan function menjadi lebih ringkas dan mudah untuk dibaca.


// Contoh penulisan function biasa

let tampilNama = function (nama) {
    return `Halo, ${nama}`;
}

console.log(tampilNama('Naufal'));

// Penulisan dengan Arrow Function

let tampilNama2 = (nama) => { return `Halo, ${nama}`; };

console.log(tampilNama2('Luthfi'));

// Jika function hanya memiliki 1 parameter, maka tidak memerlukan kurung. Boleh langsung dituliskan parameternya saja.

let tampilNama3 = nama => { return `Halo, ${nama}` };

console.log(tampilNama3('Muhammad'));

// Jika terdapat dua parameter atau lebih maka parameter harus dituliskan di dalam kurung

let salam = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
}
console.log(salam('Naufal', 'Pagi'));

// Jika function hanya terdiri dari 1 baris code, tidak diperlukan adanya kurung kurawal dan keyword return (Disebut sebagai implisit return)

let salamSiang = (nama) => `Selamat Siang, ${nama};`
console.log(salamSiang("Luth"))


// Jika parameter dalam function kosong maka harus tetap menggunakan kurung


let salam2 = () => `Selamat Pagi, Semuanya!`;
console.log(salam2());


// Contoh Arrow Function dengan Map

let mahasiswa = ['Naufal', 'Luthfi', 'Muhammad'];

let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
})

console.log(jumlahHuruf)

// Penulisan dengan Arrow Function

let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf2);

// Arrow Function dengan mengembalikan object

let jumlahHuruf3 = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf3);

// untuk mengembalukan object pada arrow function kuruf kurawal (object) harus dibungkus didalam tanda kurung ()

// ex nama => ({nama: nama, panjang: nama.length});





