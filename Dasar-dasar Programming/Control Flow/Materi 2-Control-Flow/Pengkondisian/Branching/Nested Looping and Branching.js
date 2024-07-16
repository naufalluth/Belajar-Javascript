var s = '';
// FOR PERTAMA DILAKUKAN UNTUK MEMBUAT PENGULANGAN SELAMA 10X
// LALU MASUK KE FOR KEDUA UNTUK MEMULAI MENCETAK BINTANG
for (var i = 0; i < 10; i++) {
    // PENGULANGAN UNTUK MENCETAK BINTANG
    for (var j = 0; j < 10; j++) {
     s += '*';
    }
    // PERINTAH UNTUK MENCETAK GARIS BARU
    s += '\n';
}
console.log(s);

// PERINTAH UNTUK MENCETAK HASIL PENGULANGAN
var p = '';
for (var r = 0; r < 10; r++) {
    for ( var b = 0; b <= r; b++ ) {
        p += '*';
    }
    p += '\n';
}

console.log(p);

var g = '';
for (var l = 0; l < 10; l++) {
    for ( var m = 10; m > l; m-- ) {
        g += '*';
    }
    g += '\n';
}

console.log(g);