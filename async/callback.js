'use strict';

// JavaScript is synchronous. JavaScript는 동기적이다.
// Execute the code block in order after hoisting
// synchronous(동기) : Hoisting이 된 이후부터 코드가 내가 작성한 순서대로 작동하는 것
// Hoisting : var , function declaration 이러한 선언들이 자동적으로 제일 위로 올라간 것

console.log('1');
//browser에서 제공하는 API 
//TimerHandler라는 Callback함수를 지정된 ms만큼 시간을 지연시켜준다.
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Callback도 2가지로 나뉜다.
// Synchronous Callback : 즉각적으로 동기적으로 실행하는 Callback
function printImmediately(print) {
   print(); 
} 
printImmediately(()=>console.log('hello'));

// Asynchronous Callback : 나중에 언제 실행하는지 예측할 수 없는 Callback
function printWithDelay(print, timeOut) {
    setTimeout(print, timeOut);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell Example
// Callback 지옥 예시 
// 가독성 안좋음, 비즈니스 로직 파악 안좋음, 디버깅 하기도 어려움, 문제 분석 어려움, 유지보수도 안좋음
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if(
                (id === 'lee' && password === 'qwer') ||
                (id === 'kim' && password === 'asdf')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    } 

    getRole(user, onSuccess, onError) {
        setTimeout( () => {
            if(user==='lee') {
                onSuccess({name:'lee', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const password = prompt('Enter Your Password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRole(
            user, 
            userWithRole => {
               alert(`Success, ${userWithRole.name} have a ${userWithRole.role} role`); 
            },
            error => {console.log(error);} 
        )
    },
    error => {console.log(error);}
);

