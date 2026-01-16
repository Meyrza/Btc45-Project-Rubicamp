use std::io::{self, Write};

fn main() {
    //while1()
    while2()
}

// fn while1() {
//     let mut input = String::new();

//     let angka: i32 = loop {
//         input.clear();
//         println!("Masukkan angka 1 - 10:");
//         io::stdin()
//             .read_line(&mut input)
//             .expect("Failed to read line");

//         match input.trim().parse::<i32>() {
//             Ok(n) if (1..=10).contains(&n) => break n,
//             Ok(n) => {
//                 println!("Input tidak valid, Masukkan angka 1 - 10: {}", n);
//                 continue;
//             }
//             Err(_) => {
//                 println!("Masukkan angka! (harus berupa bilangan bulat)");
//                 continue;
//             }
//         }
//     };

//     println!("Angka valid yang dimasukkan: {}", angka);
// }

fn while2() {
    let rahasia = 7;
    let mut coba = 0;
    let mut t = 0;

    while t != rahasia {
        print!("Tebak angka: ");
        io::stdout().flush().unwrap();

        let mut s = String::new();
        io::stdin().read_line(&mut s).unwrap();
        t = s.trim().parse().unwrap();
        coba += 1;

        if t < rahasia {
            println!("Terlalu kecil!");
        } else if t > rahasia {
            println!("Terlalu besar!");
        }
    }

    println!("Selamat! {} percobaan", coba);
}
