// The function “juggles” the arguments and puts the result onto whatever object is the function context.
function juggle() {
  let result = 0;
  for (let n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}

// These objects are initially empty and will serve as our test subjects.
const ninja1 = {};
const ninja2 = {};

// Uses the apply method, passing ninja1 and an array of arguments
juggle.apply(ninja1, [1, 2, 3, 4]);
// Uses the call method, passing ninja2 and a list of arguments
juggle.call(ninja2, 5, 6, 7, 8);

// The tests show how the juggle result is placed on the objects passed to the methods.
console.log(ninja1);
console.log(ninja1.result);
console.log(ninja2);
console.log(ninja2.result);
