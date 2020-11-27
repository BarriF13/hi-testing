module.exports = {
  forEach(arr, fn) {
    //   for(let i = 0; i< arr.length; i++ ){
    //     const value = arr[i];
    //     fn(value, i);
    //   }
    // }
    //----------Refactor 1 
    // for in  = get index in the arr  --for of gets the element in the array . in this function we need index to pass it as the second argument to the function 
    for (let index in arr) { //0 , 1 , 2 
      fn(arr[index], index);
    }
  },

  map(arr, fn) {
    const res = [];
    for (let i = 0 ; i < arr.length; i++) {
     res.push(fn(arr[i], i))
    }
    return res
  }
};

