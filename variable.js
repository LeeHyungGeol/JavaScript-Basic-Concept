//node.js에는 JavaSript Engine이 있어서 Web Browser 없이도 JavaScript를 실행시킬 수 있다.
console.log("Hello World!");

// 1. Use strict
// added in ES 5 
// use this for Vanila Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName="global name";
//Block Scope 
{
    let name = "ellie";
    console.log(name);
    name="hello";
    console.log(name);
}

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// hoisting : 어디 선언했느냐에 상관 없이 항상 제일 위로 끌어올리는 것
// has no block scope
var age;
age = 4;

// 3. Constant, r(read only)
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// favor immutable data type always : 한번 선언된 후로 왠만하면 값이 변경되지 않는다.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInweek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

//first-class Function : function도 다른 데이터 타입처럼 변수에 할당 가능, 함수에 parameter로도 전달이 가능하고, return type으로도 function을 return 가능하다.

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; // Infinity 
const negativeInfinity = -1 / 0; // -Infinity
const nAn = 'not a number' / 2; //NaN : Not A Number 
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) ``백택 기호를 통해 사용 가능
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
//map이나 다른 자료구조에서 고유한 식별자가 필요할 때 혹은 동시다발적으로 일어나는 concurrent한 상황에서 우선 순위를 주고 싶을 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
//동일한 'id'로 Symbol을 만들어도 다르다고 나온다.
console.log(symbol1 === symbol2);// false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
//string이 똑같을 때 동일한 Symbol을 만들고 싶으면 Symbol.for()을 사용
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
//ellie 자체는 변경이 불가 하지만, ellie.name 혹은 ellie.age와 같이 속성들은 변경이 가능하다. 엄청신기..
//Object는 Object가 가리키는 ref가 메모리에 저장된다.
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
