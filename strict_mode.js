function ninja() {
  return this;
}

function samurai() {
  'use strict';
  return this;
}

if (samurai() === undefined) {
  console.log("samurai's return value is not defined");
}
