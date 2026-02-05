// задчача 1: Фильтрация пользователей по возрасту
// function getAdultUsers() {
//     const users = [
//     {name: 'Анна', age: 25},
//     {name: 'Борис', age: 17},
//     {name: 'Вера', age: 30},
//     {name: 'Глеб', age: 16},
//     {name: 'Дарья', age: 22},
//     ];

//     const adults = [];

//     for (let index = 0; index <= users.length - 1; index++) {
//         let element = users[index];
//         if (element.age >= 18) {
//             adults.push(element);
//         }
//     }
//     return adults;
// }
// console.log(getAdultUsers());

// задача 2: Подсчет сумыы четных чисел
// function sumEvenNumbers() {
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let sum = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         const element = numbers[index];
//         if (element % 2 === 0) {
//             sum = sum + element;
//         }
//     }
//     return sum;
// }
// console.log(sumEvenNumbers());

// задача 3: сумма чисел в диапазоне
// function sumRange(start, end) {
//     let sum = 0;
//     for (let index = start; index <= end; index++){
//         sum = sum + index;
//     }
//     return sum;
// }
// console.log(sumRange(1, 5));

// задача 4: сколько раз встречается цифра?
// function countDigit(number, digit) {
//     let str = number.toString();
//     let sum = 0;

//     for (let index = 0; index < str.length; index++) {
//         if (str[index] === String(digit)) {
//             sum++;
//         }
//     }
//     return sum;
// }
// console.log(countDigit(322323, 3))

// задача 5: возведение в степень
// function power(base, exponent) {
//     let resul = 1;
//     if (exponent === 0) {
//         return 1;
//     }
    
//     for (let index = 0; index < exponent; index++) {
//         resul = resul * base;
//     }
//     return resul;
    
// }
// console.log(power(2, 2));

// задача 6: найти длину массива имен
// function getNamesCount() {
//     const names = ['Дима', 'Борис', 'Настя', 'Виктория'];
//     let arr = 0;

//     for (let index = 0; index < names.length; index++) {
//         arr++;
//     }
//     return arr;
// }
// console.log(getNamesCount())

// задача 7: получить возраст пользователя их объекта
// function getUserAge() {
//     const user = {
//         name: 'Дарья',
//         age: 28,
//         city: 'Москва'
//     }
//     return user.age;
// }
// console.log(getUserAge())

// задача 8: проверить, есть ли элемент в массиве
// function hasNumber(target) {
//     const arr = [10, 20, 30, 40, 50];
//     let storage = 0;

//     for (let index = 0; index < arr.length; index++) {

//         if (arr[index] === target) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(hasNumber(60));

// задача 9: получить полное имя из объекта
// function getFullName() {
//     const user = {
//         firstName: 'Анна',
//         lastName: 'Петрова'
//     };

//     return `${user.firstName} ${user.lastName}`;
// }
// console.log(getFullName())

// задача 10: добавить новое свойство в объект
// function addAge() {
//     const person = {
//         name: 'Борис'
//     };
//     person.age = 30;

//     return person;
// }
// console.log(addAge())

// задача 11: проверить наличие свойства в объекте
// function hasProperty() {
//     const car = {
//         brand: 'Toyota',
//         year: 2020
//     }
    
//     return 'color' in car; // есть ли такое ключь В этом объекте
// }
// console.log(hasProperty())

// задача 12: сумма четных чисел до N
// function sumEvenUpTo(n) {
//     let sum = 0;
//     for (let index = 0; index <= n; index++) {
//         if (index % 2 === 0) {
//             sum = sum + index;
//         }        
//     }
//     return sum;
// }
// console.log(sumEvenUpTo(6));

// задача 13: количество цифр в числе
// function countDigits(num) {
//     if (num === 0) {
//         return 1;
//     }

//     let count = 0;
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
//     return count;
// }
// console.log(countDigits(123))

// задача 14: проверка на полидром числа
// function isNumberPalindrome(num) {
//     if (num < 0) {
//         return false;
//     }

//     let original = num;
//     let reversed = 0;

//     while(num > 0) {
//         let lastDigit = num % 10;
//         reversed = reversed * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     return reversed === original;
// }
// console.log(isNumberPalindrome(121))

