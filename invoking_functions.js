/* Invoked as function */
// function declaration invoked as a function
function skulk(name) {
  console.log(name);
}
skulk('function declaration: hattori');

// function expression invoked as a function
const samurai = function (name) {
  console.log(name);
};
samurai('function expression: hanzo');

// immediately invoked function expresssion, invoked as a function
(function (name) {
  console.log(name);
})('immediate invoked function: genzi');


/* Invoked as method */
let ninja2 = {};
ninja2.skulk = function(){
  console.log('invoked as method!')
};
ninja2.skulk();

let ninja = {
  skulk: function (name) { 
    console.log(name);
  },
};

// Invoked as a method of ninja
ninja.skulk('method of ninja: hattori');

// Invoked as a constructor
function Ninja(name) {
  console.log(name);
}
ninja = new Ninja('constructor: hattori');

// Invoked via the call method
skulk.call(ninja, 'call method: hattori');

// Invoked via the apply method
skulk.apply(ninja, ['apply method: hattori']);
