'use strict'

//async
{
function fetchUser() {
    //사용자의 데이터를 네트워크 통신을 해서 10초정도 걸리는 백엔드에서 받아오는 함수가 있다고 가정
    return 'hyun';
}

const user = fetchUser();   
//여기서 비동기처리를 하지않으면 데이터를 받는데 10초가 걸려서 아래 코드를 바로 출력하지 못한다
console.log(user);
} console.clear();

//promise로 변환한 코드
{
function fetchUser() {
    return new Promise((res,rej)=>{
        res( 'hyun');
    });
}

const user = fetchUser();
user.then(console.log)
console.log(user)
}

//async 사용해서 코드 변환
    async function fetchUser() {   //함수 앞에 async를 붙혀주면 자동으로 Promise로 변환 된다
        return  'hyun';
    }
    
    const user = fetchUser();
    user.then(console.log)
    .then(console.clear)

//await 사용 예

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));  //정해진 ms가 지나면 promise를 리턴하는 코드
}

async function getApple() {
    await delay(1000)   //await은 async안에서만 사용가능
    return 'apple';
}
async function getBanana() {
    await delay(1000)
    return 'banana';
}

// async function viewFruits() {
//     const a = await getApple();         여기서 get Apple과 Banana는 서로 연관이 없기 때문에
//     const b = await getBanana();        딜레이를 병렬처리 해주는게 효율적이다
//     return `${a} + ${b}`
// }
async function viewFruits() {
    const aPromise = getApple(); 
    const bPromise = getBanana();
    const a = await aPromise;
    const b = await bPromise;
    return `${a} + ${b}`
}

viewFruits().then(console.log)

// Promise.all 이용
function viewAllFruits() {
    return Promise.all([getApple(),getBanana()])
    .then(res => res.join(' + '))
}
viewAllFruits().then(console.log)

// Promise.race 이용
function firstOne() {
    return Promise.race([getApple(), getBanana()]);
}

firstOne().then(console.log)