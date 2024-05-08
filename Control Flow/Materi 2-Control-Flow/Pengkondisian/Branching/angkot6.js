// SOLUSI PERTAMA (MIRIP PUNYA PAK DHIKA Menggunakan operator LOGIKA)
var angkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;
var angkotLembur = [5, 8, 10];

for (angkot; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotBeroperasi && angkot != 5 ) {
        console.log('Angkot No. ' + angkot + ' bereoperasi dengan baik.');
    } else if ( angkot === 8 || angkot === 10 || angkot === 5 ) {
        console.log('Angkot No. ' + angkot + ' sedang lembur')
    } else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
    }
}


// SOLUSI KEDUA (MENUKAR KONDISI PADA IF DAN ELSE IF)

// for (angkot; angkot <= jmlAngkot; angkot++) { 
//     if ( angkot === 8 || angkot === 10 || angkot === 5 ) {
//         console.log('Angkot No. ' + angkot + ' sedang lembur')
//     } 
//     else if (angkot <= angkotBeroperasi) {
//         console.log('Angkot No. ' + angkot + ' bereoperasi dengan baik.');
//     }
//     else{
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
//     }
// }



// SOLUSI KETIGA (MENAMBAHKAN VARIABEL ANGKOT LEMBUR)

// for (angkot; angkot <= jmlAngkot; angkot++) {
//     if (angkot <= angkotBeroperasi && angkot !== angkotLembur ) {
//         console.log('Angkot No. ' + angkot + ' bereoperasi dengan baik.');
//     } else if ( angkot === angkotLembur ) {
//         console.log('Angkot No. ' + angkot + ' sedang lembur')
//     } else{
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
//     }
// }


// NANTI DICARI LAGI CARANYA UNTUK KOMPARASI DATA DARI ARRAY 