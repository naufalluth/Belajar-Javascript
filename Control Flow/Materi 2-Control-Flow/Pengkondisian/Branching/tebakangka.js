// MULAI PERMAINAN

var main = true;
while (main == true) {
  // MENANGKAP PILIHAN PEMAIN MELALUI PROMPT
  var p = alert("Silahkan Pilih Angka dari 1 - 10!");

  // MEMILIH BILANGAN BULAT RANDOM MELALUI LIBRARY MATH ROUND
  var comp = Math.floor(Math.random() * 10 + 1);

  // ATURAN KESEMPATAN dan BERMAIN
  var hasil = "";
  var k = 3;
  alert("ANDA MEMILIKI " + k + " KESEMPATAN UNTUK MENEBAK!!");
  while (k > 0 && a != comp) {
    var a = parseInt(prompt("Pilih Angka dari 1 - 10"));
    alert("Anda memiliki " + (k - 1) + " kesempatan lagi");
    if (a == comp) {
      hasil = "BENAR";
      alert(
        "Angka Pilihan Anda adalah " +
          a +
          " dan angka yang dicari adalah " +
          comp +
          " Jawaban Anda " +
          hasil
      );
    } else if (a < comp) {
      alert(
        "Angka yang Anda masukan terlalu rendah" + " Silahkan tebak kembali!"
      );
    } else if (a > comp) {
      alert(
        "Angka yang Anda masukan terlalu tinggi" + " Silahkan tebak kembali!"
      );
    } else if (a == "") {
      alert("Tolong Masukan Angka!!");
    } else {
      alert("Tolong Masukan Angka!!");
    }
    k--;

    if (a == comp) {
      alert("ANDA BENAR" + "\nPermainan telah Berakhir");
    } else if (k == 0) {
      alert(
        "Angka yang anda cari adalah " + comp + " \nPermainan Telah Berakhir"
      );
    }
  }
  main = confirm("INGIN BERMAIN LAGI?");
}
alert(
  "TERIMAKASIH TELAH BERMAIN!!" + "\nUntuk Bermain Silahkan Refresh Halaman"
);
