const { forEach, map } = require('./index');
//Helper Function 
const test = (desc, fn) => {
  console.log('----', desc);
  try {
    fn();
  } catch (err) {
    console.log(err);
  }

};
//--- second version of test
test('The forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });
  if (sum !== 6) {
    throw new Error('Expected summing array to equal 6');
  }
});
//--- first version of test
// let sum = 0;
// forEach([1,2,3] , (value) =>{
//   sum += value;
//   });
//   if( sum !== 6){
//     throw new Error('Expected summing array to equal 6');
//   }
//--- second version of test
test('The map function', () => {
  const res = map([1, 2, 3], value => {
    return value * 2;
  })
  if (res[0] !== 2) {
    throw new Error(`Expected to find 2 but we found ${res[0]}`);
  }
  if (res[1] !== 4) {
    throw new Error(`Expected to find 4 but we found${res[1]}`);
  }
  if (res[2] !== 6) {
    throw new Error(`Expected to find 6 but we found${res[2]}`);
  }

});
//--- first version of test
//  const res =  map([1,2,3] , value => {
//   return value * 2;
//   })
  // if( res[0] !== 2){
  //   throw new Error(`Expected to find 2 but we found ${res[0]}`);
  // }
  // if( res[1] !== 4){
  //   throw new Error(`Expected to find 4 but we found${res[1]}`);
  // }
  // if( res[2] !== 6){
  //   throw new Error(`Expected to find 6 but we found${res[2]}`);
  // }
