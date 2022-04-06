// Defines a constructor function named Ninja
function Ninja() {
  this.skulk = function () {
    return true;
  };
  // The constructor returns a specific primitive value, the number 1.
  return 1;
}

// The function is called as a function and its return value is 1, as expected.
if (Ninja() === 1) console.log("Ninja()'s return value is 1");

// The function is called as a constructor via the new operator.
const ninja = new Ninja();

// Tests verify that the return value of 1 is ignored, and that a new, initialized object has been returned from new.
if (typeof ninja === 'object') console.log('the type of ninja is object');

if (typeof ninja.skulk === 'function')
  console.log('the type of ninja.skulk is function');
