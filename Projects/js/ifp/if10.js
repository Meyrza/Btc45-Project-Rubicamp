let angka1 = 10;
let angka2 = 3;
let operator = "/";

if (operator === "+") {
   console.log(`${angka1} + ${angka2} = ${angka1} + ${angka2}`);
} else if (operator === "-") {
   console.log(`${angka1} _ ${angka2} = ${angka1} + ${angka2}`);
} else if (operator === "*") {
   console.log(`${angka1} * ${angka2} = ${angka1} + ${angka2}`);
} else if (operator === "/") {
   if (angka1 !== 0) {
      console.log(`${angka1} / ${angka2} = ${(angka1 / angka2).toFixed(2)}`);
   } else {
      console.log("pembagian tidak boleh nol")
   }
} else {
   console.log("operator tidak tersedia")
}  
