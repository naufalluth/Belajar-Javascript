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
        console.log(namaPenumpang + " Sudah ada di dalam angkot");

        // Jika seluruh kursi sudah terisi, penumpang duduk di kursi paling belakang
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // Jika Angkot Kosong tampilkan pesan bahwa angkot kosong
  if (penumpang.length == 0) {
    console.log("Angkot Masih Kosong");
  }
  // jika ada penumpang yang namanya sesuai, hapus nama penumpang dengan memberi nilai undefined.
  else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        // Jika terdapat nama penumpang yang tidak ada, maka tampilkan bahwa tidak terdapat penumpang didalam angkot
      } else if (i == penumpang.length - 1) {
        console.log(
          namaPenumpang +
            "Tidak ada penumpang dengan nama tersebut di dalam angkot."
        );
      }
      return penumpang;
    }
  }
};
