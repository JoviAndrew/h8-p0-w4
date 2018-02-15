function shoppingTime(memberId, money) {
    // you can only write your code here!
    var barang = [];
    let objResult = {};

    if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if(memberId === ""){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }else{
        objResult.memberId = memberId;
        objResult.money = money

        while(money >= 50000){

            if(money >= 1500000 && !barang.includes('Sepatu Stacattu')){
                barang.push('Sepatu Stacattu');
                money = money - 1500000;
            }else if(money >= 500000 && !barang.includes('Baju Zoro')){
                barang.push('Baju Zoro');
                money = money - 500000;
            }else if(money >= 250000 && !barang.includes('Baju H&N')){
                barang.push('Baju H&N');
                money = money - 250000;
            }else if(money >= 175000 && !barang.includes('Sweater Uniklooh')){
                barang.push('Sweater Uniklooh');
                money = money - 175000;
            }else if(money >= 50000 && !barang.includes('Casing Handphone')){
                barang.push('Casing Handphone');
                money = money - 50000;
            }else{
                break;
            }
        }

        objResult.barang = barang;
        objResult.changeMoney = money;
    }
    return objResult;

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja