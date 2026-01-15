let angka1 = 15;
let angka2 = 4;
let operator = "%";

let hasil;

switch (operator) {
  case "+":
    hasil = angka1 + angka2;
    break;

  case "-":
    hasil = angka1 - angka2;
    break;

  case "*":
    hasil = angka1 * angka2;
    break;

  case "/":
    hasil = angka2 !== 0 ? angka1 / angka2 : "Error";
    break;

  case "%":
    hasil = angka2 !== 0 ? angka1 % angka2 : "Error";
    break;

  default:
    hasil = "Operator tidak valid";
}

console.log(hasil);