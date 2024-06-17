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

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    }); 
});

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