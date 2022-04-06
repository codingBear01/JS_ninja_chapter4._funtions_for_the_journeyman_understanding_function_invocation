function Ninja() {
  this.whoAmI = function () {
    return this;
  }.bind(this);
}

const ninja1 = new Ninja();

const ninja2 = {
  whoAmI: ninja1.whoAmI,
};

// pass: the function assigned to whoAmI is a function bound to ninja1 (the value of this when the constructor was invoked)
// this will always refer to ninja1
ninja1.whoAmI() === ninja1
  ? console.log('ninja1.whoAmI() === ninja1 are same')
  : console.log('ninja1.whoAmI() === ninja1 are different');

// fail: this in whoAmI always refers to ninja1
ninja2.whoAmI() === ninja2
  ? console.log('ninja2.whoAmI() === ninja2 are same')
  : console.log('ninja2.whoAmI() === ninja2 are different');
