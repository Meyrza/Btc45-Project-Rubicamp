let teks = "   hello world   ";
let langkah = 0;

while (teks.charAt(0) === ' ') {
  langkah++;
  teks = teks.substring(1);
  console.log("Langkah " + langkah + ": '" + teks + "'");
}

console.log("Hasil akhir: '" + teks + "'");
console.log("Total spasi yang dihapus: " + langkah);
