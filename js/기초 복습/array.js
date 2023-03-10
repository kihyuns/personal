// 비슷한 타입의 오브젝트들을 묶어놓는것을 자료구조라고 한다

// 배열은 촘촘히 모여있는 자료구조를 말한다 + index가 지정되어 있다
// ※ index는 0부터 시작한다
/*
//Array
const arr1 = new Array();
const arr2 = [1,2];  //2가지 방법으로 배열 생성

const fruits = ['사과','바나나']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits.length -1); 
//배열은 index가 0부터 시작하기 때문에 총 길이에 -1을 하면 제일 마지막 index를 받아올 수 있다
console.clear();
//for문으로 호출하는 3가지 방법 (for,for of, forEach)
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// for(let fruit of fruits) {
//     console.log(fruit);
// }

fruits.forEach((fruit)=> console.log(fruit));
//forEach는 array에 들어있는 값(value)마다 내가 전달한 함수를 출력하는 함수이다
// console.clear();
fruits.push('딸기','복숭아') //제일 뒷 배열에 추가
console.log(fruits)

fruits.pop(); // 제일 뒷 배열을 하나 제거 > 복숭아 제거
fruits.unshift('1번과일') // 배열 맨 앞에 추가
fruits.shift(); // 맨 앞 배열 하나 제거
console.log(fruits)
// shift와 unshift는 pop과 push 보다 느리다
// why? shift와 unshift는 배열 전체를 움직이게 하기 때문에
// 배열이 길면 길 수록 느려질 수 밖에 없다

// fruits.splice(1) //몇개를 제거할 지 정하지 않으면 지정한 순서부터 전부 지움 
// console.log(fruits)
// fruits.splice(1, 1) // 1번째 배열만 지움
// console.log(fruits)
fruits.splice(1, 1,'두번째과일 추가','3번째 추가')
// index1번째를 지우고 뒤에 배열 추가
// 지우지 않고 배열 추가도 가능
// ex)fruits.splice(1, 0,'2추가','3추가')
console.log(fruits)

const fruits2 = ['두리안','람부탄']
const newfruts =  fruits.concat(fruits2);
// concat을 이용하면 배열 두개를 연결할 수 있다
console.log(newfruts)
console.log(fruits.indexOf('사과')) 
// 입력한 값의 배열 index번호를 알려줌
console.log(fruits.includes('사과')) 
// 입력한 값이 있는지를 true, false로 반환

console.clear();
fruits.push('사과')
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));
//동일한 값의 배열 index를 추출할 때 사용
console.clear();

console.log(fruits)
const res = fruits.join()
console.log(res)
//배열을 문자열로 변환할 때 사용

console.clear();
console.log(res)
const te = res.split(",")
console.log(te)
//문자열을 배열로 변환할 때 사용
*/
console.clear();
const array = [1,2,3,4,5]
// const res = array.reverse();
// console.log(res)
// //배열을 거꾸로 반환
const res = array.slice(0,5)
console.log('array=' , array)
console.log(res)
console.clear();

 class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',2,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88)
]
{ // find
// const result = students.find(function(students) {
//     return students.score > 50;
// })  arrow function으로 변환 -> 한 문장이면 '{}' , 'return' , ';' 이 생략이 가능해서 한줄로 작성 가능하다
const result = students.find(students =>  students.score === 90);
console.log(result); 
}
{   //filter
    const result = students.filter(students => students.enrolled && students.score >80);
    console.log(result)
}

{   //map
    const result = students.map(students => students.score)
    console.log(result)
}


{   //some, every
    const result = students.some(students => students.score < 50);
    console.log(result);
    const res = students.every(students => students.score > 0)
    console.log(res);
}

{   //reduce - 합계
    // const result = students.reduce((aa, bb) => {
    //     console.log('-------')
    //     console.log(aa)
    //     console.log(bb)
    //     return aa + bb.score
    // }, 0) 
    //console , retrun, {} 제거해서 간단하게 변환
    const result = students.reduce((aa, bb) =>  aa + bb.score , 0)
    console.log(result)
}

{   //reduce - 합계로 평균 구하기
    const res = students.reduce((aa,bb) => aa+bb.score, 0)
    console.log(res/students.length)
//OR
    const val = res/students.length;
    console.log(val)
}

{   //map(score만 배열로)과 filter(점수조건), join(문자열로 변환) 활용
    const res = students.map(students => students.score).filter(score => score > 50 ).join();
    console.log(res)
}
console.clear()

{
    const res = students.map(students => students.score)
    .sort()
    .reverse()
    .join();
    console.log(res)
}





