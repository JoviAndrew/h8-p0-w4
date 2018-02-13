function fpb(angka1, angka2) {
    // you can only write your code here!
    let array1 = [];
    let array2 = [];
    let arrayResult = [];
    let result;
    
    //Finding how many digits can divide angka1
    for(let counter = 1; counter<=angka1; counter++){
        if(angka1 % counter === 0){
            array1.push(counter);
        }
    }

    //Finding how many digits can divide angka2
    for(let counter = 1; counter<=angka2; counter++){
        if(angka2 % counter === 0){
            array2.push(counter);
        }
    }

    
    //Combine angka1 and angka2
    for(let counter = 0; counter < array1.length; counter++){
        let counterDalem = 0;
        while(counterDalem < array2.length){
            if(array2[counterDalem] === array1[counter]){
                arrayResult.push(array2[counterDalem]);
            }
            counterDalem++;
        }        
    }

    arrayResult.sort((a,b) => b - a);
    result = arrayResult[0];
    return result;

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1