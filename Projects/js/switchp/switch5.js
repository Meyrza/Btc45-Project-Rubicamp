let angka1 = 15;
let angka2 = 4;
let operator = "%";

const hitung = {
  "+": () => angka1 + angka2,
  "-": () => angka1 - angka2,
  "*": () => angka1 * angka2,
  "/": () => angka2 !== 0 ? angka1 / angka2 : "Error",
  "%": () => angka2 !== 0 ? angka1 % angka2 : "Error",
};

const hasil = hitung[operator]?.() ?? "Operator tidak valid";
console.log(hasil);
