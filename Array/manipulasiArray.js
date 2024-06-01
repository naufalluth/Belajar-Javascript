// Manipulasi Array

// 1. Menambahkan isi Array
var arr = [];
arr[0] = "Muhammad";
arr[1] = "Naufal";
arr[2] = "Luthfi";
arr[3] = "Ardian";

console.log(arr);

// Untuk menambahkan isi Array dapat dituliskan nama array dan index-nya, Ex= arr[0] = 'Muhammad'

// Dalam menambahkan isi Array dengan menggunakan cara ini perhatikan urutan index yang dimasukan. jangan sampai terlewat. Apabila terdapat nomor index yang terlewat dan tidak diisi dengan nilai apapun, maka index terus akan berisikan undefined

// 2. Menghapus isi Array
var arr2 = ["Muhammad", "Naufal", "Luthfi"];
arr2[1] = undefined;

console.log(arr2[1]);

// dalam menghapus Array secara manual, nilai yang terdapat didalam array bisa diubah/ditimpa dengan nilai undefined.

// 3. Menampilkan isi Array dengan Looping
var arr3 = ["Muhammad", "Naufal", "Luthfi"];

for (let i = 0; i < arr3.length; i++) {
  console.log("Nama Siswa ke-" + (i + 1) + " " + arr3[i]);
}

// 4. Methode pada Array

// Terdapat 4 Methode Utama pada Array yaitu lenght, join, push, pop, unshift & shift

// a) Join
// Method Join berfungsi untuk menggabungkan seluruh array lalu kemudian mengubah array itu menjadi "String"
var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// console.log(hari.join(" - "));

// console.log(hari.length);

// Parameter pada method join berfungsi sebagai separator yaitu menambahkan atau mengubah tanda pemisah setiap elemen pada array ketika ditampilkan.

// b) Push & Pop

// Push merupakan method yang berfungsi untuk menambahkan elemen baru pada akhir array.

hari.push("ahad");

// Pop merupakan method yang berfungsi untuk menghapuskan elemen terakhir pada array;

hari.pop();

// c) unshift & shift

// unshift merupakan method yang digunakan untuk menambahkan elemen baru pada awal array. dalam menambhakan elemen baru pada awal elemen dapat diisi melalui parameter

hari.unshift("Hari");

// Shift merupakan method yang digunakan untuk menghilangkan/menghapus elemen pertama pada array. kebalikan dari pop

hari.shift();

// console.log(hari.join(" - "));
