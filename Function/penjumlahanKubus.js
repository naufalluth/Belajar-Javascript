// var a = 8;
// var b = 6;
// var volumeA;
// var VolumeB;
// var total;

// volumeA = a * a * a;
// VolumeB = b * b * b;

// total = volumeA + VolumeB;

// alert(total);

// PENJUMLAHAN DUA KUBUS MENGGUNAKAN FUNCTION

function jumlahVolumeDuaKubus(a, b) {
  var volumeA = a * a * a;
  var volumeB = b * b * b;
  var total = volumeA + volumeB;

  return total;
}

var ulang = true;

while (ulang == true) {
  alert("Silahkan Masukan Ukuran Kubus yang ingin dihitung!");
  var a = parseInt(prompt("Masukan Ukuran Sisi Kubus Pertama"));
  var b = parseInt(prompt("Masukan Ukuran Sisi Kubus Kedua"));

  alert(
    "Jumlah Ukuran Volume dari kedua kubus tersebut adalah " +
      jumlahVolumeDuaKubus(a, b) +
      " CM Kubik"
  );

  ulang = confirm("Apakah Anda ingin Melakukan Penjumlahan Kembali?");
}

alert("Terimakasih!");
