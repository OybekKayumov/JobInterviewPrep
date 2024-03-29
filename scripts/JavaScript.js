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

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

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

// function hello() {
//   console.log(name);
//   console.log(age);
//   var name = "Sarah";
//   let age = 23;
// }

// hello();

// A: Lydia и undefined
// B: Lydia и ReferenceError
// C: ReferenceError и 21
// D: undefined и ReferenceError

// Внутри функции мы сперва определяем переменную name с помощью ключевого слова var. Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением undefined по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение name когда пытаемся вывести её в консоль, поэтому в консоли будет undefined.

// Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение ReferenceError.

// todo 16. what is the output ?

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i),1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i),1);
// }

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

// console.log('shape: ', shape.diameter());
// console.log('shape: ', shape.perimetr());

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

// console.log('+true: ', +true);
// console.log('!"Lydia": ',!"Lydia");

// A: 1 и false
// B: false и NaN
// C: false и false

// Унарный плюс приводит операнд к числу. true это 1, а false это 0.

// Строка 'Lydia' это "истинное" значение. На самом деле мы спрашиваем "является ли это истинное значение ложным"? Ответ: false.

//todo 18. что НЕ является валидным?
const bird = {
  size: 'small'
};

const mouse = {
  name: 'Mickey',
  small: true
};

// A: mouse.bird.size
// B: mouse[bird.size]
// C: mouse[bird["size"]]
// D: Все варианты валидны

// console.log(mouse.bird.size);         // TypeError -- НЕ является валидным
// console.log(mouse[bird.size]);    //true 
// console.log(mouse[bird["size"]]); //true

// todo 19. what is the output ?

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
// console.log(d.greeting);

// A: Hello
// B: Hey!
// C: undefined
// D: ReferenceError
// E: TypeError

// В JavaScript все объекты являются ссылочными типами данных.

// Сперва переменная c указывает на объект. Затем мы указываем переменной d ссылаться на тот же объект, что и c.

// Когда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект.

// todo 20. what is the output ?
let a = 3;
let b = new Number(3);
let c1 = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c1);

// A: true false true
// B: false false true
// C: true false false
// D: false true true

// Ответ: C
// new Number() это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных фич и это объект.

// Оператор == разрешает приведение типов, он проверяет равенство значений. Оба значения равны 3, поэтому возвращается true.

// При использовании оператора === значение и тип должны быть одинаковыми. Но в нашем случае это не так: new Number() это не число, это объект. Оба возвращают false.


// todo 21. what is the output ?
// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }
//! const fred = new Chameleon({ newColor: "purple" });
//! fred.colorChange("orange");

// A: orange
// B: purple
// C: green
// D: TypeError
// Ответ: D
// Функция colorChange является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как fred это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка TypeError.


// todo 22. what is the output ?

// let greeting;
// greetign = {}; //! опечатка
// console.log(greetign);

// A: {}
// B: ReferenceError: greetign is not defined
// C: undefined
// Ответ: A
// В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо greeting написали greetign, интерпретатор JS на самом деле выполнил global.greetign = {} (или window.greetign = {} в браузере).

// Нужно использовать "use strict", чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение.

// todo 23. what is the output ?
// function bark() {
//   console.log('Woof!');
// }

// bark.animal = 'dog';

// A: Ничего, всё в порядке!
// B: SyntaxError. Нельзя добавлять свойства функциям таким способом.
// C: undefined
// D: ReferenceError

// Ответ: A
// В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов).

// Функция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией.

// todo 24. what is the output ?

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getfullname = function() {
  return `${this.firstName} ${this.lastName}`;  
}

// Person.prototype.getfullname = function() {
//   return `${this.firstName} ${this.lastName}`;  
// }

//! console.log(member.getfullname());

// A: TypeError
// B: SyntaxError
// C: Lydia Hallie
// D: undefined undefined

// Ответ: A
// Нельзя добавлять свойства конструктору, как обычному объекту. Если нужно добавить фичу всем объектам, то необходимо использовать прототипы. В данном случае

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }
// сделает метод member.getFullName() рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру Person нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь это свойство. Напротив, если мы добавим этот метод только к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры!