// задача 15: сумма значений всех числовых свойств объекта
// function sumNumbericValues() {
//     const data = {
//         a: 10,
//         b: 30,
//         c: 3,
//         v: true,
//         o: 2
//     }

//     let sum = 0;

//     for (const key in data) {
//         let value = data[key]
//         if (typeof value === 'number') {
//             sum = sum + value;
//         }
//     }
//     return sum;
// }
// console.log(sumNumbericValues())

// задача 16: найти самого взрослого прользователя
// function getOldestUser() {
//     const users = [
//         {name: 'Алиса', age: 25},
//         {name: 'Борис', age: 30},
//         {name: 'Вера', age: 22}
//     ]

//     let oldest = users[0];
//     for (let index = 0; index < users.length; index++) {
//         if (users[index].age > oldest.age) {
//             oldest = users[index];
//         }
//     }
//     return oldest;
// }
// console.log(getOldestUser())

// задача 17: сумма нечетных числе до N
// function sumOddUpTo(n) {
//     let counter = 0;
//     for (let index = 0; index <= n; index++) {
//         if (index % 2 !== 0) {
//             counter = counter + index;
//         }
//     }
//     return counter;
// }
// console.log(sumOddUpTo(5))

// задача 18: Количество делителей числа
// function countDiviors(num) {
//     let counter = 0;
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countDiviors(6))

// задача 19: вывод FizzBuzz до N
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(15)

// задача 20: сумма всех чисел, кратных 3 или 5, до N
// function sumMultiples(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// console.log(sumMultiples(10));

// задача 21: возвращает площадь прямоугольника
// function calculateArea(width, height) {
//     return width * height;
// }
// console.log(calculateArea(4, 5))

// задача 22: условия
// function checkAge(age) {
//     if (age >= 18) {
//         return 'можно';
//     } else {
//         return 'нельзя';
//     };
// };
// console.log(checkAge(14))

// задача 23: написать функцию, которая принимает число n и возвращает сумму всех чисел от 1 до n включительно
// function sumNumbers(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum+=i;
//     }

//     return sum;
// }
// console.log(sumNumbers(5))

// задача 24: объекты
// function getInfo() {
//     const person = {
//     name: 'Дима',
//     age: 20,
//     city: 'Волгоград'
//     }

//     for (let key in person) {
//         console.log(`${key} : ${person[key]}`)
//     }
// }
// getInfo();

// задача 25: напиши функцию, которая принимает массив чисел и возвращает макс. число из массива
// function findMax(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         sum += element;
//     }
//     return sum;
// }
// console.log(findMax([4, 5, 6, 67]))

// задача 26: напиши функцию, которая возвращает итоговую цену
// function getDiscount(price, isVip) {
//     let discount = 0;
//     let summary = 0;
//     if (price !== 0) {
//         if (isVip === true) {
//         discount = (price / 100) * 25;
//         summary =  price - discount;
//     } else {
//         discount = (price / 100) * 10;
//         summary =  price - discount;
//     }
//     }
//     return summary;
// }
// console.log(getDiscount(1000, true));

// задача 27: напиши функцию, которая возвращает новый массив, содержащий только четные числа из исходного
// function filterEven(arr) {
//     let arrayEven = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arrayEven.push(arr[i]);
//         }
//     }
//     return arrayEven;
// }
// console.log(filterEven([3, 5, 2, 6, 7]));

// задача 28: объекты + условия
// function getUserStatus(user) {
//     if (user.isActive === false) {
//         return `Пользователь ${user.name} неактивен`;
//     } else if (user.isActive === true && user.age < 18) {
//         return `Пользователь ${user.name} - несовершенноетний`;
//     } else if (user.isActive === true && user.age >= 18) {
//         return `Пользователь ${user.name} активен`;
//     }
// }
// console.log(getUserStatus({name: 'Аня', age: 18, isActive: true}))

// задача 29: напиши функцию, которая возвращает массив имен пользователей старше или равных 18 лет.
// function getAdultName() {
//     const user = [
//         {name: 'Даша', age: 28},
//         {name: 'Макс', age: 35},
//         {name: 'Катя', age: 17},
//         {name: 'Артем', age: 18}
//     ];

