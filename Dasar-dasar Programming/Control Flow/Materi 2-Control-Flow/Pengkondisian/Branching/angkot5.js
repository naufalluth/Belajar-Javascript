var angkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (angkot; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + angkot + ' bereoperasi dengan baik.');
    } else if ( angkot % 2 === 0 ) {
        console.log('Angkot No. ' + angkot + ' sedang lembur')
    } else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
    }
}

// ATAU JAWABAN MENURUT PAK DHIKA

var angkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

for (angkot; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + angkot + ' bereoperasi dengan baik.');
    } else if ( angkot === 8 || angkot === 10  ) {
        console.log('Angkot No. ' + angkot + ' sedang lembur')
    } else{
        console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
    }
}
// Menggunakan Operator Logika yaitu atau " || ". TERDAPAT 3 BENTUK OPERATOR LOGIKA, DIANTARANYA && ( AND ), || ( OR ), ! ( NOT ).  

