/**
 * if, if ~ else, if ~ else if ... ~ else
 * 삼항 연산자: (조건문) ? true인 경우 실행문 : false인 경우 실행문
 */

//입력되는 과일명이 apple인 경우에만 이모지 출력
//apple 이외의 과일은 이름 출력
let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else {
    console.log(fruit);
}

//위의 if문을 삼항 연산자로 변환
let result = undefined;
fruit === 'apple' ? result = '🍎' : result = fruit;
console.log(`result >> ${result}`);
console.log(result);
console.log('result');

//선택한 메뉴를 출력
let menus = ['pizza','hotdog','coffee'];
let selectMenu = 'coffee';
if(selectMenu === 'pizza') {
    console.log('🍕');
} else if(selectMenu === 'hotdog') {
    console.log('🌭');
} else if(selectMenu === 'coffee') {
    console.log('☕');
} else {
    console.log(`메뉴 준비중~`);
}

//입력받은 숫자가 홀수 이면 사과이모지, 짝수이면 포도이미지 출력
let inNumber = 100;
let fresult = undefined;
// if(inNumber%2 === 1) {
//     fresult = '🍎' //홀수
// } else {
//     fresult = '🍇' //짝수
// }
// console.log(`결과 --> ${fresult}`);

if(inNumber%2) { //1은 true, 0은 false
    fresult = '🍎' //홀수
} else {
    fresult = '🍇' //짝수
}
console.log(`결과 --> ${fresult}`);

if(!(inNumber%2)) {
    fresult = '🍎' //짝수
} else {
    fresult = '🍇' //홀수
}
console.log(`결과 --> ${fresult}`);

//삼항 연산식 1 -> true 0 -> false
!(inNumber % 2) ? fresult = '🍎' : fresult = '🍇';
console.log(inNumber %2, `결과 --> ${fresult}`);
