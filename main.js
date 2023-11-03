'use strict';

/*
1) Напишите функцию JavaScript, которая принимает массив из списка названий стран
в качестве входных данных и возвращает самое длинное название страны в качестве выходных данных.
Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])
Ожидаемые результат: Соединённые Штаты Америки
 */
// function getLongestCountryName(arr) {
//   for (let value of arr) {
//     if (Math.max(value.length)) return value;
//   }
// }
//
// const countries = ['Kyrgyzstan', 'Russia', 'USA', 'Spain', 'Italy', 'France', 'Germany'];
// console.log(getLongestCountryName(countries));

/*
2) Напишите функцию alphabetOrder(str), которая возвращает
переданную строку с буквами в алфавитном порядке.
Например вызывая функцию  alphabetOrder('alphabetical')
Ожидаемый результат: 'aaabcehillpt'
 */
// function alphabetOrder(str) {
//   const order = str.split('').sort().join('');
//   return order;
// }
//
// console.log(alphabetOrder('alphabetical'));

/*
3) Используя метод map() напишите код, который получает из массива строк новый массив,
 содержащий их длины.Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
На выходе должно быть: [7,4,7,8]
 */
// const vegetables = ['cabbage', 'carrot', 'potato', 'tomato', 'onion'];
// const lengthElement = vegetables.map(elem => {
//   return elem.length;
// });
// console.log(lengthElement);

/*
4) Напишите функцию generateNumbers(start, len),
которая генерирует массив заданной длины len,
заполненный целыми числами, где каждое число больше предыдущего на единицу.
Например вызывая функцию generateNumbers(0, 5)
Ожидаемый результат: [0,1,2,3,4]
generateNumbers(-5, 4)  // -> [-5,-4,-3,-2]
*/
// function generateNumbers(start, len) {
//   const array = []
//   for (let i = 0; i < len; i++) {
//     array.push(start + i);
//   }
//   return array;
// }
//
// console.log(generateNumbers(1, 5));

/*
5) Напишите функцию, которая возвращает новый объект без указанных значений.
const without = (object, ...args) => {
// Напишите здесь свое решение
}
Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')
Ожидаемые результат: { a: 1 }
 */
// const without = (object, ...args) => {
//   const obj = {...object};
//   for (let i of args) {
//     delete obj[i];
//   }
//   return obj;
// }
//
// const data = {a: 1, b: 2, c: 3, d: 4, e: 5};
// const withoutFunc = without(data, 'b', 'e');
// console.log(withoutFunc);


