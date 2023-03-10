'use strict'

class UserStorage {
    loginUser(id, password) { 
        return new Promise((res, rej) => {
            setTimeout(()=>{  
                if ((id === 'hyun' && password === '0000') || (id === 'kim' && password === '1234')) {
                    res(id);
                } else {
                    rej(new Error('not found'))
                }
            }, 2000);
        });
    }

    getRoles(user) {   
            return new Promise((res, rej) => {
                setTimeout(() => {
                    if (user === 'hyun') {
                        res({name:'hyun',role:'admin'});
                    }else {
                        rej(new Error('no access'));
                    }
                }, 1000);
            })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user =>  alert(`Hellow ${user.name}, have a ${user.role}`))
    .catch(console.log);