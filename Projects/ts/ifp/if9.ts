let jenisKendaraan: string = "mobil";
let durasi: number = 3; // jam
let tarifPerJam: number;

if (jenisKendaraan === "motor") {
  tarifPerJam = 2000;
} else if (jenisKendaraan === "mobil") {
  tarifPerJam = 5000;
} else if (jenisKendaraan === "truk") {
  tarifPerJam = 10000;
} else {
  console.log("Kendaraan tidak diizinkan");
  process.exit(0);
}

let totalBayar: number = tarifPerJam * durasi;

console.log("Jenis kendaraan: " + jenisKendaraan);
console.log("Durasi parkir: " + durasi + " jam");
console.log("Tarif per jam: Rp " + tarifPerJam);
console.log("Total bayar: Rp " + totalBayar);
