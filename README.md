# JavaScript-Basic-Concept
## 자바스크립트 기본 개념 익히기 (ES6 기준)

```javascript
var age;
age = 4;
```

* ***var hoisting*** (move declaration from bottom to top)
  * **hoisting : 어디 선언했느냐에 상관 없이 항상 제일 위로 끌어올리는 것**

* ***Immutable data types***: primitive types, frozen objects (i.e. object.freeze())
* ***Mutable data types***: all objects by default are mutable in JS
* favor immutable data type always for a few reasons:
  * security
  * thread safety
  * reduce human mistakes

* Variable types
  * primitive, single item: number, string, boolean, null, undefined, symbol
  * object, box container
  * function, first-class function

* **first-class Function : function도 다른 데이터 타입처럼 변수에 할당 가능, 함수에 parameter로도 전달이 가능하고, return type으로도 function을 return 가능하다.**

* boolean
  * false: 0, null, undefined, NaN, ''
  * true: any other value

* ***a function declaration*** can be called earlier than it is defiend. (hoisted)
  * **function declaration** : 함수가 선언되기 이전에 함수 호출이 가능하다. 함수도 hoisting이 가능하다는 의미!! 
* ***a function expression*** is created when the execution reaches it.
  * **function expression** : 함수가 할당 된 이후에 호출이 가능하다면 function expression에 해당한다!!

* ***Callback function*** using ***function expression*** : Callback함수는 function expression에 해당한다.
  * **Callback function : 함수를 전달해서 상황에 맞는 함수를 호출하는 것**

ex)
```javascript
// Callback function : 함수를 전달해서 상황에 맞는 함수를 호출하는 것
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'Are you OK?') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
``` 

* IIFE: Immediately Invoked Function Expression : 함수를 선언함과 동시에 함수를 호출하는 것 
  * 함수를 ()로 묶어두고 끝에();를 붙여주면 함수를 선언함과 동시에 호출 가능하다. 

ex)
```javascript
(function hello() {
    console.log('IIFE');
})();
```

* object = { key : value }; : javascript에서 ***object는 {key:value}의 집합체***이다.
  * with JavaScript magic (dynamically typed language) : type이 Runtime(프로그램이 동작하고 있을 때)에 결정된다.
  * can add properties later : 동적으로 속성 추가하기가 가능하다. 
  * can delete properties later : 반대로 동적으로 속성을 삭제도 가능하다.
  * 하지만, 너무 동적으로 하게 되면 처음 프로그램을 코딩할 때는 괜찮지만, 나중에 에러가 발생할 수 있으니 조심하자.

```javascript
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const man = { name: 'Sam', age: 7 };

man.hasJob=true;
console.log(man.hasJob);//true

delete man.hasJob;
console.log(man.hasJob);//false

```

* ***Computed properties : [] ***
  * ***key*** should be always ***string***
  * object의 속성에 접근할 때 .으로도 접근 가능하지만 []로도 접근 가능하다.
  * 단 Computed properties([])로 접근할 때는 반드시 String('')으로 접근해야 한다.

```javascript
const man = { name: 'Sam', age: 7 };

console.log(man.name); //Sam
console.log(man['name']);//Sam
man['hasJob'] = true;
console.log(man.hasJob);//true

//obj.key라고 하면 에러가 난다. Runtime에는 obj에 key가 없기 때문
// Runtime에 동적으로 동작하게 하려면 []로 해야 한다.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(man, 'name'); // Sam
printValue(man, 'age'); // 7

```

* in operator: property existence check (key in obj)
  * in 연산자 : 속성이 존재하는지 안하는지 체크해준다.(true/false)

```javascript
console.log('name' in man);//true
console.log('age' in man);//true
console.log('random' in man);//false
console.log(man.random);//undefined
```

* for..in vs for..of
  * **for (key in obj)**
  * ***for..in*** : obj안에 있는 ***속성***들을 볼 때 ***in 사용***
  
  * **for (value of iterable)**
  * ***for..of*** : 배열의 원소를 찾을 때와 같은 ***iterable***할 때, ***of를 사용***

```javascript
for (let key in man) {
  console.log(key); //name, age
}

const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value); // 1,2,4,5
}
```

* const array1 = new Array();
* const array1 = [1,2]; 



  


  
