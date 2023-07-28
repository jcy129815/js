//변수 목록 => 키, 체중, 적정체중, 창, 버튼
const userHeight = 170;
const userWeight = 68;
let normal_w  = 0; //적정체중
let bad_w = normal_w - userWeight 
const user_text = document.querySelector('.user_text')
const user_btn = document.querySelector('.user_btn')
console.log(userHeight, userWeight, normal_w, user_text, user_btn)
//식
normal_w = (userHeight-100)*0.9; // 63
bad_w = normal_w - userWeight; // -5
// console.log(normal_w, bad_w) 
console.log(`철수의 적정 체중은${normal_w}kg이며 초과된 kg은 ${bad_w}kg이다`)