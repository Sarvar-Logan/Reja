                     // callback functions

// console.log("Jack Ma maslahatlari");
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


//##################################################################################################################################################################################################################




// MIT A-TASK
/*Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.
masalani yechimi:
Qilgan Yechimingiz…*/


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


//##################################################################################################################################################################################################################


// MIT B-TASK
/* Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.*/


// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("adsodi32khkhkh65kjkjkkb22bkb")); 

//##################################################################################################################################################################################################################
// MIT C-TASK

/*Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
 hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 
3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud*/


// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non; 
//     this.lagmon = lagmon; 
//     this.cola = cola; 
//   }

//   // Vaqtni olish methodi
//   vaqt() {
//     const now = new Date();
//     return `${now.getHours()}:${now.getMinutes()}`;
//   }

//   // Qoldiq methodi
//   qoldiq() {
//     console.log(`Hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//   }

//   // Sotish methodi
//   sotish(mahsulot, soni) {
//     if (this[mahsulot] !== undefined && this[mahsulot] >= soni) {
//       this[mahsulot] -= soni;
//       console.log(`${this.vaqt()}da ${soni}ta ${mahsulot} sotildi!`);
//     } else if (this[mahsulot] === undefined) {
//       console.log(`${this.vaqt()}da ${mahsulot} mavjud emas!`);
//     } else {
//       console.log(`${this.vaqt()}da ${mahsulot} dan yetarli miqdor yo'q!`);
//     }
//   }

//   // Qabul qilish methodi
//   qabul(mahsulot, soni) {
//     if (this[mahsulot] !== undefined) {
//       this[mahsulot] += soni;
//       console.log(`${this.vaqt()}da ${soni}ta ${mahsulot} qabul qilindi!`);
//     } else {
//       console.log(`${this.vaqt()}da ${mahsulot} mavjud emas!`);
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish('non', 3);
// shop.qabul('cola', 4);
// shop.qoldiq();





//##################################################################################################################################################################################################################
/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;*/

// function checkContent(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
  
//   let sortedS1 = string1.split('').sort().join('');
//   let sortedS2 = string2.split('').sort().join('');
  
//   return sortedS1 === sortedS2;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("killer", "liiiere"))




//##################################################################################################################################################################################################################
/*
E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"
*/

// function teskariString(string) {
//   const stringToArray = string.split("");
//   const reverseArray = stringToArray.reverse();
//   const arrayToString = reverseArray.join("")
//   return arrayToString;
// }

// const reverseFunction = teskariString("salom")

// console.log(reverseFunction)



//##################################################################################################################################################################################################################
/*
TASK F

Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.

MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!
*/

function findDoublers(s) {
  let harf = [];
  for (let char of s) {
      if (harf.indexOf(char) !== -1) {
          return true;
      }
      harf.push(char);
  }
  return false;
}
 

console.log(findDoublers('hello'));