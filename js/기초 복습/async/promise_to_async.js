'use strict'

class UserStorage {
    async loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if ((id === 'hyun' && password === '0000') || (id === 'kim' && password === '1234')) {
            resolve(id);
          } else {
            reject(new Error('not found'));
          }
        }, 1000);
      });
    }
  
    async getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'hyun') {
            resolve({ name: 'hyun', role: 'admin' });
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
    }
  }
  
  // 사용 예시
  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your password');
  
  (async () => {
    try {
      const userId = await userStorage.loginUser(id, password);
      const user = await userStorage.getRoles(userId);
      alert(`Hello ${user.name}, have a ${user.role}`);
    } catch (error) {
      console.log(error);
    }
  })();

  
  //이제 `loginUser`와 `getRoles` 함수는 Promise 객체를 반환하지만, `async` 키워드를 붙여서 
  //Promise 객체를 반환하는 함수처럼 작성할 수 있습니다. 이렇게 하면 Promise 객체를 반환하는 것과 
  //같은 효과를 낼 수 있지만, 코드가 훨씬 간결해지고 가독성이 좋아집니다. 
  //이렇게 작성된 코드를 `async` 함수 안에서 `await` 키워드를 사용하여 비동기 처리 결과를 기다릴 수 있습니다.