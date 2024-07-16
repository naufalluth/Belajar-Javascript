var s = '';

for (var i = 0; i <= 10; i++) {
    for ( var j = 0; j < 10 - i; j++){
        s += ' ';
    }
for ( var f = 0; f <= i; f++) {
        s += '*';
}  s += '\n';
}  
for (var i = 0; i <= 10; i++) {
    for ( var j = 0; j <= i; j++){
        s += ' ';
    }
for( var f = 0; f < 10 - i; f++) {
    s += '*';
}
    s += '\n';
}  



console.log(s);