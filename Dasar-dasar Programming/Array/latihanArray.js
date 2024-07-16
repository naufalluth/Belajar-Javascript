// Array Penumpang
var penumpang = [];

// Function Penumpang Naik
// Paramater function 1. namaPenumpang & 2. arrayPenumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong,
  if (penumpang.length == 0) {
    // penumpang akan mengisi Array/kursi pertama,
    penumpang.push(namaPenumpang);
    // KEembalikan array/return isi penumpang dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika terdapat array/kursi kosong (penumpang turun)
      if (penumpang[i] == undefined) {
        // penumpang selanjutnya duduk/mengisi array yang kosong.
        penumpang[i] = namaPenumpang;

        // kembalikan isi & dan keluar dari function
        return penumpang;
        // Jika sudah ada nama yang sama
      } else if (penumpang[i] == namaPenumpang) {
        //tampilkan pesan kesalahannya
        console.log(namaPenumpang + "Sudah ada di dalam angkot");
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
      }
    }
  }
};
