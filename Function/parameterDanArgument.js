function jumlah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

var a = parseInt(prompt("Masukan Nilai Pertama"));
var b = parseInt(prompt("Masukan Nilai Kedua"));

var hasil = kali(jumlah(a, b), jumlah(a, b));

alert(hasil);