// todo 25. what is the output ?
function Person1(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person1('Lydia', 'Hallie');
const sarah = Person1('Sarah', 'Smith');

// console.log(lydia);
// console.log(sarah);

// A: Person {firstName: "Lydia", lastName: "Hallie"} и undefined
// B: Person {firstName: "Lydia", lastName: "Hallie"} и Person {firstName: "Sarah", lastName: "Smith"}
// C: Person {firstName: "Lydia", lastName: "Hallie"} и {}
// D:Person {firstName: "Lydia", lastName: "Hallie"} и ReferenceError

// Ответ: A
// Для sarah мы не использовали ключевое слово new. Использование new приводит к созданию нового объекта. Но без new он указывает на глобальный объект!

// Мы указали, что this.firstName равно "Sarah" и this.lastName равно "Smith". На самом деле мы определили global.firstName = 'Sarah' и global.lastName = 'Smith'. sarah осталась undefined, поскольку мы не возвращаем значение из функции Person.

// todo 26. events

//! Назовите три фазы распространения событий
// A: Цель > Захват > Всплытие
// B: Всплытие > Цель > Захват
// C: Цель > Всплытие > Захват
// D: Захват > Цель > Всплытие

// Ответ: D
// Во время фазы захвата событие распространяется с элементов родителей до элемента цели. После достижения цели начинается фаза всплытия.

// todo 27. Все объекты имеют прототипы
// A: Да
// B: Нет

// Ответ: B
// Все объекты имеют прототипы, кроме базового объекта. Базовый объект имеет доступ до некоторых методов и свойств, таких как .toString. Именно поэтому мы можем использовать встроенные методы JavaScript! Все эти методы доступны в прототипе. Если JavaScript не может найти метод непосредственно у объекта, он продолжает поиск по цепочке прототипов пока не найдет.

// todo 28 what is the result?
function sum(a, b) {
  return a + b
}

// console.log(sum(1, "2"));

// A: NaN
// B: TypeError
// C: "12"
// D: 3

// Ответ: C
// JavaScript это динамически типизированный язык: мы не определяем тип переменных. Переменные могут автоматически быть преобразованы из одного типа в другой без нашего участия, что называется неявным приведением типов. Приведение это преобразование из одного типа в другой.

// В этом примере JavaScript сконвертировал число 1 в строку, чтобы операция внутри функции имела смысл и вернула значение. Во время сложения числа (1) и строки ('2') число преобразовывается к строке. Мы можем конкатенировать строки вот так: "Hello" + "World". Таким образом, "1" + "2" возвращает "12".

// todo 29. what is the output ?
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Ответ: C
// Постфиксный унарный оператор ++:

//   1 Возвращает значение (0)
//   2 Инкрементирует значение (теперь число равно 1)

// Префиксный унарный оператор ++:

//   1 Инкрементирует значение (число теперь равно 2)
//   2 Возвращает значение (2)
// Результат: 0 2 2.
 
// todo 30. what is the output ?
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;
getPersonInfo`${person} is ${age} years old`;

// A: "Lydia" 21 ["", " is ", " years old"]
// B: ["", " is ", " years old"] "Lydia" 21
// C: "Lydia" ["", " is ", " years old"] 21

// Ответ: B
// При использовании тегированных шаблонных литералов первым аргументом всегда будет массив строковых значений. Оставшимися аргументами будут значения переданных выражений!

// todo 31. what is the output ?
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('Ty vzrosliy!');
  } else if (data == { age: 18 }) {
    console.log('Ty vse eshe vzrosliy!');
  } else {
    console.log('Kajetsya u tebya net vozrasta');
  }  
}

// checkAge({ age: 18 });

// A: Ты взрослый!
// B: Ты все еще взрослый.
// C: Хмм.. Кажется, у тебя нет возраста.

// Ответ: C
// В операциях сравнения примитивы сравниваются по их значениям, а объекты по ссылкам. JavaScript проверяет, чтобы объекты указывали на одну и ту же область памяти.

// Сравниваемые объекты в нашем примере не такие: объект, переданный в качестве параметра, указывает на другую область памяти, чем объекты, используемые в сравнениях.

// Поэтому { age: 18 } === { age: 18 } и { age: 18 } == { age: 18 } возвращают false.

// todo 32. what is the output ?

function getAge(...args) {
  console.log(typeof args);
}

