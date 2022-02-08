//todo 1
const result = 1_000_000 + 101

// console.log(result);

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
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[3]);


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
// console.log(result1);

//* output: 8



// todo 7

const groceries = ['apple', null, 'milk', undefined, 'bread', ''];

const list = groceries.filter(Boolean);

// console.log(list);

//* output: (3) ['apple', 'milk', 'bread']


// todo 8

const resultA = 40 && 2 || 33;
const resultB = (4 * 2 ) && (3 * 6);
const resultC = 0 && 2;

// console.log(resultA, resultB, resultC);
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
// console.log(obj);


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

// console.log(object1.hasOwnProperty('1'));
// console.log(object1.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));

// A: false true false true
// B: false true true true
// C: true true false true
// D: true true true true

// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

// It doesnt work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.

// todo 14. what is the output ?

var num = 8;
var num = 10;

// console.log(num);

// A: 8
// B: 10
// C: SyntaxError
// D: ReferenceError

//! With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

//! You cannot do this with let or const since they are block-scoped.

// todo 15. what is the output ?

function hello() {
  console.log(name);
  console.log(age);
  var name = "Sarah";
  let age = 23;
}

// hello();

// A: Lydia и undefined
// B: Lydia и ReferenceError
// C: ReferenceError и 21
// D: undefined и ReferenceError

// Внутри функции мы сперва определяем переменную name с помощью ключевого слова var. Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением undefined по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение name когда пытаемся вывести её в консоль, поэтому в консоли будет undefined.

// Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение ReferenceError.

// todo 16. what is the output ?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i),1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i),1);
}

// A: 0 1 2 и 0 1 2
// B: 0 1 2 и 3 3 3
// C: 3 3 3 и 0 1 2

// Из-за очереди событий в JavaScript, функция setTimeout вызывается после того как цикл будет завершен. Так как переменная i в первом цикле была определена с помощью var, она будет глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя унарный оператор ++. К моменту выполнения функции setTimeout значение i будет равно 3 в первом примере.

// Во втором цикле переменная i определена с помощью let. Такие переменные (а также const) имеют блочную область видимости (блок это что угодно между { }). С каждой итерацией i будет иметь новое значение, и каждое значение будет замкнуто в своей области видимости внутри цикла.


// todo 17. what is the output ?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimetr: () => 2 * Math.PI * this.radius
};

console.log('shape: ', shape.diameter());
console.log('shape: ', shape.perimetr());

// A: 20 и 62.83185307179586
// B: 20 и NaN
// C: 20 и 63
// D: NaN и 63

// Заметим, что diameter это обычная функция, в то время как perimeter это стрелочная функция.

// У стрелочных функций значение this указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове perimeter значение this у этой функции указывает не на объект shape, а на внешнюю область видимости (например, window).

// У этого объекта нет ключа radius, поэтому возвращается undefined.

// todo 17. what is the output ?

+true;
!"Lydia";

// A: 1 и false
// B: false и NaN
// C: false и false

// Унарный плюс приводит операнд к числу. true это 1, а false это 0.

// Строка 'Lydia' это "истинное" значение. На самом деле мы спрашиваем "является ли это истинное значение ложным"? Ответ: false.