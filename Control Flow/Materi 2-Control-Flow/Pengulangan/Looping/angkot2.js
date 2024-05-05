var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
} 

// Variable noAngkot pada fungsi For dimulai dari angka 7 dikarenakan nilai noAngkot telah mengalami penaikan sebanyak 6 kali pada fungsi While (noAngkot++) sebelumnya. 

// Oleh karena itu, ketika dilakukan inisialisasi nilai noAngkot pada fungsi For, maka nilai noAngkot akan dimulai dari angka 7.

// ATAU bisa juga dengan cara berikut:

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
// }

// pada inisialisasi noAngkot dapat dideklarasikan sebagai "noAngkot = angkotBeroperasi + 1" agar nilai noAngkot dimulai dari angka 7 atau angka angkot yang beroperasi.

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}

// Dengan demikian maka, fungsi For akan menampilkan output dari angka 7 hingga 10. Tidak dimulai dari awal angka 1. melanjutkan nilai sebelumnya!!!