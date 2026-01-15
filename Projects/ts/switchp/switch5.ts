let angka1: number = 15;
let angka2: number = 4;
let operator: string = "%";

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

export{}