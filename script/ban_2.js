//변수 => 창, 버튼
const ban_put = document.querySelector('.ban')
const btn_in = document.querySelector('.btn')
let a = 2 // 고정
let b = 0 //증가
// console.log(ban_put, btn_in)
/* console.log(`${a}X${b}=${a*b}입니다`)  
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`)
console.log(`${a}X${++b}=${a*b}입니다`) */

btn_in.addEventListener('click',function(){ 
    ban_put.value =` ${a}X${++b}=${a*b}` 
})
