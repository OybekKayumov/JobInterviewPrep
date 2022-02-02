const functions = require('./TestFunctions');

//* toBe
test('adds 2 +1 to equal 3', () => {
  expect(functions.add(1, 2)).toBe(3);
});

test('adds 20 +21 to equal 41', () => {
  expect(functions.add2(20, 21)).toBe(41);
});

//* not
test('adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add2(2, 2)).not.toBe(5);
});

// todo
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//* toBeNull
test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});


//* toBeFalsy
test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  // expect(functions.checkValue(1)).toBeFalsy(); //! error
});


//* toEqual & toStrictEqual
test('User should be Oybek Kayumov', () => {
  // expect(functions.createUser()).toEqual({firstName: 'Oybek', lastName: 'Kayumov'}); //* ok
  // expect(functions.createUser()).toBe({firstName: 'Oybek', lastName: 'Kayumov'}); //* error
  
  //! read comments if error
  //? If it should pass with deep equality, replace "toBe" with "toStrictEqual"
  
  expect(functions.createUser()).toStrictEqual({firstName: 'Oybek', lastName: 'Kayumov'}); 
  //because of using different memory areas
  // toBe doesn't work in Object
});


//* less than and greater than
test('should be under 2000', () => {
  const load1 = 900;
  // const load2 = 800;
  const load2 = 1100;

  // expect(load1 + load2).toBeLessThan(2000);
  expect(load1 + load2).toBeLessThanOrEqual(2000);

});


//* Regex
test('There is no I in team', () => {
  // expect('teami').not.toMatch(/I/i); //* fail
  expect('team').not.toMatch(/I/i);
});

//* Arrays
test('Admin should be in username', () => {
  username = ['userOne', 'guest', 'admin']
  // username = ['userOne', 'guest'] //! error
  expect(username).toContain('admin');
});



//* working with async data

//* Promise
// test('user fetched name should be in Ervin Howell', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Ervin Howell');
//   })
// });



//* async await

test('user fetched name should be in Ervin Howell', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
    expect(data.name).toEqual('Ervin Howell');
});

 
