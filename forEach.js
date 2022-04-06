// Our iteration function accepts the collection to be iterated over and a callback function.
function forEach(list, callback) {
  for (let n = 0; n < list.length; n++) {
    // The callback is invoked such that the current iteration item is the function context.
    // 현재 반복 항목이 function context가 되도록 callback이 호출된다.
    callback.call(list[n], n);
  }
}

// Our test subject
const weapons = [
  { type: 'shuriken' },
  { type: 'katana' },
  { type: 'nunchucks' },
];

// Calls the iteration function and ensures that the function context is correct for each invocation of the callback
forEach(weapons, function (index) {
  if (this === weapons[index]) {
    console.log(`Got the expected value of ${weapons[index].type}`);
  }
});
