// 1. String concatenation
// + 기호를 사용하여 문자열과 문자열을 붙이는 것
console.log('my' + ' cat');
console.log('1' + 2); //결과)12 :문자열에 숫자를 붙여도 문자열이 된다. 
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("LHG/'s note"); //문자열 중간에 ' 를 넣고 싶다면 /'를 같이 넣어준다.

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// 무거운 논리 연산일 경우에 뒤에 놓자

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if(nullableObject != null) {
    nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const Object1 = { name: 'ellie' };
const Object2 = { name: 'ellie' };
const Object3 = Object1;
//reference로 비교를 한다. Object1과 Object2는 똑같아 보여도 둘이 갖고 있는 ref가 다르다.
console.log(Object1 == Object2); //false
console.log(Object1 === Object2);//false
console.log(Object1 === Object3);//true

// equality - puzzler
// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
console.log(0 == false);//true
console.log(0 === false);//false //둘 다 boolean타입이 아니기 때문에
console.log('' == false);//true
console.log('' === false);//false //둘 다 boolean타입이 아니기 때문에
console.log(null == undefined);//false -> true가 정답, 둘 다 타입을 빼면 false로 취급 
console.log(null === undefined);//false //null과 undefined는 엄밀히 다른 타입이기 때문에

// 8. Conditional operators: if
// if, else if, else
const nam = 'LHG';
if (nam === 'LHG') {
  console.log('true');
} else if (nam === 'false') {
  console.log('false');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
//삼항 연산자
// condition ? value1 : value2;
console.log(nam === 'LHG' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`); 
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i === 9) break;
  console.log(`q2. ${i}`);
}