// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

//JS에서 함수(function)는 object이므로 변수에도 할당이 가능, parameter로도 가능하고, return할 수도 있다.
 
function printHello() {
    console.log('Hello');
  }
  printHello();
  
  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
  
  // 2. Parameters
  // primitive parameters: passed by value
  // object parameters: passed by reference
  function changeName(obj) {
    obj.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);
  console.log(ellie);
  
  // 3. Default parameters (added in ES6)
  // from 파라미터와 같은 경우, 함수를 사용할 때 정의되지 않을 때, 
  // default값으로 'unknown'을 대체되어 사용할 수 있다.
  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');
  
  // 4. Rest parameters (added in ES6)
  // ... -> array(배열)형태로 전달할 수 있다.
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
    
    //print를 할 때, 
    //for(const num of nums)의 for~of의 형태로 가능하다.
    for (const arg of args) {
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg));
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope
  // scope : 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    } 
    // console.log(childMessage); //error
    // return undefined //return 타입이 undefined되어 있는 것
  }
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable
  // can be assigned as a value to variable
  // can be passed as an argument to other functions.
  // can be returned by another function
  
  // 1. Function expression
  // a function declaration can be called earlier than it is defiend. (hoisted)
  // a function expression is created when the execution reaches it.
  
  // function declaration : 함수가 선언되기 이전에 함수 호출이 가능하다. 
  // 함수도 hoisting이 가능하다는 의미!! 
  // ex) sum 함수를 선언하기 이전에 sum()함수를 호출 가능

  //function expression : print는 할당 된 이후에 호출이 가능하기 때문에 function expression에 해당한다!!
  const print = function () { //anonymous function 함수에 이름이 없는 것
    // anonymous function
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  // 2. Callback function using function expression
  // Callback function : 함수를 전달해서 상황에 맞는 함수를 호출하는 것
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
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
  
  // Arrow function
  // always anonymous
  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  
  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  
  // IIFE: Immediately Invoked Function Expression
  // IIFE : 함수를 선언함과 동시에 함수를 호출하는 것 
  // : 함수를 ()로 묶어두고 끝에();를 붙여주면 함수를 선언함과 동시에 호출 가능하다. 
  (function hello() {
    console.log('IIFE');
  })();
  
  // Fun quiz time
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unkonwn command');
    }
  }
  console.log(calculate('add', 2, 3));