function whatsMyContext() {
  return this;
}

const getMyThis = whatsMyContext;

console.log(getMyThis());

const ninja1 = {
  getMyThis: whatsMyContext,
};

const ninja2 = {
  getMyThis: whatsMyContext,
};

console.log(ninja1);
console.log(ninja1.getMyThis());
console.log(ninja2);
console.log(ninja2.getMyThis());

if (ninja1 === ninja1.getMyThis()) {
  console.log('true');
} else {
  console.log('false');
}
