function cariMedian(arr) {
    // you can only write your code here!

    if(arr.length%2 === 0){
        let middleNumber = arr[(arr.length/2) -1];
        let middleNumber2 = arr[arr.length/2];
        let median = (middleNumber + middleNumber2) / 2
        return median;
    }else{
        return arr[Math.round(arr.length/2)-1];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5