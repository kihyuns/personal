//오브젝트를 JSON으로 변환하는 방법


let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple','banana'])
console.log(json)


const game = {
    name: 'lol',
    ctgr: 'aos',
    age: 18,
    playDate: new Date().toLocaleDateString('ko',{
        year: 'numeric',
        month:'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second:'numeric'
    }),
    start: () => {
        console.log(`${game.name} is start`)
    }
}

{
json = JSON.stringify(game)
console.log(json)
json = JSON.stringify(game, ['name','age']) //JSON으로 받고 싶은 것만 받을 수 있다
console.log(json)
json = JSON.stringify(game, (key, value) => {
    console.log(`key: ${key},value:${value}`);
    return key ==='name' ? 'loa' : value
})
console.log(json)
}
console.clear();
//JSON을 오브젝트로 변환하는 방법


json = JSON.stringify(game);
console.log(json)
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key},value:${value}`);
    return key === 'playDate' ? new Date(value) : value;
});
console.log(obj)
game.start();
console.log(game.playDate)


