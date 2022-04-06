// A constructor that creates a skulk property on whatever object is the function context. The method once again returns the function context so that we can test it externally.
function Ninja() {
  this.skulk = function () {
    return this;
  };
}

// Creates two objects by invoking the constructor with new. The newly created objects are referenced by ninja1 and ninja2.
const ninja1 = new Ninja();
const ninja2 = new Ninja();

console.log(ninja1);
console.log(ninja1.skulk());
