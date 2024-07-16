// CONTOH REKURSIF HITUNG MUNDUR TANPA BASE CASE (TITIK AKHIR)

// function hitungMundur(n) {
//   console.log(n);
//   return hitungMundur(n - 1);
// }

// hitungMundur(5);

// CONTOH REKURSIF HITUNG MUNDUR DENGAN BASE CASE (TITIK AKHIR)

function hitungMundur(n) {
  if (n === 0) {
    return;
  }
  //   UNTUK MEMBERHENTIKAN REKURSIF HARUS DITAMBAHKAN PENGKONDISIAN

  // SEPERTI CONTOH DIATAS YAITU
  // REKURSIF AKAN BERHENTI APABILA Nilai n === 0, KETIKAN NILAI PENGULANGAN SAMA DENGAN 0, FUNCTION AKAN DIBERHENTIKAN DENGAN KEYWORD return;
  console.log(n);
  return hitungMundur(n - 1);
}

hitungMundur(5);
