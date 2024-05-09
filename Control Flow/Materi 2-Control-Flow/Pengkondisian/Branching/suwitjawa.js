var main = true;
while (main == true) {
  // LOOPING PERMAINAN

  // Menangkap Pilihan Player
  var p = prompt("Pilih Suwit: gajah, semut, orang: ");

  // manangkap pilihan komputer
  // memilih bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rules/aturan

  var hasil = "";

  if (p == comp) {
    hasil = "ANDA SERI!";
  } else if (p == "gajah") {
    // if ( comp == 'orang') {
    //     hasil 'ANDA MENANG';
    // } else {
    //     hasil = 'ANDA KALAH';
    // }
    hasil = comp == "orang" ? "ANDA MENANG!" : "ANDA KALAH!";
    // MENGGUNAKAN OPERATOR TERNARY
  } else if (p == "orang") {
    hasil = comp == "semut" ? "ANDA MENANG" : "ANDA KALAH";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "ANDA KALAH!" : "ANDA MENANG!";
  } else {
    hasil = "MEMASUKAN PILIHAN YANG SALAH!!";
  }

  // tampilkan hasilnya

  alert(
    "Kamu Memilih : " +
      p +
      " dan Komputer Memilih : " +
      comp +
      "\nMaka hasilnya adalah kamu " +
      hasil
  );

  main = confirm("ANDA INGIN BERMAIN LAGI?");
}

alert("TERIMAKASIH TELAH BERMAIN");
