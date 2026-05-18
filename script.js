// решение простейших задача на тему условий и циклов
// задача 1.
// const age = 18;
// if (age >= 18) {
//     console.log('Доступ разрешен');
// } else {
//     console.log('Доступ запрещен')
// }

// задача 2.
// const num = 44;
// if (num > 0) {
//     console.log("Положительное");
// } else if (num < 0) {
//     console.log('Отрицательное');
// } else {
//     console.log('Ноль')
// }

// задача 3.
// const number = 100;
// if (number % 2 === 0) {
//     console.log('четное');
// } else {
//     console.log('нечетное')
// }

// задача 4.
// const age = 66;
// if (age < 14) {
//     console.log('Доступ запрещен');
// } else if (age >= 14 && age <= 17) {
//     console.log("Доступ с разрешения родителей");
// } else {
//     console.log("Доступ разрешен")
// }

// задача 5.
// const day = 33;
// switch (day) {
//     case 1:
//         console.log('Понедельник');
//     break;
//     case 2:
//         console.log('Вторник');
//     break;
//     case 3:
//         console.log('Среда');
//     break;
//     case 4:
//         console.log('Четверг');
//     break;
//     case 5:
//         console.log('Пятница');
//     break;
//     case 6:
//         console.log('Суббота');
//     break;
//     case 7:
//         console.log('Воскресенье');
//     break;
// }

// задача 6.
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// задача 7.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// задача 8.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

// задача 9.
// let n = 10;
// while (n >= 1) {
//     console.log(n)
//     n--;
// }

// задача 10.
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = n * i;
//     console.log(sum)
// }

// задача 11.
// let num = 5;
// if (num >= 1 && num <= 10) {
//     console.log('число в диапазоне');
// } else {
//     console.log('число вне диапазона');
// }

// задача 12.
// const login = 'admin';
// const password = '1234';
// if (login === 'admin' && password === '12345') {
//     console.log('Выход выполнен');
// } else {
//     console.log('Ошбика выхода');
// }

// задача 13.
// const a = 22;
// const b = 22;
// if (a > b) {
//     console.log(a);
// } else if (a < b) {
//     console.log(b)
// } else {
//     console.log('Числа равны');
// }

// задача 14.
// const score = 10;
// if (score >= 90 && score <= 100) {
//     console.log('Отлично');
// } else if (score >= 70 && score <= 89) {
//     console.log('Хорошо');
// } else if (score >= 50 && score <= 69) {
//     console.log('Удовлетворительно');
// } else {
//     console.log('не сдал');
// }

// задача 15.
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum++;
//     }
// }
// console.log(sum)

// задача 16.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum++;
//     }
// }
// console.log(sum)

// задача 17.
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         sum++;
//     }
// }
// console.log(sum)

// задача 18.
// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     result *= i;
//     console.log(result)
// }

// задачаа 19.
// let sum = 0;
// let num = 456;
// let digit = 0;
// while (num > 0) {
//     digit =  num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
// }
// console.log(sum)

// задача 20.
// let num = 43;
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//         }
//     }
// }
// if (isPrime === true) {
//     console.log('Простое число');
// } else {
//     console.log('Не простое число')
// }

// задача 21.
// let num = String(12121);
// console.log(num.length)

// заадча 22.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         sum+=i;
//     }
// }
// console.log(sum)

// задача 23.
// let pin = "124";
// if (pin === "1234") {
//     console.log('Доступ разрешен');
// } else {
//     console.log('Неверный PIN')
// }

// задача 24.
// let num = String(4321);
// let NewNum = '';
// for (let i = num.length -1; i >= 0 ; i--) {
//     NewNum+=num[i];
// }
// console.log(NewNum)

// задача 25.
// let start = 15;
// let end = 40;
// let sum = 0;
// for (let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         sum +=i;
//     }
// }
// console.log(sum)

// задача 26.
// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumRange(1, 5))

// задача 27.
// function isDivisible(num, divisor) {
//     if (num % divisor === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isDivisible(10, 3))

// задача 28.
// function reverseNumber(num) {
//     let newNum = "";
//     for (let i = num.length - 1; i >= 0; i--) {
//         newNum += num[i];
//     }
//     return newNum;
// }
// console.log(reverseNumber(String(321)))

// задача 29.
// function countEven(start, end) {
//     let sum = 0;
    
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             sum++;
//         }
//     }
//     return sum;
// }
// console.log(countEven(1, 10))

// задача 30.
// function sumDigits(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + Number(num[i]);
//     }
//     return sum;
// }
// console.log(sumDigits(String(123)))

// задача 31.
// function ifPrime(num) {
//     for(let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(ifPrime(3))

// задача 32.
// function getMax(a, b) {
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     }
// }
// console.log(getMax(3, 5))

// задача 33.
// function sumEven(start, end) {
//     let sum = 0;

//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumEven(1, 10))

// задача 34.
// function countDigits(num) {
//     console.log(num.length);
// }
// countDigits('12345')

// задача 35.
// let sum = 0;
// let numbers = [3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum)

// задача 36.
// let sum = 0;
// let numbers = [12, 5, 8, 21, 30, 7];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sum++;
//     }
// }
// console.log(sum);

// задача 37.
// let big = 0;
// let numbers = [2, 4, 6, 7, 12, 3, 34];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= big) {
//         big = numbers[i];
//     }
// }
// console.log(big)

// задача 38.
// let numbers = [12, 34, 2, 33, 3];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
// console.log(min)

// задача 39.
// let numbers = [4, 15, 8, 23, 10, 42];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//         sum += numbers[i];
//     }
// }
// console.log(sum)

// задача 40.
// let numbers = [3, 8, 11, 14, 7, 20];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         newNumbers.push(numbers[i])
//     }
// }
// console.log(newNumbers)