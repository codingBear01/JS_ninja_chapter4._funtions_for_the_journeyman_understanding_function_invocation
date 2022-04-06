// Creates our own object with a known property
const puppet = {
  rules: false,
};

// Returns that object despite initializing the object passed as this
function Emperor() {
  this.rules = true;
  return puppet;
}
// Invokes the function as a constructor
const emperor = new Emperor();

// Tests show that the object returned by the constructor is assigned to the variable emperor (and not the object created by the new expression).
// 테스트는 constructor에 의해 반환되는 객체가 변수 emperor에 할당되었음을 보여준다(new 표현으로 만들어진 새로운 객체가 아니라)
if (emperor === puppet)
  console.log("emperor and puppet's return values are same!");
if (emperor.rules === false) console.log('emperor.rules returns false!');
