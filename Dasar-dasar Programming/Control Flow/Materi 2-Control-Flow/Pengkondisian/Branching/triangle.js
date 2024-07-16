var s = '';

// mencetak baris
for ( var i = 0; i <= 5; i++) {
    // printing spaces
    for ( var j = 0; j <= 5 - i; j++ ) {
        s += '#';
    }
    // printing stars
    for (var k = 0; k < 2 * i - 1; k++) {
        s += 'p';
    }
    // mencetak baris baru setelah pengulangan
    s += '\n';
}

console.log(s);