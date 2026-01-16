let angka = 100;
let langkah = 0;

while (angka >= 1) {
  let sebelum = angka;
  angka = angka / 2;
  langkah++;
  console.log("Langkah " + langkah + ": " + sebelum + " / 2 = " + angka);
}
console.log("Proses selesai setelah " + langkah + " langkah");