
// DOM Traversal
const close = document.querySelectorAll('.close');

// Prevent Default
// prevent default adalah method dalam javascript yang berfungsi untuk mencegah aksi default dalam suatu element

// sebagai contoh tag <a> memiliki aksi default yaitu menghubungkan atau memindahkan halaman saat ini ke halaman lain. dengan menggunakan preventDefault() kita bisa mencegah aksi default tersebut

// contoh lainnya preventDefault adalah tag button secara default memiliki aksi untuk submit data yang telah diisikan kepada server, dengan menggunakan preventDefault() kita bisa mengubah aksi default ini menjadi aksi yang kita buat sendiri

// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });



// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('ok');
//     });
// });

// DOM : Event Bubbling

// Event Bubbling adalah sebuah fonemena dimana terjadinya beberapa event secara bersamaan dikarenakan childElement dari parentElement yang sama memiliki event yang saling menimpa.

// Sehingga ketika kita mengklik element child, maka element parent juga akan terpengaruh oleh event yang sama atau sebaliknya.

// untuk menghentinkan masalah ini makan digunakan method yaitu stopPropagation().

// stopPropagation() adalah method yang digunakan untuk menghentikan event bubbling yang terjadi pada suatu element.






const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parantElement.style.display = 'none';
    }
})