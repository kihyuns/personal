const title = document.getElementById("title");
const del = document.getElementById("del")

console.dir(title)


let num = 0;
function plus(){
    num++;
}
const rand1 = Math.floor(Math.random()*10+1);

function consoletitle() { //app2.js 코드를 이용하면 코드를 줄일 수 있다  //
    plus()
    if(title.style.color === "red") {
        title.style.color = "blue"
        console.log("blue!"+ num)
    }else {
        title.style.color = "red";
        console.log("red!"+ num)
    } 
    if(num > rand1) {
        title.removeEventListener("mouseenter",mmsov)
        title.removeEventListener("mouseleave",mmslv)
    }
}

console.log(rand1)



function mmsov() {
    title.innerText = "moson!"
}
function mmslv() {
    title.innerText = "mslv!"
}

function Rresize() {
    del.style.backgroundColor = "tomato";
}

function copys() {
    alert("co!!")
}

function ofl() {
    alert("sos no wifi")
}
function onl() {
    alert("all goood")
}

title.addEventListener("mouseleave", mmslv)
title.addEventListener("mouseenter",mmsov)
del.addEventListener("click", function (){ 
    if (title.onclick == consoletitle){
        title.onclick= null;
    } else {
        title.onclick = consoletitle;
    } 
})

window.addEventListener("resize", Rresize);
window.addEventListener("copy",copys)
window.addEventListener("offline", ofl)
window.addEventListener("online", onl)

title.onclick = consoletitle; 
// onclick은 선호하지않는다. 
// why? .removeEventListener을 통해 event를 제거 하지 못하기 때문
