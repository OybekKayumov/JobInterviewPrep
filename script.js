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

// i is not defined

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

