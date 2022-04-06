const ninja1 = {
  whoAmI: function () {
    // this는 ninja1 constructor 안에 생성된 whoAmI object를 가리킨다
    return this;
  },
};

const ninja2 = {
  // ninja1.whoAmI 내 function을 참조해오는 것이기 때문에 기능은 똑같으나 저장된 메모리 주소가 달라서 다른 값으로 인식함.
  whoAmI: ninja1.whoAmI,
};

const identify = ninja2.whoAmI;

console.log(ninja2.whoAmI());
console.log(ninja1);

ninja1.whoAmI() === ninja1
  ? console.log('ninja1.whoAmI() === ninja1 are same')
  : console.log('ninja1.whoAmI() === ninja1 are different!');

ninja2.whoAmI() === ninja1
  ? console.log('ninja2.whoAmI() === ninja1 are same')
  : console.log('ninja2.whoAmI() === ninja1 are different!');

identify() === ninja1
  ? console.log('identify() === ninja1 are same')
  : console.log('identify() === ninja1 are different!');

ninja1.whoAmI.call(ninja2) === ninja2
  ? console.log('ninja1.whoAmI.call(ninja2) === ninja2 are same')
  : console.log('ninja1.whoAmI.call(ninja2) === ninja2 are different!');
