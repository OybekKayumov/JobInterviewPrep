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

// todo 34. how long will be enable cool_secret ?
sessionStorage.setItem("cool_secret", 123);

// A: Всегда, данные не потеряются.
// B: Пока пользователь не закроет вкладку.
// C: Пока пользователь не закроет браузер, а не только вкладку.
// D: Пока пользователь не выключит компьютер.
// Ответ: B
// Данные, сохраненные в sessionStorage очищаются после закрытия вкладки.

// При использовании localStorage данные сохраняются навсегда. Очистить их можно, например, используя localStorage.clear().

// todo 33. what is the output ?
var num = 8;
var num = 10;
console.log(num);

// A: 8
// B: 10
// C: SyntaxError
// D: ReferenceError
// Ответ: B
// С помощью ключевого слова var можно определять сколько угодно переменных с одним и тем же именем. Переменная будет хранить последнее присвоенное значение.

// Но такой трюк нельзя проделать с let и const, т.к. у них блочная область видимости.
