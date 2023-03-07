const clock = document.querySelector("h2#clock");



    //상대시간 구하기
    // const date = new Date();
    // const ell = new Date(2022, 07 , 07);
    // const days = Math.ceil((ell-date) / 86400000); 
    // //86400000 = (1000*60*60*24) 로 나온 숫자
    //  const time = new Intl.RelativeTimeFormat('ko' ,{numeric:'auto'})
    // console.log(`일 = ${time.format(days, 'day')}`)

//현재시간 구하기 + 다양한 옵션
function nowTime() {
    const date = new Date();
    const tt=date.toLocaleDateString('ko',{
        year: 'numeric',
        month:'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second:'numeric'
    })
    clock.innerHTML = tt;
    console.log(tt)
}

//현재시간 1초당 갱신
let interval = setInterval(nowTime,1000)
let toggle = true;
//클릭시 갱신 중지 or 갱신
function stop() {
    if(toggle){
        clearInterval(interval);
        toggle=false;
    }else{
        interval = setInterval(nowTime,1000);
        toggle = true;
    }
}
stop()

