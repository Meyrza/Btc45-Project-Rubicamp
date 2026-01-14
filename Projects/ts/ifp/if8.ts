let berat: number = 70; // kg
let tinggi: number = 1.75; // meter

let bmi: number = berat / (tinggi * tinggi);
let kategori: string;

if (bmi < 18.5) {
  kategori = "Underweight";
} else if (bmi < 25) {
  kategori = "Normal";
} else if (bmi < 30) {
  kategori = "Overweight";
} else {
  kategori = "Obese";
}

console.log(`BMI: ${bmi}`);
console.log(`Kategori: ${kategori}`);

export{}