let angka = 2;
let iterasi = 0;

while (angka <= 1000) {
  let angkaSebelum = angka;
  angka = angka * angka;
  iterasi++;
  console.log("Iterasi " + iterasi + ": " + angkaSebelum + "^2 = " + angka);
}

console.log("Angka " + 2 + " harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log("Hasil akhir: " + angka);
