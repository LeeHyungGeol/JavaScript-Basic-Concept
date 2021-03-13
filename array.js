'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const arr = ['Tom', 'jerry', 'black'];
console.log(arr);
console.log(arr.length);
console.log(arr[0]); // Tom
console.log(arr[1]); // jerry
console.log(arr[3]); // undefined
console.log(arr[arr.length - 1]); // black // 배열의 마지막 원소에 접근할 때
console.clear();

// 3. Looping over an array
// 배열의 모든 원소 출력하기
// a. for
// 기본적인 for loop 이용
for(let i=0;i<arr.length; ++i) {
    console.log(arr[i]);
}

// b. for..of 사용 
// 배열에서 of를 사용하면 해당 index의 value가 나오고, 
// 배열에서 in을 사용하면 배열의 key에 해당하는 
for(let element of arr) {
    console.log(element);
}

// c. forEach 사용
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// 무조건 해당 순서(value, index, array)에 맞게 값이 부여된다.
// 이름을 바꾸거나 해도 그대로 할당 된다. 
arr.forEach(function(arr, element, index) {
    console.log(element, arr, index);
});

arr.forEach(index=>console.log(index));
arr.forEach(e=>console.log(e));

// Array 원소 addition, deletion, copy

// 배열 맨 마지막의 원소 추가 : push
// push(...items: T[]): number;
//  1개 '이상'의 원소 가능
arr.push('man', 'woman');
console.log(arr);

// 배열 맨 마지막의 원소 제거 : pop
arr.pop();
console.log(arr);

// 배열 맨 처음의 원소 추가 : unshift
// unshift(...items: T[]): number;
arr.unshift('lee');
console.log(arr);

// 배열 맨 처음의 원소 추가 : shift 
arr.shift();
console.log(arr);
// 주의할 점!! : shift, unshift함수의 경우에 push,pop함수보다 훨씬 느리다.

// 배열 특정 위치의 원소 추가 : arr[index]='something';
// 원하는 위치에 바로 넣는 것 가능
// 만약 기존 위치에 원소가 있었다면, 없애고 바로 대체해버린다.
// 배열의 길이보다 더 긴 원소에 접근한다면, 
// 그 원소만큼 배열을 추가 생성하고 비어있게 만든다. 출력하면 undefined라고 나옴
arr[100]='something';

arr.push('kim','choi', 'park');
console.log(arr);

// 배열 특정 위치의 원소 제거 : splice
// splice(start: number, deleteCount?: number)
// 어느 원소부터 시작할지, 몇개나 지울지 선택 가능
// ? : optional : 지우는 개수는 넣어도 되고 안넣어도 된다.
// 몇개 지울지 넣지 않는다면 시작하는 위치부터 모든 원소를 다 지운다.
arr.splice(1);
arr.splice(1,1);
arr.splice(1,1,'kwon','min');

// 2개의 배열 이어붙이기 : concat
//concat(...items: ConcatArray<T>[]): T[];
// 2개 이상의 배열을 이어붙이는 것이 가능하다.
const arr2=['jeong', 'cheon'];
const arr3=arr.concat(arr2);
console.log(arr3); 

// 배열 특정 위치의 원소 찾기 : indexOf
// 배열안에 특정 원소가 없는 경우는 -1 return
console.log(arr.indexOf('kwon'));

// 배열 특정 원소가 포함되어있는지 확인 : includes
console.log(arr.includes('min')); // true, false로 반환

// 배열에 특정 원소가 2개 이상 있을 때 마지막 원소의 index 찾기
// lastIndexOf
arr.push('kwon', 'min');
console.log(arr.lastIndexOf('kwon'));
