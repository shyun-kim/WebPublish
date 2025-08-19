/**
 * 논리 연산자: &&(and), ||(or)
 * 
 * 논리식1 &&  논리식2 = 결과값
 * true   && true = ture
 * true   && false = false
 * false  && true = false (short cut)
 * false  && false = false (short cut)
 * 
 * 논리식1  || 논리식2 = 결과값
 * true    ||  true = true (short cut)
 * true    ||  false = true (short cut)
 * false   ||  true = true
 * false   ||  false = false
 */

let a =1;
let b =2;
console.log('AND-----------------');
console.log((a < b) && (a < b)); 
console.log((a < b) && (a > b)); 
console.log((a === b) && (a < b)); 
console.log((a === b) && (a > b)); 

console.log('OR-----------------');
console.log((a < b) || (a < b)); 
console.log((a < b) || (a > b)); 
console.log((a === b) || (a < b)); 
console.log((a === b) || (a > b)); 

console.log('Short cut-----------------');
//입력받은 조건을 비교하여 1~9까지 범위의 수를 출력
let number = 11;
//if(false && ) //결과 조건이 False로 나오는 조건을 앞에 두는것이 좋음
// if((number > 0) && (nubmer < 10));
if((number < 10) && (nubmer > 0)) { //Shortcut
    console.log(`result = true`);
} else {
    console.log(`result = false`);
}

//입력받은 숫자가 0보다 크거나 출력
let number2 = 11;
if((number2 > 0) || (number2 < 100)) { //Shortcut
    console.log(`result = true`);
} else {
    console.log(`result = false`);
}