function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let result ='';

    for(var counter = 0; counter<kalimat.length; counter++){

        if(kalimat.charAt(counter).charCodeAt(0) >= 65 && kalimat.charAt(counter).charCodeAt(0) <= 90){
            let newLetterASCII = kalimat.charAt(counter).charCodeAt(0) + 32;
            let newLetter = String.fromCharCode(newLetterASCII);
            result = result + newLetter;
            
          
        }else if(kalimat.charAt(counter).charCodeAt(0) >= 97 && kalimat.charAt(counter).charCodeAt(0) <= 122){
            let newLetterASCII = kalimat.charAt(counter).charCodeAt(0) - 32;
            let newLetter = String.fromCharCode(newLetterASCII);
            result = result + newLetter;
            
        }else{
            result = result + kalimat.charAt(counter);
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"