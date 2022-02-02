const reverseStr = require('./reverse');

test('reverseString function exist ', () => {
  expect(reverseStr).toBeDefined();
});

test('Sting reverses', () => {
  expect(reverseStr('hello')).toEqual('olleh');
})

test('Sting reverses with uppercase', () => {
  expect(reverseStr('Hello')).toEqual('olleh');
})
