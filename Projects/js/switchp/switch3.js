let grade = "B";

let description;
switch (grade) {
    case "A":
        description = "Sangat Baik";
        break;
    case "B":
        description = "Baik";
        break;
    case "C":
        description = "Cukup";
        break;
    case "D":
        description = "Kurang";
        break;
    case "E":
        description = "Sangat Kurang";
        break;
    default:
        description = "Grade tidak valid";
}

console.log(`Grade ${grade}: ${description}`);
