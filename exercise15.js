function changeVocals (str) {
    //code di sini
    let newWord = '';
    for(let counter = 0; counter<str.length; counter++){
        if(str[counter] === 'a' || str[counter] === 'i' || str[counter] === 'u' ||str[counter] === 'e' || str[counter] === 'o' ||str[counter] === 'A'||str[counter] === 'I'||str[counter] === 'U'||str[counter] === 'E'||str[counter] === 'O'){
            let newCode = str[counter].charCodeAt(0) + 1;
            newWord = newWord + String.fromCharCode(newCode);
        }else{
            newWord = newWord + str[counter]
        }
    }
    return reverseWord(newWord);
  }
  
  function reverseWord (str) {
    //code di sini
    return setLowerUpperCase(str.split('').reverse().join(''));
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let result ='';

    for(var counter = 0; counter<str.length; counter++){

        if(str.charAt(counter).charCodeAt(0) >= 65 && str.charAt(counter).charCodeAt(0) <= 90){
            let newLetterASCII = str.charAt(counter).charCodeAt(0) + 32;
            let newLetter = String.fromCharCode(newLetterASCII);
            result = result + newLetter;
            
        }else if(str.charAt(counter).charCodeAt(0) >= 97 && str.charAt(counter).charCodeAt(0) <= 122){
            let newLetterASCII = str.charAt(counter).charCodeAt(0) - 32;
            let newLetter = String.fromCharCode(newLetterASCII);
            result = result + newLetter;
            
        }else{
            result = result + str.charAt(counter);
        }
    }
    return removeSpaces(result);
  }
  
  function removeSpaces (str) {
    //code di sini
    str = str.replace(' ', '');
    return str;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        return changeVocals(name);
    }

  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'