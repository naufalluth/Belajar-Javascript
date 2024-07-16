// This

// This pada Object Global/Window
var a = 10;

console.log(this.a); // 10
console.log(window.a); // 10

// ketika memanggil this pada scope/lingkup global maka this akan merujuk pada object global atau window, hal ini dikarenakan Object Variabel yang dipanggil terletak pada object global/window atau di luar function.

// This pada Function Declaration

function halo() {
  console.log(this); // window
  console.log(this === window); // true
  console.log("halo");
}

this.halo(); // memanggil function halo() pada object global/window.

// sama seperti sebelumnya dalam kasus function declaration, apabila kita memanggil this maka this akan merujuk/,mengembalikan object global/window.

// This pada Object Literal

var object = { nama: "Muhammad Naufal Luthfi", umur: 23, lulus: true };
object.halo = function () {
  console.log(this); // object
  console.log(this === object); // true
  console.log("halo " + this.nama); // halo Muhammad Naufal Luthfi
};

object.halo(); // memanggil function halo() pada object object.

// Pada konteks Object Literal, this akan mengembalikan object yang bersangkutan, dalam hal ini object atau nilai yang berada di dalam object.

// This pada Constructor Function

function Halo() {
  console.log(this); // object
  console.log("Halo"); // Halo
}

var object1 = new Halo(); // memanggil function Halo() pada object object1
var object2 = new Halo(); // memanggil function Halo() pada object object2

// Pada Konteks Constructor Function, this akan mengembalikan object yang baru dibuat, dalam hal ini object1 dan object2.
