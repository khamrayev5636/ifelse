// let money = +prompt('Qancha pulingiz bor');

// if(money >= 15000){
//     console.log('Taksi');
// }else if(money >= 1400){
//    console.log('Aftobus');
// }else{
//     console.log('piyoda');
// }

// let a = +prompt('Birinchi sonni kiriting');
// let b = +prompt('Ikkinchi sonni kiriting');

// if(a === b && !isNaN(a) && !isNaN(b)){
//     console.log(a + ' teng ' + b + ' ga');
// }else if(a > b && !isNaN(a) && !isNaN(b)){
//     console.log(a + ' katta ' + b + ' dan');
// } else if(a < b && !isNaN(a) && !isNaN(b)){
//     console.log(a + ' kichik ' + b + ' dan');
// }else{
//     if(isNaN(a) && isNaN(b)){
//         console.log('Ikkala son notugri');
//     }else if(isNaN(a)){
//         console.log('Birinchi son notugri');
//     }
//     else{
//         console.log('ikkinchi son notugri');
//     }
// }


// let son = +prompt('Son kiriting');

// if(isNaN(son)){
//     console.log('Notugri kiritildi-ku');
// }else if(son % 2 == 0){
//     console.log('juft son');
// }else{
//     console.log('toq son');
// }



// 1-chi topshiriq ==============================================================

//  let son = +prompt('Yoshingizni kiriting');


// if( son > 0 && son <= 18){
//     alert('Yoshsiz. O`qishingiz kerak')
//     // console.log('Yoshsiz. O`qishingiz kerak');  //Brauzer oynasiga alert bilan ham console.log bilan ham chiqarsa buladi
// }else if( son > 18 && son <= 50){
//     alert('Ishlashingiz kerak')
//     // console.log('Ishlashingiz kerak');
// }else if( son > 50 && son <= 59){
//     alert('Yaqinda pensiyaga chiqasiz')
//     // console.log('Yaqinda pensiyaga chiqasiz');
// }else if( son > 59 && son <= 100){
//     alert('Pensionerga o`xshaysiz, hali tirik bo`lsangiz')
//     // console.log('Pensionerga o`xshaysiz, hali tirik bo`lsangiz');
// }else if( son > 100){
 //  alert('Vafot etgan joylari jannatdan busin')
// }else{
//     alert('Nimadir notog`ri ketib qoldi')
//     // console.log('Nimadir notog`ri ketib qoldi');
// }


// 2-chi topshiriq ================================================================================

// let ism = prompt('Ismimgizni kiriting');

// if( ism === 'Jamshid'){
//     console.log('Hello boss');
// }else{
//     console.log('Hello guest');
// }


// 3-chi topshiriq =====================================================================

// let x = +prompt('Birinchi sonni kiriting');
// let y = +prompt('Ikkinchi sonni kiriting');
// let z = +prompt('Uchinchi sonni kiriting');

// if( isNaN(x) || isNaN(y) || isNaN(z)){
//     alert('qiymat notugri kiritildi-ku');
// }else if( x > y && x < z || x < y && x > z){
//     alert( x + ' bu o`rta son');
// }else if( y > x && y < z || y < x && y > z){
//     alert(y + ' bu o`rto son');
// }else if(z > x && z < y || z < x && z > y){
//     alert(z+ ' bu o`rta qiymat');
// }else{
//     alert('Hammasi teng-ku')
// }


// ========================================================================================================================

// let son = +prompt('Hafta kunlarini sonlarda kiriting')

// if(isNaN(son)){
//     alert('son kiriting');
// }else if( son == 1){
//     alert('Dushanba')
// }else if( son == 2){
//     alert('Seshanba');
// }else if( son == 3){
//     alert('Chorshanba');
// }else if( son == 4){
//     alert('Payshanba')
// }else if( son == 5){
//     alert('Juma');
// }else if( son == 6){
//     alert('Shanba');
// }else if( son == 7){
//     alert('Yakshanba');
// }else{
//     alert('1 dan 7 gacha son kiriting');
// }

 
// =======================================================================================

// let son = +prompt('Son kiriting')


// switch (son) {
//     case 1:
//       alert('Dushanba') 
//     break;
//     case 2:
//       alert('Seshanab') 
//     break;
//     case 3:
//       alert('Chorshanba') 
//     break;
//     case 4:
//       alert('Payshanba') 
//     break;
//     case 5:
//       alert('Juma') 
//     break;
//     case 6:
//       alert('Shanba') 
//     break;
//     case 7:
//       alert('Yakshanba') 
//     break;
//     default:
//     alert('1 dan 7 gacha kiriting');

    
// }

// ========================================================================================================

// let son = +prompt('Son kiriting');

// if(isNaN(son)){
//     alert('Xato kiritildi-ku');
// }else if(son % 3 == 0 && son % 5 == 0){
//     alert('FizzBuzz');
// }else if( son % 3 == 0){
//     alert('Fizz');
// }else if( son % 5 == 0){
//     alert('Buzz');
// }else{
//     alert(son);
// }

// ============================================================================================


// let width = +prompt('widht kiriting');
// let height = +prompt('height kiriting');

// if(isNaN(width) && isNaN(height)){
//     alert('Son kiriting');
// }else if(width > height){
//     alert('True')
// }
// else if( width < height){
//     alert('False')
// }else{
//     alert('Ikkalasi teng')
// }