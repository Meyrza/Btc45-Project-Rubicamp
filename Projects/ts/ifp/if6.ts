let totalBelanja: number = 350000;
let diskon: number = 0;

if (totalBelanja >= 500000) {
  diskon = 20;
} else if (totalBelanja >= 200000) {
  diskon = 10;
} else if (totalBelanja >= 100000) {
  diskon = 5;
}

let totalBayar = totalBelanja - (totalBelanja * diskon / 100);

console.log(`Total belanja: Rp ${totalBelanja}`);
console.log(`Diskon: ${diskon}%`);
console.log(`Total bayar: Rp ${totalBayar}`);

export {};