// Contoh Object
var data = {
  nama: "Muhammad Naufal Luthfi",
  umur: 23,
  lulus: true,
  pendidikanTerakhir: {
    tingkat: "Sarjana Pendidikan",
    prodi: "Bimbingan dan Konseling",
    universitas: "Universitas Sultan Ageng Tirtayasa",
    IPSemester: [3.8, 3.75, 3.78, 3.98, 4],
    tahunLulus: 2024,
    predikat: "Sangat Memuaskan",
  },
  alamat: {
    komplek: "Perumahan Taman Banten Lestari",
    jalan: "Jalan Madani 5, Blok D7a No. 5",
    rt: 2,
    rw: 21,
    kelurahan: "Unyur",
    kecamatan: "Serang",
    kota: "Kota Serang",
    provinsi: "Banten",
    kodePos: 42111,
  },
  IPKumulatif: function () {
    var total = 0;
    var ips = this.pendidikanTerakhir.IPSemester;
    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};
