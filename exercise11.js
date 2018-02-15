function changeMe(arr) {
    // you can only write your code here!
    let resultArr = [];

    if(arr.length === 0){
        console.log("");
    }else{
        let dataPerson = {};
        for(let counter = 0; counter<arr.length; counter++){
            dataPerson = {};
            
            dataPerson.firstName = arr[counter][0];
            dataPerson.lastName = arr[counter][1];
            dataPerson.gender = arr[counter][2];
            
            
            if(arr[counter][3] === undefined){
                dataPerson.age = 'Invalid Birth Year';
            }else{
                dataPerson.age = 2018 - arr[counter][3];
            }
            resultArr.push(dataPerson);
        }

        for(counter = 0; counter < resultArr.length; counter++){
            console.log((counter+1)+ '. ' + resultArr[counter].firstName + ' '+resultArr[counter].lastName + ':');
            console.log(resultArr[counter]);
        }
        
        
        
    }      
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""