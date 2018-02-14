function checkAB(num) {
    // you can only write your code here!
    let counterCheck = 0;
    for(let counter = 0; counter<num.length; counter++){
        if(num.charAt(counter) === 'a' || num.charAt(counter) === 'b'){
            if(num.charAt(counter+4) === 'a' || num.charAt(counter + 4) === 'b'){
                return true;
            }
        }
    }
    return false;

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false