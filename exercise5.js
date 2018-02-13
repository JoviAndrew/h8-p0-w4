function ubahHuruf(kata) {
    // you can only write your code here!
    let newWord = '';
    for(let counter = 0; counter<kata.length; counter++){
        if(kata[counter] === 'z'){
            newWord += 'a'
        }else{
            newWord += String.fromCharCode(kata[counter].charCodeAt(0)+1);
        }
    }
    return newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu