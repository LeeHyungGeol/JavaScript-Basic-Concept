// async & await : promise를 감싸고 있는 syntatic sugar
// 깔끔하게 Promise를 사용할 수 있는 방법

// 1. async
async function fetchUser() {
    // do network request in 10sec...
    return 'lee';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function getApple() {
    await delay(1000);
    return '🍎';
}
  
async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
   const applePromise = getApple();
   const bananaPromise = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
   return `${apple}+ ${banana}`;
}

pickFruits().then(console.log); 

// 3. useful Promise APIs

//Promise.ALL() : promise배열을 전달하게 되면 모든 promise들이 병렬적으로 반환될 때까지 모아준다.
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickFruits().then(console.log); 

//Promise.race() : promise배열을 전달하게 되면 가장 먼저 반환되는 Promise를 반환
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);