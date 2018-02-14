function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    
    let arrRes = [];

    for(let counter = 0; counter<=angka; counter++){
      let stringRes = '';
      if(angka%counter === 0){
        let reminder = angka/counter;
        stringRes = stringRes + reminder + counter;
        arrRes.push(stringRes);
      }
    }
    // console.log(arrRes);
    let newArrRes = [];
    for(let counter = 0; counter< arrRes.length/2; counter++){
      newArrRes.push(arrRes[counter]);
    }
    
    newArrRes.sort((a,b) => a.length - b.length);
    let shortestLength = newArrRes[0].length;

    return shortestLength;

  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  