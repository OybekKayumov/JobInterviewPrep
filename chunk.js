const chunkArray = (arr, len) => {
  // init chunked arr
  const chunkedArr = [];

  // loop through arr 
  arr.forEach(val => {
    // get last element
      const last = chunkedArr[chunkedArr.length - 1];

      // check if last element and if last length is equal to the chunk length

      if (!last || last.length === len) {
        chunkedArr.push([val]);

      } else {
        last.push(val)
      }    
  });
  return chunkedArr;
}


module.exports = chunkArray;
