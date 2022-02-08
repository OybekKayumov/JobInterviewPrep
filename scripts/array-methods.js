//! FILTER
const items = [
  {name: 'Bike', price: 100},
  {name: 'TV', price: 200},
  {name: 'Album', price: 10},
  {name: 'Book', price: 5},
  {name: 'Phone', price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
]

const filteredItems = items.filter((item) => {
  return item.price <= 100
});

console.log(items);
console.log(filteredItems);
//* the filter method creates a new array
// [
//   {
//       "name": "Bike",
//       "price": 100
//   },
//   {
//       "name": "Album",
//       "price": 10
//   },
//   {
//       "name": "Book",
//       "price": 5
//   },
//   {
//       "name": "Keyboard",
//       "price": 25
//   }
// ]

//! MAP CONVERTS TO NEW ARRAY

const itemNames = items.map((item) => {
  return item.name
});

console.log(itemNames);
//* return only names
// [
  //   "Bike",
//   "TV",
//   "Album",
//   "Book",
//   "Phone",
//   "Computer",
//   "Keyboard"
// ]

const itemPrices = items.map((item) => {
  return item.price
});

console.log(itemPrices);
//* return only prices
// [
//   100,
//   200,
//   10,
//   5,
//   500,
//   1000,
//   25
// ]

//! FIND RETURNS FIRST TRUE

const foundItem = items.find((item) => {
  // return item.price === 1000
  // return item.name === "Book"
  return item.name === "Keyboard"

});

console.log(foundItem);
//* return first found

//! forEach 

items.forEach((item) => {
  // console.log(item);
  // console.log(item.name);
  console.log(item.price);

})

//* 
// {name: 'Bike', price: 100}
// {name: 'TV', price: 200}
// {name: 'Album', price: 10}
// {name: 'Book', price: 5}
// {name: 'Phone', price: 500}
// {name: 'Computer', price: 1000}
// {name: 'Keyboard', price: 25}


//! SOME, EVERY 
// const hasInexpensiveItems = items.some((item) => {
const hasInexpensiveItems = items.every((item) => {

  // return item.price <= 100;
  return item.price <= 1000;

});

console.log(hasInexpensiveItems);
//* true or false


//! REDUCE
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);  // start from [0]

console.log(total);
//* 1840


//! INCLUDE

const itemsInclude = [1, 2, 3, 4, 5];

// const includeNumber = itemsInclude.includes(2);
const includeNumber = itemsInclude.includes(8);

console.log(includeNumber);

//* true
//* false