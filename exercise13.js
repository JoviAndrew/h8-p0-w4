function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    
    //Variable for item A
    let shoppersArrA = [];
    let totalBarangA = 0;
    let totalProfitA = 0;

    //Variable for item B
    let shoppersArrB = [];
    let totalBarangB = 0;
    let totalProfitB = 0;

    //Variable for item C
    let shoppersArrC = [];
    let totalBarangC = 0;
    let totalProfitC = 0;

    for(let counter = 0; counter <shoppers.length; counter++){

        if(shoppers[counter].product === 'Sepatu Stacattu' && totalBarangA <= listBarang[0][2]){

            //If Stocks are lower then the amount being purchased, break the loop
            if((listBarang[0][2] - totalBarangA) < shoppers[counter].amount) continue;

            shoppersArrA.push(shoppers[counter].name);
            totalBarangA = totalBarangA + shoppers[counter].amount;
            let tempTotal = listBarang[0][1] * shoppers[counter].amount;
            totalProfitA += tempTotal; 
        }else if(shoppers[counter].product === 'Baju Zoro' && totalBarangB <= listBarang[1][2]){

            if((listBarang[1][2] - totalBarangB) < shoppers[counter].amount) continue;

            shoppersArrB.push(shoppers[counter].name);
            totalBarangB = totalBarangB + shoppers[counter].amount;
            let tempTotal = listBarang[1][1] * shoppers[counter].amount;
            totalProfitB += tempTotal; 
        }else if(shoppers[counter].product === 'Sweater Uniklooh' && totalBarangC <= listBarang[2][2]){

            if((listBarang[2][2] - totalBarangC) < shoppers[counter].amount) continue;

            shoppersArrC.push(shoppers[counter].name);
            totalBarangC = totalBarangC + shoppers[counter].amount;
            let tempTotal = listBarang[2][1] * shoppers[counter].amount;
            totalProfitC += tempTotal; 
        }
    }

    let output = [];
    let objOutput = {};

    for(let counter = 0; counter<3; counter++){
        objOutput = {};
        if(counter === 0){
            objOutput.product = 'Sepatu Stacattu';
            objOutput.shoppers = shoppersArrA;
            objOutput.leftOver = listBarang[0][2] - totalBarangA;
            objOutput.totalProfit = totalProfitA
        }else if(counter === 1){
            objOutput.product = 'Baju Zoro';
            objOutput.shoppers = shoppersArrB;
            objOutput.leftOver = listBarang[1][2] - totalBarangB;
            objOutput.totalProfit = totalProfitB
        }else if(counter === 2){
            objOutput.product = 'Sweater Uniklooh';
            objOutput.shoppers = shoppersArrC;
            objOutput.leftOver = listBarang[2][2] - totalBarangC;
            objOutput.totalProfit = totalProfitC
        }
        output.push(objOutput);

    }

    return output;
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]