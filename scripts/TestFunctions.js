const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  add2: function(num3, num4) {
    return num3 + num4;
  },
  isNull: () => null,
  // isNull: () => undefined, //* error
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Oybek'};
    user['lastName'] = 'Kayumov';
    return user;
  },
  fetchUser: () => 
    axios
      .get('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.data)
      .catch(error => 'error')

} 

module.exports  =functions;