// getAge(21);

// A: "number"
// B: "array"
// C: "object"
// D: "NaN"

// Ответ: C
// Оператор распространения (...args) возвращает массив с аргументами. Массив это объект, поэтому typeof args возвращает "object".

// todo 33. what is the output ?

function getNewAge() {
  'use strict';
  newAge = 21;
  console.log(newAge);
}

// getNewAge();

// A: 21
// B: undefined
// C: ReferenceError
// D: TypeError

// Ответ: C
// Используя "use strict", можно быть уверенным, что мы по ошибке не побъявим глобальные переменные. Мы ранее нигде не объявляли переменную age, поэтому с использованием "use strict" возникнет ReferenceError. Без использования "use strict" ошибки не возникнет, а переменная age добавится в глобальный объект.

// todo 34. what is the sum ?
const sumEval = eval("10*10+5");

// console.log(sumEval);

// A: 105
// B: "105"
// C: TypeError
// D: "10*10+5"

// Ответ: A
// eval выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то вычисляется выражение. Выражение 10 * 10 + 5 вернет число 105.

// todo 35. how long will be enable cool_secret ?
sessionStorage.setItem("cool_secret", 123);

// A: Всегда, данные не потеряются.
// B: Пока пользователь не закроет вкладку.
// C: Пока пользователь не закроет браузер, а не только вкладку.
// D: Пока пользователь не выключит компьютер.
// Ответ: B
// Данные, сохраненные в sessionStorage очищаются после закрытия вкладки.

// При использовании localStorage данные сохраняются навсегда. Очистить их можно, например, используя localStorage.clear().

// todo 36. what is the output ?
// var num = 8;
// var num = 10;
// console.log(num);

// A: 8
// B: 10
// C: SyntaxError
// D: ReferenceError
// Ответ: B
// С помощью ключевого слова var можно определять сколько угодно переменных с одним и тем же именем. Переменная будет хранить последнее присвоенное значение.

// Но такой трюк нельзя проделать с let и const, т.к. у них блочная область видимости.

// todo 37. what is the result ?
const newObject = {1: "a", 2: "b", 3: "c"};
const newSet = new Set([1, 2, 3, 4, 5]);

// console.log(
//   newObject.hasOwnProperty("1"), 
//   newObject.hasOwnProperty(1),
//   newSet.has("1"),
//   newSet.has(1),
// )

// A: false true false true
// B: false true true true
// C: true true false true
// D: true true true true
// Ответ: C
// Все ключи объектов (кроме Symbols) являются строками, даже если заданы не в виде строк. Поэтому obj.hasOwnProperty('1') так же возвращает true.

// Но это не работает для set. Значения '1' нет в set: set.has('1') возвращает false. Но set.has(1) вернет true.

// todo 38. what is the output ?
const objectN = {a: "one", b: "two", a: "three"};
// console.log(objectN);

// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }
// D: SyntaxError
// Ответ: C
// Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее указанное.

// todo 39. what is the output ?

// Глобальный контекст исполнения создает две вещи: глобальный объект и this
// A: Да
// B: Нет
// C: Это зависит

// Ответ: A
// Базовый контекст исполнения это глобальный контекст исполнения: это то, что доступно где угодно в твоем коде.

// todo 40. what is the output ?
// for (let i=1; i<5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// A: 1 2
// B: 1 2 3
// C: 1 2 4
// D: 1 3 4
// Ответ: C
// Оператор continue пропускает итерацию, если условие возвращает true.

// todo 41. what is the output ?
function sayHi() {
  return (() => 0)();
}

// console.log(typeof sayHi());

// A: "object"
// B: "number"
// C: "function"
// D: "undefined"
// Ответ: B
// Функция sayHi возвращает значение, возвращаемое из немедленно вызываемого функционального выражения (IIFE). Результатом является 0 типа "number".

// Для информации: в JS 8 встроенных типов: null, undefined, boolean, number, string, object, symbol и bigint. "function" не является отдельным типом, т.к. функции являются объектами типа "object".

// todo 42. what is the output ?
// console.log(typeof typeof 1);
// A: "number"
// B: "string"
// C: "object"
// D: "undefined"
// Ответ: B
// typeof 1 возвращает "number". typeof "number" возвращает "string"

