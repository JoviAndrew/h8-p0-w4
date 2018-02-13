function hitungHuruf(kata) {
    // you can only write your code here!
    let kataArr = kata.split(' ');
    let result = [];

    //loop checking every words
    for(let counter1 = 0; counter1 < kataArr.length; counter1++){
        
        let repeatCharacter =[];
        
        //checking every letter within the word
        for(let counter2 = 0; counter2<kataArr[counter1].length; counter2++){
            if(counter2 + 1 !== undefined){
              
                //compare letters
                for(let counter3 = counter2+1; counter3<kataArr[counter1].length; counter3++){

                    //Condition where the character in the words are the same and have not been used yet
                    if(!repeatCharacter.includes(kataArr[counter1].charAt(3))){
                      if(kataArr[counter1].charAt(counter3) === kataArr[counter1].charAt(counter2)){
                          repeatCharacter.push(kataArr[counter1].charAt(counter3));
                      }
                    }
              
                }
                
            }
            
            
        }
      
        if(repeatCharacter.length === 0){
            result.push('0');
        }else{
            result.push(repeatCharacter.length);
        }
    }
    
    // console.log(result);
    //Find the highest repeatCharacter and return the index
    
    let findIndex = result[0];
    for(let counter = 1; counter<result.length; counter++){
      if(findIndex < result[counter]){
        findIndex = result[counter];
      }
    }
    
    //Finding the word with the highest repeatCharacter
    for(let counter = 0; counter<result.length; counter++){
      if(findIndex === result[counter]){
        return kataArr[counter];
      }
    }
    
    
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau