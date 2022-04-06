function sum(...params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  console.log(result);
}

sum(1, 2, 3, 4, 5);
