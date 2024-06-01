// PENJUMLAHAN DUA KUBUS MENGGUNAKAN FUNCTION (Sebelum Refactoring)
function jumlahVolumeDuaKubus(a, b) {
  var volumeA;
  var VolumeB;
  var total;

  volumeA = a * a * a;
  VolumeB = b * b * b;

  total = volumeA + VolumeB;

  return total;
}

// PENJUMLAHAN DUA KUBUS (SETELAH REFACTORING)

function jumlahKubus(a, b) {
  return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(9, 3));

// PENJUMLAHAN BISA DILAKUKAN LANGSUNG DENGAN MEMASUKAN NILAI ARGUMENT KEDALAM RETURN, SEHINGGA TIDAK PERLU UNTUK MENYIMPAN NILAI SECARA SEMENTARA PADA VARIABEL SEPERTI VAR a;, Var b;
