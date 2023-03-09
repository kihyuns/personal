'use strict'
//promise에는 원하는 기능을 수행해서 해당하는 데이터를 만들어 내는 producer(생산자)와 consumer(소비자)로 나눠진다.
// 원하는 기능을 비동기적으로 실행하는 promise 만들어보기
//promise는 클래스이기 떄문에 new 키워드를 이용해 오브젝트를 생성할 수 있다
//promise의 생성자는 executor라는 콜백함수를 전달해줘야 한다.
//executor 콜백함수에는 또 다른 2가지 콜백함수를 받는다 
//1. resolve(기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수)
//2. reject (기능을 수행하다가 중간에 문제가 생기면 호출하게 되는 콜백함수)
//만약 resolve, reject 둘다 호출하지 않으면 pending상태가 된다

// 1. producer
{
    const promise = new Promise((resolve, reject) => {  //두가지를 받는 콜백함수(executor)를 만든다
        console.log('doing')
        resolve('hyun')
        setTimeout(() => {
            reject(new Error('NONONO!'))  //reject는 Error()라는 오브젝트를 통해서 값을 전달
        }, 3000);
    });
    // Promise를 만드는 순간 executor(콜백함수)가 바로 실행되기 때문에 무언가를 눌렀을때
    // 실행하고 싶다면 주의해야 한다

    // 2. consumer
    promise.then(value => console.log(value))
    .catch(error =>console.log(error))
    .finally(() =>console.log('꼭 실행'))
}
//Promise chaining (then 메소드를 이어 붙이는 것)
// 서버에서 숫자를 받아오는 promise
// {   const fetchNum = new Promise((res, rej) => res(1))
// fetchNum
// .then(num => num * 2)
// .then(num => num * 2)
// .then(num => num * 2)
// .then(num => {
//     return new Promise((res, rej)=>res(num-1))
// })
// .then(num => console.log(num))}

const Wstar = new Promise ((res, rej) => {
    setTimeout(() => res('☆'), 1000)
});
const Bstar = color => new Promise ((res, rej) => {
    setTimeout(() => rej(new Error(`error! ${color} -> ★`)), 1000) //해당 과정에서 받아오기 실패
});
const Bst = chan => new Promise ((res, rej) => {
    setTimeout(() => res(`${chan} -> #`), 1000)
});

// Wstar
// .then(Bstar)
// .then(Bst) 
// .then(last => console.log(last))
Wstar
    .then(Bstar)
    .catch(e => {return '♥'}) //resolve값이 ♥로 변경
    .then(Bst)
    .then(console.log)
    .catch(console.log)





