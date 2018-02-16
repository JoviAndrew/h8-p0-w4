function kaliTerusRekursif(angka) {
    // you can only write your code here!
    //Cara Biasa
    let digits = angka.toString()
                    .split("")
                    .map(num => parseInt(num));
    
    let result = 1;
    
    for(let counter = 0; counter<digits.length; counter++){
        result *= digits[counter]
    }

    if(digits.length !== 1){
      return kaliTerusRekursif(result)
    }
      return result;

}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6