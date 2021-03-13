'use strict';
//array.join()
//array.slice()
//array.splice()
//array.reverse()
//array.find()
//array.filter()
//array.map()
//array.some()
//array.every()
//array.reduce()
//array.sort()


// Q1. make a string out of an array
// So-so
{
    const fruits = ['apple', 'banana', 'orange'];
    const arr=fruits.toString();
    console.log(arr);

    //답지 : join()
    // join('%'); 안의 구분자 마음대로 가능
    // 결과값 : String
    // *join(separator?: string): string;
    // *Adds all the elements of an array into a string, 
    // *separated by the specified separator string.
    const result=fruits.join(',');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  // Success
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    //원하는 개수만큼 받아올 수 있지만 개수를 넘어가면 결과가 똑같아진다.
    //*split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
    //*Split a string into substrings using the specified separator and return them as an array.
    // 결과값 : array
    const arr1=fruits.split(',',100);
    console.log(arr1);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // Success
  {
    const array = [1, 2, 3, 4, 5];
    //*reverse(): T[];
    //array(배열)의 reverse함수는 배열 자체를 바꾼다.
    array.reverse();
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  // So-so
  {
    const array = [1, 2, 3, 4, 5];
    // array(배열)의 splice함수는 배열 자체를 바꾼다.
    // 삭제된 요소들을 반환
    // *splice(start: number, deleteCount?: number): T[];
    // *Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    array.splice(0,2);
    console.log(array);

    //답지 : slice()
    // 배열에서 원하는 부분만 return, 배열 자체의 변화는 없다.
    // 범위에 음수를 사용하면, 배열의 맨 마지막 위치에서 앞으로 몇칸을 의미하게 된다.
    // 끝나는 위치는 그 끝나는 위치를 포함하지 않는다.
    // *slice(start?: number, end?: number): T[];
    // *Returns a copy of a section of an array.
    // *For both start and end, a negative index can be used to indicate an offset from the end of the array.
    const array2 = [1, 2, 3, 4, 5];
    const result=array2.slice(2,5); //3,4,5
    //const result=array.slice(2,-1); //3,4
    console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // fail
  {
    students.forEach(e=>{
        if(e.score===90) console.log(e.name);
    });

    //답지 : find()
    // 조건을 만족하는 첫번째 요소를 return, 타입은 정해지지 않았다. Runtime에 결정
    // *find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    // *Returns the value of the first element in the array where predicate is true, and undefined
    const result = students.find(function(student, index) {
      //console.log(student, index);
      return student.score===90;
    });
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  // fail
  {
    const arr=[];
    students.forEach((e)=>{
        if(e.enrolled) arr.push(Object.assign({},e)); 
    });
    console.log(arr);

    //답지 : filter()
    // 조건에 맞는 모든 요소들을 '배열을 만들어서' return
    //* filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    //* Returns the elements of an array that meet the condition specified in a callback function.
    const result=students.filter((student)=>student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // fail
  {
    const arr2=[];
    students.forEach(e=>arr2.push(e.score));
    console.log(arr2);

    //답지 : map()
    //각각의 요소들이 callback함수를 거쳐서 새로운 값으로 mapping되는 것, 배열로 retuen 
    // *map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    // *Calls a defined callback function on each element of an array, and returns an array that contains the results.
    const result=students.map((student)=>student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  // fail
  {
    //*some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    //*Determines whether the specified callback function returns true for any element of an array.
    //배열의 요소가 조건에 하나라도 맞는 요소가 있는지 없는지 확인해준다.
    //하나의 요소라도 조건에 맞다면 true
    const result=students.some((student)=>student.score<50);
    console.log(result);


    //*every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    //*Determines whether all the members of an array satisfy the specified test.
    //배열의 모든 요소가 조건에 맞는지 확인
    const result2=!students.every((student)=>student.score>=50);
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    //*reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    //*reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    //* Calls the specified callback function for all the elements in an array. 
    //The return value of the callback function is the accumulated result, 
    //and is provided as an argument in the next call to the callback function.
    //콜백 함수는 배열에 있는 모든 요소마다 호출이 된다.
    //콜백 함수의 결과값은 누적된 값인데, 이 값은 다음 콜백 함수의 인자가 된다.
    const result=students.reduce((prev, curr)=>{
      return prev+curr.score;
    }, 0); //0은 여기서 initial value이다. 맨 첫번째의 prev값이 된다. //curr이 prev가 된다.
    console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result=students.map((student)=>student.score)
                        .join(', ');
    console.log(result);

    //50점 이상인 요소들만 묶을 때
    const result=students
    .map((student)=>student.score)
    .filter((score)=>score>=50)                    
    .join(', ');
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    //sort() : (a,b)=>(a-b)의 값이 음수면 오름차순 정렬
    //ex) [11,2,22,1].sort((a, b) => a - b)
    const result=students.map((student)=>student.score)
                        .sort()
                        .join(', ');
    console.log(result);
  }