/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for(let i = 1; i < 100; i++){
    let result = 0;
    for(let j=1; j <= i; j++){
        if(i % j == 0){
           result += 1;
        }
    }
    if(i >= 1 && result == 2){
        console.log("Bilangan Prima", i)
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
while (primeCounter < 10) {
primeCounter++;
    let pembagi = 0;
    let hasil = 0;
    while(pembagi <= primeCounter){
        pembagi++;
        if(primeCounter%pembagi == 0){
            hasil += 1;
        }
    }
    if(primeCounter >= 1 && hasil == 2){
        console.log(primeCounter)
    }
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
oddCounter =+ 1;
do {
    if(oddCounter == 99){
    console.log("Bilangan", oddCounter);
    }
    oddCounter+=2;
} while (oddCounter <= 100)
