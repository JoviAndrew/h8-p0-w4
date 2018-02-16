function makanTerusRekursif(waktu) {
    // you can only write your code here!
    //Cara biasa
    
    // let menit = 0;
    // while(waktu > 0){
    //     waktu = waktu - 15;
    //     menit++;
    // }
    // return menit;

    //Cara Rekursif
    let menit = 0;
    if(waktu > 0){
        waktu = waktu - 15;
        menit++;
        return menit += makanTerusRekursif(waktu);
    }
    return menit;
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0