// todo 43. what is the output ?
// const numbersN = [1, 2, 3];
// numbersN[10] = 11;
// console.log(numbersN);

// A: [1, 2, 3, 7 x null, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, 7 x empty, 11]
// D: SyntaxError

// Ответ: C
// Когда в массив добавляется значение, которое выходит за пределы длины массива, JavaScript создает так называемые "пустые ячейки". На самом деле они имеют значения undefined, но в консоли выводятся так:

// [1, 2, 3, 7 x empty, 11]

// в зависимости от окружения (может отличаться для браузеров, Node, и т.д.).

// todo 44. which are false ?

// 0;
// new Number(0);
// ("");
// (" ");
// new Boolean(false);
// undefined;

// A: 0, '', undefined
// B: 0, new Number(0), '', new Boolean(false), undefined
// C: 0, '', new Boolean(false), undefined
// D: Все являются "ложными"

// Ответ: A
// Есть только шесть "ложных" значений:

// undefined
// null
// NaN
// 0
// '' (пустая строка)
// false
// Конструкторы функций, такие как new Number и new Boolean являются "истинными".

// todo 45. what is the output ?
// const personL = { name: "Lydia" };

// function sayHi(age) {
//   console.log(`${this.name} is ${age}`);
// }

// sayHi.call(personL, 21);
// sayHi.bind(personL, 21);

// A: undefined is 21 Lydia is 21
// B: function function
// C: Lydia is 21 Lydia is 21
// D: Lydia is 21 function

// Ответ: D
// В обоих случаях мы передаем объект, на который будет указывать this. Но .call выполняется сразу же!

// .bind возвращает копию функции, но с привязанным контекстом. Она не выполняется незамедлительно.

// todo 46. what is the output ?

// (() => {
//   let x, y;
//   try {
//     throw new Error();    
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// A: 1 undefined 2
// B: undefined undefined undefined
// C: 1 1 2
// D: 1 undefined undefined

// Ответ: A
// Блок catch получает аргумент x. Это не тот же x, который определен в качестве переменной перед строкой try {

// Затем мы присваиваем этому аргументу значение 1 и устанавливаем значение для переменной y. Потом выводим в консоль значение аргумента x, которое равно 1.

// За пределами блока catch переменная x все еще undefined, а y равно 2. Когда мы вызываем console.log(x) за пределами блока catch, этот вызов возвращает undefined, а y возвращает 2.

// todo 46.  Всё в JavaScript это
// A: примитив или объект
// B: функция или объект
// C: вопрос с подвохом! только объекты
// D: число или объект

// Ответ: A
// В JavaScript есть только примитивы и объекты.

// Типы примитивов: boolean, null, undefined, bigint, number, string, и symbol.

// Отличием примитива от объекта является то, что примитивы не имеют свойств или методов. Тем не менее, 'foo'.toUpperCase() преобразуется в 'FOO' и не вызывает TypeError. Это происходит потому, что при попытке получения свойства или метода у примитива (например, строки), JavaScript неявно обернет примитив объектом, используя один из классов-оберток (например, String), а затем сразу же уничтожит обертку после вычисления выражения. Все примитивы кроме null и undefined ведут себя таким образом.

// todo 47.  What is the result?
// console.log(
  [[0,1], [2,3]].reduce((acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  )
// );

// A: [0, 1, 2, 3, 1, 2]
// B: [6, 1, 2]
// C: [1, 2, 0, 1, 2, 3]
// D: [1, 2, 6]

// Ответ: C
// [1, 2] - начальное значение, с которым инициализируется переменная acc. После первого прохода acc будет равно [1,2], а cur будет [0,1]. После конкатенации результат будет [1, 2, 0, 1].

// Затем acc равно [1, 2, 0, 1], а cur равно [2, 3]. После слияния получим [1, 2, 0, 1, 2, 3].

// todo 48.  What is the result?

// console.log(
//   !!null,
//   !!"",
//   !!1,
// );

// A: false true false
// B: false false true
// C: false true true
// D: true true false
// Ответ: B
// null - "ложный". !null возвращает true. !true возвращает false.

// "" - "ложный". !"" возвращает true. !true возвращает false.

// 1 - "истинный". !1 возвращает false. !false возвращает true.

// todo 49.  setInterval
// setInterval(() => console.log('Hi'), 1000)

// A: уникальный id
// B: указанное количество миллисекунд
// C: переданную функцию
// D: undefined

// Ответ: A
// Это метод возвращает уникальный id. Этот id может быть использован для очищения интервала с помощью функции clearInterval().

// todo 50.  What is the result?
// console.log( [..."Lydia"] );

// A: ["L", "y", "d", "i", "a"]
// B: ["Lydia"]
// C: [[], "Lydia"]
// D: [["L", "y", "d", "i", "a"]]
// Ответ: A
// Строка является итерируемой сущностью. Оператор распространения преобразовывает каждый символ в отдельный элемент.

// todo 51.  What is the result?
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);

