console.log("hello, JS");

let hello;

hello = "Sveiki Java Script";
hello = "Sveiki visam programmesanas valodam";

const language = "JavaScript";

// language = 'Python' // нельзя переприсвоить константу

// ! примитивные типы данных в js

// * 1. string - строка

// "Earth", 'Earth', `Earth`
// три валидных способа для указания строк

let planet = "Earth";

let greeting = "We are from planet " + planet;

let planetNumber = 3;
// шаблонные строки это аналог конкатенации
// пишется в косых кавычках (backticks)

let greening1 = `Мы живем на планете ${planet}. Это ${planetNumber} планета от солнца`;

console.log(greening1);

// * 2. number - число

let n1 = 42;
let n2 = 3.14;
let n3 = -40;

// самое большое число в js
let lastSafeInteger = Number.MAX_SAFE_INTEGER;

// * 3. boolean - булево значение
let isStudent = true;
let isBackend = false;

// пример тернарного оператора - компактного условия
let whatToDo = isStudent ? "izpildi uzdevumu" : "negribi macities";
console.log(isStudent);

// * 4. undefined - неопределенное значение

let object; // здесь будет undefined

// * 5. null - нулевое значение

let user = null;

//* 6. bigint  - lieliem skaitljiem
// operacija sar skaitljiem, kaas lielaaki par MAX_SAFE_INTEGER

let bigNumber = 1000n;
let bugResult = bigNumber + 2000n;

// * symbol - символ
// уникальное значение используемое в объектах

let symbolId = Symbol(10);

// ! операции над данными в JS

// ? приведение типов

// * преобразования в строки

// не явное при сложении
// становится строкой

let sum = 14 + 2 + "2";

// не явное при вычитании
// явное (рекомендуется)
let sum1 = String(42) + " - ответ на главный вопрос";

// * преобразование в число

// явное (рекомендуется)
let sum2 = 2 + Number('18')

let sum3 = 42 + parseInt('100')
console.log(sum3)


// * преобразование в булево значение
// значения для false в js:

// false
//0
// undefined
// null
// ""
// NaN
// -0
// 0n

// остальные считаются истинными
// ! математические операторы

let b1 = 12 + 45; // сложение
let b2 = 122 - 45; // вычитание
let b3 = 5 * 5; // умножение
let b4 = 50 / 5; // деление
let b5 = 3 ** 3; // возведение в степень
let b6 = Math.sqrt(25); // квадратный корень
let b7 = 15 % 2; // остаток от деление

// * случайное число от 1 до 0
let random = Math.random();

// * случайное число от 1 до 100
// округляем до целых чисел с Math.floor
let random1 = Math.floor(Math.random() * 100) + 1;

// ! операторы сравнения

// >, <, >=, <=, ===, ==, !, !==, &&, ||

// * == - равенство с приведением типов
// console.log(99 == '99') - true

// * == - строгое равенство (рекомендуется)
// console.log(99 === '99') - false

const r1 = 25 !== "25"; // true
const r2 = !true; // false

const a = 0;
const b = 30;

const res = (a > 0 && b < 20) || a === 0;