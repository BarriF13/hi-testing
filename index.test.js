const { forEach } = require('./index');

let sum = 0;
forEach([1,2,3] , (value) =>{
  sum += value;
  });
  if( sum !== 6){
    throw new Error('Expected summing array to equal 6');
  }


 const res =  map([1,2,3] , value => {
  return value * 2
  })
  if( res === [2,4,6]){
    throw new Error('Expected summing array to equal 2,4,6');
  }
