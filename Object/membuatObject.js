// Membuat Object
// 1. Object Literal

var mhs = {
  nama: "Muhammad Naufal Luthfi",
  nim: "2285190027",
  email: "2285190027@untirta.ac.id",
  jurusan: "Bimbingan dan Konseling",
};

var mhs2 = {
  nama: "Fauziah",
  nim: "2285190064",
  email: "2285190064@untirta.ac.id",
  jurusan: "Bimbingan dan Konseling",
};

//2. Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;

  return mhs;
}

var mhs3 = buatObjectMahasiswa(
  "Tri Haryanti",
  "2285190037",
  "2285190037@untirta.ac.id",
  "Bimbingan dan Konseling"
);

// function dibuat sekali, dan data/object yang ingin dibuat dapat dibuat secara berulang-ulang dengan memasukan argument pada parameter.

// 3. Constructor
// function construtor penulisan nama function biasanya diawali dengan huruf besar.

// Perbedaan antara function declaration dengan constructor adalah pada function declaration kita harus membuat object/variabel kosong terlebih dahulu, sedangkan pada constructor kita tidak perlu membuat object kosong terlebih dahulu.

function Mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}

// Memanggil constructor CARA 1 (DECLARATION VARIABEL)
var mhs4 = new Mahasiswa(
  "Angga Pradita",
  "2285190038",
  "2285190038@untirta.ac.id",
  "Teknik Mesin"
);

// atau, CARA 2 (TANPA DECLARATION VARIABEL)

new Mahasiswa("Angga Pradita", "2285190038", "Teknik Mesin");
