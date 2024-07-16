// CONTOH PENGGUNAAN IF ELSE

// var angka = prompt('Pilih Angka dari 1 - 6');
// var angka = prompt('Pilih Angka dari 1 - 3');

// if( angka == 1) {
//     alert('Anda Memilih Angka 1');
// } else if( angka == 2) {
//     alert('Anda Memilih Angka 2');
// } else if( angka == 3) {
//     alert('Anda Memilih Angka 3');
// } else if( angka == 4) {
//     alert('Anda Memilih Angka 4');
// } else if( angka == 5) {
//     alert('Anda Memilih Angka 5');
// } else if( angka == 6) {
//     alert('Anda Memilih Angka 6');
// } else {
//     alert('Anda Memilih Angka yang Salah!!')
//     angka = prompt('masukan angka lagi')
// } 


// SWITCH
// switch (angka){
//     case "1" :
//         alert('anda memasukan angka 1');
//         break;
//     case "2" :
//         alert('anda memasukan angka 2');
//         break;
//     case "3" :
//         alert('anda memasukan angka 3');
//         break;
//     default :
//     alert('anda memasukan angka yang salah')
//     break;
// }


var item = prompt('Masukan nama makanan / minuman : \n (cth: nasi, ayam, daging, susu, jus, bakwan, pizza, softdrink')
switch (item){
    case 'nasi' :
    case 'ayam' :
    case 'daging' :
    case 'susu' :
    case 'jus' :
        alert('Makanan / Minuman yang anda masukan sehat');
        break;
    case 'bakwan' :
    case 'pizza' :
    case 'softdrink' :
        alert('Makanan / Minuman yang anda masukan tidak sehat');
        break;
    default :
    alert('Makanan / Minumam tidak terdapat dalam List \n anda memasukan item yang salah ')
    break;
}

// SYNTAKS DIATAS MENUNJUKAN BAHWA APABILA VALUE BERADA DALAM KATEGORI YANG SAMA (SEHAT / TIDAK SEHAT) MAKA ALERT YANG DITAMPILKAN DISESUAI DENGAN KATEGORINYA.

// SEHINGGA TIDAK PERLU UNTUK MELAKUKAN PENGULANGAN PENULISAN AKSI ALERT BERKALI-KALI.

// CARA KERJA DARI SYNTAKS DIATAS ADALAH KETIKA INPUT DIMASUKAN MAKA PROGRAM AKAN MENCARI AKSI TERDEKAT YANG ADA SEBELUM KELUAR DARI PENGULANGAN MELALUI KEYWORD [break;]

// PROGRAM AKAN TERUS MENCARI DAN MELEWATI BERBAGAI CASE SAMPAI DENGAN MENEMUKAN AKSI TERDEKATNYA.


