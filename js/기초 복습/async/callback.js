'use strict'

//Synchronos callback (동기)

console.log('1') //1 (동기)
setTimeout(() => console.log('4') , 1000) //5 비동기
console.log('2') //2 (동기)
console.log('3') //3 (동기)

function printTest(print) {                      //호이스팅으로 위로
    print();
}
printTest(()=> console.log('hello'))//4 (동기)

//ASynchronos callback (비동기)
function printDelay(print, timeout) {           //호이스팅으로 위로
    setTimeout(print, timeout);
}
printDelay(()=>console.log('async callback'), 2000) //6 비동기

//콜백지옥 예제 
//사용자의 데이터를 백엔드 서버에서 받아오는 클래스 (안에는 2가지 함수를 예시로 작성)
//※원래는 사용자가 로그인하면 관련정보를 한번에 백엔드에서 가져외야 한다

class UserStorage {
    loginUser(id, password, onSuccess, onError) {  // 1.id와 password를 입력받아서
        setTimeout(()=>{    // 2.서버에 로그인 (백엔드에서 받아오는 느낌을 내기 위해 사용)
            if (
                (id === 'hyun' && password === '0000') ||
                (id === 'kim' && password === '1234')
            ) {
                onSuccess(id);  // 3. 받아온 id를 이용해서 역할을 요청해서 다시 받아옴
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {    // 4. 성공적으로 받아와 지면 출력
        setTimeout(() => {
            if (user === 'hyun') {
                onSuccess({name:'hyun',role:'admin'});
            }else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    (user) =>{
        userStorage.getRoles(
            user, 
            userRole =>{
                alert(`Hellow ${userRole.name}, have a ${userRole.role}`)
            },
            eeror => {
                console.log(eeror)
            })
    },
    error => {console.log(error)})

//위 코드의 문제점은 가독성 및 유지보수에 좋지않다