//     let result = [];
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].age >= 18) {
//             result.push(user[i].name);
//         }
//     }
//     return result;
// }
// console.log(getAdultName([]))

// задача 30: напишите функцию, которая принимает массив чисел и возвращает их среднее арифметическое.
// function getAdultName(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }

//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         count = sum / arr.length;
//     }
//     return count;
// }
// console.log(getAdultName([10, 20, 30]))

// задача 31: условия + цикл
// function fizzBuzz(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             result.push('Buzz');
//         } else if (i % 5 === 0) {
//             result.push('Fizz');
//         } else {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(fizzBuzz((15)));

// задача 32: напишите функцию, которая принимает число и возвращает его, умноженное на 2.
// function multiplyByTwo(num) {
//     return num * 2;
// }
// console.log(multiplyByTwo(-3))

// задача 33: условия
// function checkTemperature(temp)  {
//     if (temp >= 30) {
//         return 'жарко';
//     } else if (temp >= 15 && temp <= 29) {
//         return 'тепло';
//     } else if (temp < 15) {
//         return 'холодно';
//     };
// };
// console.log(checkTemperature(0));

// задача 34: цикл
// function printNumbers(n) {
//     for (let  i = 0; i <= n; i++) {
//         console.log(i);
//     }
// }
// printNumbers(10);

// задача 35: объекты
// const book = {
//     title: 'Война и мир',
//     author: 'Лев Толстой',
//     year: 1869
// };

// function getBookInfo() {
//     return `Название: ${book.title}, Автор: ${book.author}, Год: ${book.year}`;
// }
// console.log(getBookInfo([]))

// задача 36: напиши функцию, которая возвращает первый элемент массива. Если массив пусть - вернуть null
// function getFirstElement(arr) {
//     return arr[0];
// }
// console.log(getFirstElement([10, 20, 30]))

// задача 36: напишите функцию, которая возварщает сумму только положительных чисел из массива.
// function getPositiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             sum += arr[i];

//         }
//     }
//     return sum;
// }
// console.log(getPositiveSum([-3, -4, -5]))

// задача 37: объекты + массивы
// const students = [
//     {name: 'Аня', grade: 4},
//     {name: 'Борис', grade: 5},
//     {name: 'Вика', grade: 3},
//     {name: 'Глеб', grade: 5}
// ];

// function getTopStudetnts() {
//     let result = [];
//     for (let key in students) {
//         if (students[key].grade === 5) {
//             result.push(students[key].name);
//         }
//     }
//     return result;
// }
// console.log(getTopStudetnts());

// задача 38: напишите функцию, которая считает количество глассных букв
// function countVowels(str) {
//     let letter = str.toLowerCase();
//     const vowels = 'аеёиоуыэюя';
//     let counter = 0;
//     for (let i = 0; i < letter.length; i++) {
//         let currentLetter = letter[i];
//        if (vowels.includes(currentLetter)) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countVowels(('Привет')));

// задача 39: напишиет функцию, которая возварщает ture, если число четное, и false - есле нечетное
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(5))

// задача 40: напишите функцию, которая возвращает квадрат числа
// function square(num) {
//     return num * num;
// }
// console.log(square(4))

// задача 41: напишите функцию, которая выводит в консоль n звездачек в одну строчук
// function printStars(n) {
//     let sum = "";
//     for (let i = 0; i <= n; i++) {
//         sum +="*";
//     }
//     return sum;
// }
// console.log(printStars(5))

// задача 42: создайте объект car с полями brand и year. напишите функцию, которая возвращает возраст машины.
// function getCarAge() {
//     const car = {
//         brand: 'Toyota',
//         year: 2020
//     }
//     return `${car.year} - год выпуска`;
// }
// console.log(getCarAge())

// задача 43: напишите функцию, которая возвращает последний элемент массива. если массив пустой - вернуть null
// function getLastElement(arr) {
//     const last = arr[arr.length - 1];
//     return last;
// }
// console.log(getLastElement([1, 2, 4, 5]))

// задача 44: напишите функцию, которая считает, сколько раз target встречается в массиве arr
// function countOccurrences(arr, target) {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countOccurrences([2, 2, 3, 4, 5, 2], 1))

// задача 45: напишите функцию, которая возваращает строку в обратном порядке
// function reversString(str) {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(reversString("hello"));