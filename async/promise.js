// Promise
// 1. promise는 JS에서 제공하는 `비동기`를 간편하게 처리하도록 도와주는 `객체`이다.
// 2. 정해진 장시간의 기능을 수행하고 나서 정상적으로 처리되면 성공의 메세지와 결과를 반환
//    에러가 발생한다면 에러를 전달해준다.
// 3. state가 중요 //producer가 무거운 operation을 수행하는 중인지, 성공적으로 완료했는지, 실패했는지
//    state: pending -> fulfilled or rejected
// 4. producer, consumer의 차이 // 원하는 데이터를 제공하는 producer, 데이터를 소비하는 consumer


// Producer
// 새로운 promise obj가 생성될 때, executor가 자동적으로 바로 실행이 된다. 
// new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
const promise = new Promise((resolve, reject)=>{
    //doing some heavy work (network, read files)
    console.log(`doing something...`);
    setTimeout(()=>{
        resolve('lee');
        //reject(new Error('no network'));
    }, 2000);
});

//Consumer : then, catch, finally
promise //
    .then((value)=>{
        console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

// Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1), 1000);
    })
})
.then(num=>console.log(num));

// Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

//getHen()
//.then(hen=>getEgg(hen))
//.then(egg=>cook(egg))
//.then(meal=>console.log(meal));

getHen() //
 .then(getEgg)
 .catch(error=>{
    return 'bread';
 })
 .then(cook)
 .then(console.log)
 .catch(console.log);