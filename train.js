                     // callback functions

// console. log("Jack Ma maslahatlari");
// const list = [

// "yahshi talaba boling", // 0-20

// "togri boshliq tanlang va koproq hato qiling", // 20-30

// "uzingizga ishlashingizni boshlang", // 30-40

// "siz kuchli bolgan narsalarni qiling", // 40-50

// "yoshlarga investitsiya qiling", // 50-60

// "endi dam oling, foydasi yoq endi", // 60
// ];


// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null); 
//   else if (a <= 20) callback(null, list[0]); 
//   else if (a > 20 && a <= 30) callback(null, list [1]); 
//   else if (a > 30 && a < 40) callback(null, list [2]);
//   else if (a > 40 && a < 50) callback(null, list [3]);
//   else if (a > 50 && a < 60) callback(null, list [4]);
//   else {
//     setTimeout(function() {
//       callback(null, list[5])
//     }, 5000)
//   }
// }

// console.log('passed here 0')
// maslahatBering(60, (err, data) => {

// if(err) console.log('ERROR', err)
//   else {
//     console.log('javob:', data)
//   }

// });

// console.log('passed here 1')




                        //  Asyncrinius functions 
// console. log("Jack Ma maslahatlari");
// const list = [

// "yahshi talaba boling", // 0-20

// "togri boshliq tanlang va koproq hato qiling", // 20-30

// "uzingizga ishlashingizni boshlang", // 30-40

// "siz kuchli bolgan narsalarni qiling", // 40-50

// "yoshlarga investitsiya qiling", // 50-60

// "endi dam oling, foydasi yoq endi", // 60
// ];


// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number"); 
//   else if (a <= 20)  return list[0]; 
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a < 40) return list[2];
//   else if (a > 40 && a < 50) return list[3];
//   else if (a > 50 && a < 60) return list[4];
//   else {
//       return list[5];
//     }
// }



// console.log('passed here 0')
// maslahatBering(25)
// .then(data => {
//   console.log('javob;', data)
// }).catch(err => {
//   console.log('Error:', err)
// });

// console.log('passed here 1')


// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(55);
//   console.log(javob);
// }

// run();

// MIT A-TASK
// function countLetter(letter, word) {
//   let count = 0;
//   for (let char of word) {
//       if (char === letter) {
//           count++;
//       }
//   }
//   return count;
// }

// console.log(countLetter("e", "engineer")); 





// MIT B-TASK
function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      count++;
    }
  }
  return count;
}
console.log(countDigits("adsodi32khkhkh65kjkjkkb22bkb")); 
