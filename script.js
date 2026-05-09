// задача 1.
// function countEvenUpTo(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// countEvenUpTo(10);

// задача 2.
// function findDivisible(x, y) {
//     let number = 1;
//     while(number % x !== 0 || number % y !== 0 ) {
//         number++;
//     }
//     return number;
// }
// console.log(findDivisible(3, 4))

// задача 3.
// function sumFromeOneTo(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumFromeOneTo(10))

// задача 4.
// function canEnter(age, hasTicket, isWithAdult) {
//     if (age >= 18 && hasTicket === true) {
//         return true;
//     } else if (age < 18 && hasTicket === true && isWithAdult === true) {
//         return true;
//     }
//     return false;
// }
// console.log(canEnter(18, false, true))

// задача 5.
// function printNumbersFromTo(a, b) {
//     while (a <= b) {
//         console.log(a)
//         a++;
//     }
// }
// printNumbersFromTo(1,4)

// задача 6.
// function traingle(height) {
//     for (let i = 1; i <= height; i++) {
//         let line = "";
//            for (let j = 1; j <= i; j++) {
//             line = line + "* ";
//            }
//         console.log(line);
//     }
// }
// traingle(3)

// задача 7.
// function countDigits(n) {
//     if (n === 0) return 1;
//     let counter = 0;
//     while (n > 0) {
//         n = ((n - (n % 10)) / 10);
//         counter++;
//     }
//     return counter;
// }
// console.log(countDigits(12345))
