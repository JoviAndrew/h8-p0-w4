function cariModus(arr) {
    // you can only write your code here!
    let possibleModus = [];
    let numCheck = 0;

    for(let counter = 0; counter<arr.length; counter++){
        if(counter+1 !== undefined){
            for(let counter2 = counter+1; counter2<arr.length; counter2++){
                if(arr[counter] === arr[counter2]){
                    possibleModus.push(arr[counter]);
                }else{
                    numCheck += 1;
                }
            }
        }
    }

    if(possibleModus.length === 0 || numCheck === 0){
        return -1;
    }else{
        return possibleModus[0];
    }

  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1