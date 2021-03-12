'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
// object = { key : value };
// javascript에서 object는 {key:value}의 집합체이다.
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
// with JavaScript magic (dynamically typed language)
// can add properties later
// 동적으로 속성 추가하기가 가능하다.
// type이 Runtime(프로그램이 동작하고 있을 때)에 결정된다.

// can delete properties later
// 반대로 동적으로 속성을 삭제도 가능하다.
// 하지만, 너무 동적으로 하게 되면 처음 프로그램을 코딩할 때는 괜찮지만, 나중에 에러가 발생할 수 있으니 조심하자.


function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const man = { name: 'Sam', age: 7 };
print(man);

// with JavaScript magic (dynamically typed language)
// 동적으로 속성 추가하기가 가능하다.
// type이 Runtime(프로그램이 동작하고 있을 때)에 결정된다.
// can add properties later
man.hasJob = true;
console.log(man.hasJob);

// can delete properties later
// 반대로 동적으로 속성을 삭제도 가능하다.
// 하지만, 너무 동적으로 하게 되면 처음 프로그램을 코딩할 때는 괜찮지만, 나중에 에러가 발생할 수 있으니 조심하자.
delete man.hasJob;
console.log(man.hasJob);

// 2. Computed properties
// key should be always string
// object의 속성에 접근할 때 .으로도 접근 가능하지만 []로도 접근 가능하다.
// 단 Computed properties([])로 접근할 때는 반드시 String('')으로 접근해야 한다.
console.log(man.name);
console.log(man['name']);
man['hasJob'] = true;
console.log(man.hasJob);

//obj.key라고 하면 에러가 난다. Runtime에는 obj에 key가 없기 때문
// Runtime에 동적으로 동작하게 하려면 []로 해야 한다.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(man, 'name');
printValue(man, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// in 연산자 : 속성이 존재하는지 안하는지 체크해준다.(true/false)
console.log('name' in man);//true
console.log('age' in man);//true
console.log('random' in man);//false
console.log(man.random);//undefined

// 6. for..in vs for..of
// for (key in obj)
// for..in : obj안에 있는 속성들을 볼 때 사용
console.clear();
for (let key in man) {
  console.log(key);
}

// for (value of iterable)
// for..of : 배열의 원소를 찾을 때와 같은 iterable할 때, of를 사용
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// assign<T, U>(target: T, source: U): T & U;
const user4 = Object.assign({}, user);
console.log(user4);

// another example
// assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
// assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
// source가 여러 개 있을 때, 뒤에 오는 source일수록 우선순위가 높아진다.
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);