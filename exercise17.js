function totalDigitRekursif(angka) {
    // you can only write your code here!
    //Cara Biasa
    let digits = angka.toString()
                    .split("")
                    .map(num => parseInt(num));

    
    let result = digits[0];
    
    if(digits.length !== 1){
      let newDigits = '';
      
      for(let counter = 1; counter<digits.length; counter++){
        newDigits += digits[counter]
      }
      
      let newNum = parseInt(newDigits);
      
      
      return result + totalDigitRekursif(newNum)
    }
      return result;

}

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5