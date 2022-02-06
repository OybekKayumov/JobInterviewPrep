//todo 1
const result = 1_000_000 + 101

console.log(result);

// output 1000101

//todo 2

const hugeArray = new Array(1_000_000);

//! reverse
for (let index = hugeArray.length - 1; index > 0; index--) {
  // console.log('Element', hugeArray[index]);
}

//! forvard

for (let index = 0; index < hugeArray.length; index++) {
  // console.log('Element', hugeArray[index]);
}

//todo  3

const array = new Array(10_000)

// const copyArray = array.slice(0);
// const copyArray = array.map((element) => element);
// const copyArray = [...array];
// const copyArray = Array.from(array);

// console.log(copyArray);



//todo  4

const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++); {
  // console.log(`The number is ${numbers[i]}`);
}

//* i is not defined

//todo  5

const fruits = ['mango', 'apple'];
// fruits.length = 0;
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[3]);


// todo 5

var length = 4;

function callBack() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callBack, 1, 2);

//*  output : 3



// todo 6

const result1 = (1,5 - 1) * 2;
console.log(result1);

//* output: 8



// todo 7

const groceries = ['apple', null, 'milk', undefined, 'bread', ''];

const list = groceries.filter(Boolean);

console.log(list);

//* output: (3) ['apple', 'milk', 'bread']


// todo 8

const resultA = 40 && 2 || 33;
const resultB = (4 * 2 ) && (3 * 6);
const resultC = 0 && 2;

console.log(resultA, resultB, resultC);
//* output: 2  18  0 

//! resultA : 2
// идем слева направо:
// 40 и 2 --> возвращается 2 как последное истинное
// 2 или 33 --> возвращается снова 2, потому что при логическом или возвраается первое истинное

//! resultB : 2
// идем к скобкам, 8 и 18,
// слева направо:
// возвращается 18 как последное истинное
// ответ 18

//! resultС : 0
// идем слева направо:
// 0 и 2 --> возвращается 0 как первое ложное
// ответ 0
// Оператор && вернет 0 потому что это false значение и нет смысла идти и проверять дальше. Если в цепочке сравнений есть false значение оно сразу же возвращается, если все операнды будут true вернется последний.

// итак:
// && возвращает последнее истинное значение или возвращает первое ложное
// || возвращает первое истинное значение или возвращает последнее ложное


// todo 9

// what is output

for (let i = 0; i < 10; i++) {
  setTimeout (function() {
    // console.log(i);
  }, 1000);
}

// let: after 1 second : 0 1 2 3 4 5 6 7 8 9

// var: after 1 second : 10 10 10 10 10 10 10 10 10 10 

// темы: 
// область видимости, 
// замыкания, 
// разница работы переменных, 
// вплытие переменных,
// как работает setTimeout и асинхронный JavaScript


// todo 10

const goodAddedToChart = [
    {
      name: 'JavaScript',
      price: 20
    },
    {
      name: 'React',
      price: 30
    },
    {
      name: 'HTML&CSS',
      price: 202
    },
]

// 1
var resultChart = 0;

for (i = 0; i < goodAddedToChart.length; i++) {
  resultChart = resultChart + goodAddedToChart[i].price
};

// console.log(resultChart);
//* 252

// 2 

let resultChart2 = goodAddedToChart.reduce((accumulator, {price}) => accumulator + price, 0);

// console.log(resultChart2);



// todo 11. what is the output ?

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// A: 1 2
// B: 1 2 3
// C: 1 2 4
// D: 1 3 4
 
// todo 12. what is the output ?

const obj = { a: 'one',  b: 'two',  a: 'three' };
console.log(obj);


// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }
// D: SyntaxError

// todo 13. what is the output ?

const object1 = {
  1: 'a',
  2: 'b',
  3: 'c'
};

const set = new Set([1, 2, 3, 4, 5]);

console.log(object1.hasOwnProperty('1'));
console.log(object1.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));

// A: false true false true
// B: false true true true
// C: true true false true
// D: true true true true

// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

// It doesnt work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.

