// EventHandling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// })



// DOM Traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none';

//         e.target.parentElement.style.display = 'none';
//     })
// };
// element.target adalah method yang digunakan untuk mengetahui element mana yang sedang di klik

close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});


// do

// syntak forEach (parameter pertama digunakan untuk memberikan element nama), lalu parameter kedua digunakan untuk memberikan nama event dari element pertama. setelah itu kita bisa membuat function untuk menjalankan aksi yang kita inginkan (dalam hal ini adalah menghilangkan element card yang di klik close nya)

// Prevent Default
// prevent default adalah method dalam javascript yang berfungsi untuk mencegah aksi default dalam suatu element

// sebagai contoh tag <a> memiliki aksi default yaitu menghubungkan atau memindahkan halaman saat ini ke halaman lain. dengan menggunakan preventDefault() kita bisa mencegah aksi default tersebut

// contoh lainnya preventDefault adalah tag button secara default memiliki aksi untuk submit data yang telah diisikan kepada server, dengan menggunakan preventDefault() kita bisa mengubah aksi default ini menjadi aksi yang kita buat sendiri

const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement.parentElement);
// element parent yang akan ditarget adalah body
console.log(nama.nextSibling);

// DOM TRAVERSAL METHOD
// parentNode -> mengambil parent Node  dari suatu element
// parentElement -> mengambil parent Element dari suatu element
// nextSibling -> mengambil element selanjutnya
// nextElementSibling -> mengambil element selanjutnya yang berupa element
// previousSibling -> mengambil element sebelumnya
// previousElementSibling -> mengambil element sebelumnya yang berupa element