// A: [0, 10], [10, 20]
// B: 20, 20
// C: 10, 20
// D: 0, 10 and 10, 20

// Ответ: C
// Обычные функции не могут быть остановлены на полпути после вызова. Однако функцию генератор можно "остановить" на полпути, а затем продолжить с того места, где она остановилась. Каждый раз, когда в функции-генераторе встречает ключевое слово yield, функция возвращает значение, указанное после него. Обратите внимание, что функция генератора в этом случае не return значение, оно yields значение.

// Сначала мы инициализируем функцию генератор с i, равным 10. Мы вызываем функцию генератор, используя метод next (). Когда мы в первый раз вызываем функцию генератора, i равно 10. Он встречает первое ключевое слово yield, получая значение i. Генератор теперь "приостановлен", и 10 выводится в консоль.

// Затем мы снова вызываем функцию с помощью метода next (). Она запускается с того места, где остановилась ранее, все еще с i, равным 10. Теперь он встречает следующее ключевое слово yield и возвращает i * 2. i равно 10, поэтому он возвращает 10 * 2, то есть 20. Это приводит к 10, 20.

// todo 52.  What is the result?
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise])
//   .then(res => console.log('res: ', res))

// A: "один"
// B: "два"
// C: "два" "один"
// D: "один" "два"

// Ответ: B
// Когда мы передаем несколько промисов методу Promise.race, он разрешает/отклоняет первый промис, который разрешается/отклоняется. В метод setTimeout мы передаем таймер: 500 мс для первого промиса (firstPromise) и 100 мс для второго промиса (secondPromise). Это означает, что secondPromise разрешается первым со значением 'два'. res теперь содержит значение 'два', которое выводиться в консоль.

// todo 53.  What is the result?  
let personLyd = { name: "Lydia" };
const members = [personLyd]
personLyd = null;

// console.log(members);

// A: null
// B: [null]
// C: [{}]
// D: [{ name: "Lydia" }]
// Ответ: D
// Сначала мы объявляем переменную person со значением объекта, у которого есть свойство name.
// Затем мы объявляем переменную с именем members. Мы устанавливаем первый элемент этого массива равным значению переменной person. Объекты взаимодействуют посредством ссылок при установке их равными друг другу. Когда вы назначаете ссылку из одной переменной в другую, вы создаете копию этой ссылки. (обратите внимание, что у них не одинаковые ссылки!)
// Затем мы присваиваем переменной person значение null.
// Мы изменили только значение переменной person, а не первый элемент в массиве, поскольку этот элемент имеет другую (скопированную) ссылку на объект. Первый элемент в members по-прежнему содержит ссылку на исходный объект. Когда мы выводим в консоль массив members, первый элемент по-прежнему содержит значение объекта, который выводится в консоль.

// todo 54.  What is the result? 
// const personLydia = {
//   name: "Lydia",
//   age: 21
// };

// for (const item in personLydia) {
//   console.log(item);
// }

// A: { name: "Lydia" }, { age: 21 }
// B: "name", "age"
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]

// Ответ: B
// С помощью цикла for-in мы можем перебирать ключи объекта, в данном случае name и age. Под капотом ключи объекта являются строками (если они не являются Symbol). В каждом цикле мы устанавливаем значение item равным текущему ключу, по которому он перебирается. Сначала, item равен name, и выводится в консоль. Затем item равен age, который выводится в консоль.

// todo 55.  What is the result? 
// console.log(3 + 4 + '5');

