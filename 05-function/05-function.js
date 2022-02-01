/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) { 
    if(salary < 5000000){
        let pajak = 0;
        console.log("Salary", salary, "taxCalc should be", pajak);
    }else if(5000000 <= salary && salary < 10000000){
        pajak = 5/100*salary;
        console.log("Salary", salary, "taxCalc should be", pajak);
    }else if(10000000 <= salary && salary < 20000000){
        pajak = 10/100*salary
        console.log("Salary", salary, "taxCalc should be", pajak);
    }else if(20000000 <= salary){
        pajak = 20/100*salary;
        console.log("Salary :", salary, "taxCalc should be :", pajak);
    }else{
        console.log("jangan lupa bayar pajak")
    }
 }
taxCalc(5000000);

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function  checkBMI (height, weight)  { 
    return (weight/(height**2)) * 100000
  }
  let bmi = checkBMI(6, 6);

  if(bmi < 18.5){
      console.log("BMI anda :", bmi, "under weight")
  }else if(18.5 < bmi && bmi < 24.9){
      console.log("BMI anda :", bmi, "normal")
  }else if(25 < bmi && bmi < 29.9){
      console.log("BMI anda :", bmi, "over weight")
  }else if(20 < bmi && bmi < 34.9){
      console.log("BMI :", bmi, "Obese")
  }else if(35 < bmi){
      console.log("BMI anda :", bmi, "extremely obese")
  }else{
      console.log("input weight dan height")
  }

/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) { 
    return sentence.replace(/\w\S*/g, function(kata){ 
        const kataBaru = kata.slice(0,1).toUpperCase() + kata.substr(1);
        return kataBaru
        });
 }
 console.log(convToUpperCase("hello bandung"))


 /// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
// function firstNonRepeatedChar(word) { 
//     for(let i = 0; i < word.length; i++){
//         for(let j = i+1; j < word.length; j++)
//         if(word[i] == word[j]){
//             console.log(word)
//         }
//     }
//  }
//  firstNonRepeatedChar("hallo");