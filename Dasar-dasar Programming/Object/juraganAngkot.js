// // hal/object yang akan dikelola
// 1. Sopir,
// 2. Trayek,
// 3. Kas,
// 4. Penumpang (naik dan turun dan pembayaran)

// 1. Object Angkot

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.bensin = function (liter) {
    this.kas -= liter * 6500;
    console.log(
      "Anda Membeli bensin sebanyak " +
        liter +
        " Liter" +
        "dengan total harga " +
        liter * 6500 +
        " Rupiah" +
        "\nSisa Uang anda adalah " +
        this.kas +
        " Rupiah"
    );
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot Masih Kosong!");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Naufal", ["Pakupatan", "Ciwaru"], [], 0);
var angkot2 = new Angkot("Luthfi", ["Ciwaru", "Sindangsari"], [], 0);
