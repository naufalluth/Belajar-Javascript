// Menangkap Gambar User yang diklik

// Membangkitkan Angka Random untuk Pilihan Komputer
function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// Rules Permainan
function getHasil(comp, player) {
  if (player == comp) return "ANDA SERI!";
  if (player == "gajah") return (comp == "orang") ? "MENANG" : "KALAH";
  if (player == "orang") return (comp == "semut") ? "MENANG" : "KALAH";
  if (player == "semut") return (comp == "gajah") ? "MENANG" : "KALAH";
};
// EFEK PUTAR

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100)
};


// Menampilkan Skoring
let skorKomputer = 0,
skorPlayer = 0;

// REFACTORING HASIL
const pilihan = document.querySelectorAll("li img");
pilihan.forEach (function (pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();
        
        setTimeout(function(){
            const imgKomputer = document.querySelector(".img-komputer");
        imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

  const info = document.querySelector(".info");
  info.innerHTML = hasil;
        }, 1000)
        
    })
})


// Menampilkan Hasil dan Merubah Image Pilihan Computer
// pGajah
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// // pOrang
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// // pSemut
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector(".img-komputer");
//   imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
