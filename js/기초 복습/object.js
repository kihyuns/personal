//Object는 key와 vlue의 집합체이다
//key는 string 타입으로 받아와야 한다 ""
//값을 받을 때엔 

const test = {name:'hyun',age:10}

console.log(test.name); 
//-> 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때 사용

console.log(test['name']);
//-> 정확히 어떤 키가 필요한지 모를 때, 
//즉 runtime에서 결정 될 때 사용

 function testValue(obj, key) {
    //console.log(obj, key)를 사용한다면 undefined
    console.log(obj[key]);
}
testValue(test, "name");
//why? -> key값이 name이라는 것을 모르기 때문에

const person1 = {name:'a',age:1};
const person2 = {name:'a',age:1};
const person3 = {name:'a',age:1};
//만약 하나를 더 만들고 싶을 때 여기에 
//const person4 = {name:'a',age:1};를 하나 더 만드는 것은 번거로움
const person4 = new Parson('b',2);

function Parson(name, age) {
    return {
//key와 valeu에 이름이 동일하다면 생략 가능 
        name,
        age
    }
}

for(key in test) {
    console.log(key)
}
//-> test 안에 있는 key들을 모두 보여줌 name과age


const array = [1,2,3,4];
for (value of array) {
    console.log(value)
}
//->array안에 있는 value들을 모두 보여줌 
//반복문을 통해서 보여줌

console.clear();
//cloning
//Object.assign(target, ...sources)
// target = 목표 객체. 출처 객체의 속성을 복사해 반영한 후 반환할 객체
// sources = 출처 객체. 목표 객체에 반영하고자 하는 속성들을 갖고 있는 객체들 
// >> 마지막에 선언 된 sources이 앞 값을 덮는다

const fruit1= {color:'red'}			
const fruit2= {color:'blue', size:'big'}
const fruit3= {name:'test'}
const mix = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mix)
// mix의 color = blue , size = big , name = test