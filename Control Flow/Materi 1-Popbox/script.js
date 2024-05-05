// Alert (Popup box dengan pesan)
// alert("Hello, World!");
// alert("Selamat Datang");
// alert("Perkenalkan");
// alert("Nama Saya Muhammad Naufal");


// Prompt (Popup box dengan inputan)
// prompt("Masukkan Nama Anda");
// var nama = prompt("Masukkan Nama Anda");
// alert("Halo " + nama);
// alert(nama);



// Confirm (Popup box dengan pilihan true atau false)
// Confirm digunakan untuk meminta konfirmasi pada pengguna

// var konfirmasi = confirm("Apakah Anda yakin?");

// if( konfirmasi === true ) {
//     alert('Anda menekan tombol Ya');
// } else{
//     alert('Anda Menekan tombol Tidak');
// }

// contoh lainnya

alert('Selamat Datang...');
var lagi = true;

while (lagi === true) {
    var nama = prompt('Masukan Nama Anda');
    alert('Halo ' + nama);

    lagi = confirm('Coba lagi?');
}

alert('Terima Kasih...');