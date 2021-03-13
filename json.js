//JSON: 클라이언트와 서버간의 통신할 때 직렬화를 위해 사용, JavaScript Object Notation의 약자
//XML도 있다.
//independent programming language and platform
//프로그래밍 언어와 플랫폼에 독립적이다!!
//XML과 같은 다른 문서보다 가볍다.
//Key, Value의 쌍이다.
// object --------serialize--->>> JSON(String)
// object <<<---deserialize------ JSON(String)

//http를 이용하여 클라이언트와 서버간의 데이터를 요청할 수 있는 방법 : Ajax

//1. Object to JSON
// stringify(obj)
let json=JSON.stringify(true);
console.log(json);//true

json=JSON.stringify(['lee','kim']);
console.log(json);//["lee","kim"] =>JSON 규격상으로 ""(큰 따옴표를 사용)

const person={
    name: 'lee',
    age: 20,
    height: null,
    birthDate: new Date(),
    //symbol: Symbol('id'), //symbol과 같은 JavaScript에만 있는 특별한 data도 JSON에 포함되지 않는다. 
    punch: ()=>{
        console.log(`${this.name} can punch!`);
    },
};

json=JSON.stringify(person);
console.log(json);//punch와 같은 함수는 제외하고 객체의 형태로 출력된다.

json=JSON.stringify(person, ['name','age']);//[]로 원하는 property만 골라서 뽑아낼 수 있다.
console.log(json);

json=JSON.stringify(person, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='name' ? 'geol' : value;
    //return value; //이 형태가 기본이다.
});
console.log(json);

//2. JSON to Object
// parse(JSON)
console.clear();

json=JSON.stringify(person);
const obj=JSON.parse(json, (key, value)=> {
    console.log(`key : ${key}, value : ${value}`);
    return key==='birthDate' ? new Date(value) : value;
    //return value; //이 형태가 기본이다.
});

console.log(obj);
person.punch();//가능
obj.punch();//불가능//한번 json으로 직렬화하면 메서드는 포함되어 있지 않기 때문에, 그것을 다시 바꿔도 포함되어있지 않다.

console.log(person.birthDate.getDate());//person.birthDate는 Object
//console.log(obj.birthDate);//obj.birthDate는 String
console.log(obj.birthDate.getDate());