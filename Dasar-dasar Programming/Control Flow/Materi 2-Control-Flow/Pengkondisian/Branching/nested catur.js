var s = '';

for (var i = 1; i <= 6; i++)
// PENGULANGAN PERTAMA DILAKUKAN UNTUK MENAMBAHKAN BARIS
{
    for (var j = 1; j <= 6; j++) 
        // PENGULANGAN KEDUA DILAKUKAN UNTUK MENCETAK BINTANG
        {
        if ( i % 2 == 1) {
            s += '# ';
            // NILAI i digunakan karena nilai i tidak akan berubah sampai dengan pengulangan terjadi lagi dari awal dan terjadi increment pada nilai i sehingga nilai diperbaharui.
        }
        else {
            s += ' #';
        }
        // PENGULANGAN KEDUA AKAN TERUS BERLANJUT ATAU MENGULANG SEBANYAK 6X SAMPAI DENGAN NILAI J = 6
    }
    s += '\n';
    // LALU KETIKA PENGULANGAN KEDUA TELAS SELESAI, AKAN DILAKUKAN PERINTAH UNTUK MENAMBAHKAN BARIS BARU.

    // SELANJUTNYA PENGULANGAN AKAN DILAKUKAN LAGI MULAI DARI PENGULANGAN PERTAMA DENGAN NILAI i++.
}

console.log(s);
