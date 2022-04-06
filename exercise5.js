function Ninja() {
  this.whoAmI = () => this;
}

const ninja1 = new Ninja();

const ninja2 = {
  whoAmI: ninja1.whoAmI,
};

// pass: whoAmI is an arrow function inherits the function context from the context in which it was created.
// Because it was created during the construction of ninja1
// this will always point to ninja1
ninja1.whoAmI() === ninja1
  ? console.log('ninja1.whoAmI() === ninja1 are same')
  : console.log('ninja1.whoAmI() === ninja1 are different');

// false: this always refers to ninja1
ninja2.whoAmI() === ninja2
  ? console.log('ninja2.whoAmI() === ninja2 are same')
  : console.log('ninja2.whoAmI() === ninja2 are different');