// A: "345"
// B: "75"
// C: 12
// D: "12"
// Ответ: B
// Ассоциативность операторов - это порядок, в котором компилятор оценивает выражения, слева направо или справа налево. Это происходит только в том случае, если все операторы имеют одинаковый приоритет. У нас есть только один тип оператора: +. Кроме того, ассоциативность слева направо.

// 3 + 4 оценивается первым. Это приводит к числу 7.

// 7 + '5' приводит к "75" из-за принуждения. JavaScript преобразует число 7 в строку. Мы можем объединить две строки, используя оператор +. "7" + "5" приводит к "75".

// todo 56.  What is the num? 
// const num1 = parseInt("7*6", 10);
// console.log(num1);

// A: 42
// B: "42"
// C: 7
// D: NaN
// Ответ: C
// Только первые числа в строке возвращаются. На основе системы счисления (второй аргумент, чтобы указать, к какому типу чисел мы хотим его анализировать: основание 10, шестнадцатеричное, восьмеричное, двоичное и т.д.), ParseInt проверяет, являются ли символы в строке допустимыми. Как только он встречает символ, который не является допустимым числом в основании, он прекращает синтаксический анализ и игнорирует следующие символы.

// * не является допустимым числом. Он только разбирает "7" в десятичную 7. num теперь содержит значение 7.

// todo 57.  What is the result? 
// console.log(
// [1, 2, 3].map(num => {
//   if (typeof num === "number") return;
//   return num * 2
// })
// )

// A: []
// B: [null, null, null]
// C: [undefined, undefined, undefined]
// D: [ 3 x empty ]

// Ответ: C
// При использовании метода map, значение num равно элементу, над которым он в данный момент зацикливается. В этом случае элементы являются числами, поэтому условие оператора if typeof num === "number" возвращает true. Функция map создает новый массив и вставляет значения, возвращаемые функцией.

// Однако мы не возвращаем значение. Когда мы не возвращаем значение из функции, функция возвращает значение undefined. Для каждого элемента в массиве вызывается функциональный блок, поэтому для каждого элемента мы возвращаем undefined.

// todo 58.  What is the result? 
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
}

const p = {name: "Sarah" };
const bYear = "1997";

getInfo(p, bYear);
// console.log(p, bYear);

// A: { name: "Lydia" }, "1997"
// B: { name: "Sarah" }, "1998"
// C: { name: "Lydia" }, "1998"
// D: { name: "Sarah" }, "1997"
// Ответ: A
// Аргументы передаются значением, если их значение не является объектом, то они передаются ссылкой. birthYear передается по значению, поскольку это строка, а не объект. Когда мы передаем аргументы по значению, создается копия этого значения (см. вопрос 46).

// Переменная birthYear имеет ссылку на значение "1997". Аргумент year также имеет ссылку на значение"1997", но это не то же самое значение, на которое имеется ссылка для birthYear. Когда мы обновляем значение year, устанавливая year равным "1998", мы обновляем только значение year. birthYear по-прежнему равно "1997".

// Значение person является объектом. Аргумент member имеет (скопированную) ссылку на тот же объект. Когда мы изменяем свойство объекта, на который member ссылается, значение person также будет изменено, поскольку они оба имеют ссылку на один и тот же объект. Свойство name объекта person теперь равно значению "Lydia".

// todo 59.  What is the result?
function Greeting () {
  throw "Hello world!";
}

function HiSay() {
  try {
    const data = Greeting();
    console.log('It worked!', data);    
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

HiSay();

// A: It worked! Hello world!
// B: Oh no an error: undefined
// C: SyntaxError: can only throw Error objects
// D: Oh no an error: Hello world!
// Ответ: D
// С помощью оператора throw мы можем создавать собственные ошибки. С этим оператором вы можете генерировать исключения. Исключением может быть строка, число, логическое значение или объект. В этом случае нашим исключением является строка 'Hello world'.

// С помощью оператора catch мы можем указать, что делать, если в блоке try выдается исключение. Исключение: строка 'Hello world'. e теперь равно той строке, которую мы записываем. Это приводит к 'Oh no an error: Hello world'.

// todo 60.  What is the result?
function Car () {
  this.make = "lamborghini"

  return { make: "Maserati"};
}

const myCar = new Car();
console.log('myCar.make: ', myCar.make);

// A: "Lamborghini"
// B: "Maserati"
// C: ReferenceError
// D: TypeError
// Ответ: B
// Когда вы возвращаете свойство, значение свойства равно возвращаемому значению, а не значению, установленному в функции конструктора. Мы возвращаем строку "Maserati", поэтому myCar.make равно "Maserati".

// todo 61.  What is the result?

(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);

// A: "undefined", "number"
// B: "number", "number"
// C: "object", "number"
// D: "number", "undefined"
// Ответ: A
// let x = y = 10; на самом деле является сокращением для:

// y = 10;
// let x = y;
// Когда мы устанавливаем y равным 10, мы фактически добавляем свойство y к глобальному объекту (window в браузере, global в Node). В браузере window.y теперь равен 10.

// Затем мы объявляем переменную x со значением y, которое равно 10. Переменные, объявленные с ключевым словом let, имеют блочную видимость, они определены только в блоке, в котором они объявлены; немедленно вызванная функция (IIFE) в этом случае. Когда мы используем оператор typeof, операнд x не определен: мы пытаемся получить доступ к x вне блока, в котором он объявлен. Это означает, что x не определен. Значения, которым не присвоено или не объявлено значение, имеют тип "undefined". console.log(typeof x) возвращает "undefined".

// Однако мы создали глобальную переменную y, установив y равным 10. Это значение доступно в любом месте нашего кода. y определен и содержит значение типа "number". console.log(typeof y) возвращает "number".

// todo 62.  What is the output?
// class Dog {
//   constructor(name) {
//     this.name = name
//   }
// }

// Dog.prototype.bark = function() {
//   console.log(`Woof I am ${this.name}`);
// }

// const pet = new Dog("Mara");

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();

// A: "Woof I am Mara", TypeError
// B: "Woof I am Mara", "Woof I am Mara"
// C: "Woof I am Mara", undefined
// D: TypeError, TypeError
// Ответ: A
// Мы можем удалить свойства из объектов, используя ключевое слово delete, также в прототипе. Удаляя свойство в прототипе, оно больше не доступно в цепочке прототипов. В этом случае функция bark больше не доступна в прототипе послеdelete Dog.prototype.bark, но мы все еще пытаемся получить к ней доступ.

// Когда мы пытаемся вызвать что-то, что не является функцией, выдается TypeError. В этом случае TypeError: pet.bark не является функцией, поскольку pet.bark является undefined.

// todo 63.  What is the output?

const new_set = new Set([1, 1, 2, 3, 4]);
console.log(new_set);

// A: [1, 1, 2, 3, 4]
// B: [1, 2, 3, 4]
// C: {1, 1, 2, 3, 4}
// D: {1, 2, 3, 4}
// Ответ: D
// Объект Set является коллекцией unique значений: значение может появляться только один раз в наборе.

// Мы передали последовательность [1, 1, 2, 3, 4] с повторяющимся значением 1. Поскольку в наборе не может быть двух одинаковых значений, одно из них удаляется. Это приводит к {1, 2, 3, 4}.


// todo 64.  What is the output?
// counter.js
// let counter = 10
// export default counter;

//index.js
// import myCounter from "./counter";

// myCounter += 1;
// console.log(myCounter);

// A: 10
// B: 11
// C: Error
// D: NaN
// Ответ: C
// Импортированный модуль является read-only: вы не можете изменить импортированный модуль. Только модуль, который их экспортирует, может изменить его значение.

// Когда мы пытаемся увеличить значение myCounter, выдается ошибка: myCounter доступен только для чтения и не может быть изменен.

// todo 65.  What is the output?

const name = 'Lydia'
ageMy = 21

console.log(delete name);
console.log(delete ageMy);

// A: false, true
// B: "Lydia", 21
// C: true, true
// D: undefined, undefined
// Ответ: A
// Оператор delete возвращает логическое значение: true при успешном удалении, иначе он вернет false. Однако переменные, объявленные с ключевым словом var, const или let, не могут быть удалены с помощью оператора delete.

// Переменная name была объявлена ​​с ключевым словом const, поэтому ее удаление не было успешным: возвращается false. Когда мы устанавливаем age равным 21, мы фактически добавляем свойство с именем age к глобальному объекту. Вы можете успешно удалить свойства из объектов, в том числе из глобального объекта, поэтому delete age возвращает true.


