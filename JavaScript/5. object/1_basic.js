/**
 * object : 
 * - {}, 다양한 데이터 타입을 저장
 * - object literal 형식은 { property: value, ... }
 */

//학생 성적 관리 프로그램 - object literal을 활용하여 학생 개인의 성적관리 설계
const hong = {
    name: '홍길동',
    kor: 100,
    eng: 100,
    math: 100
}

hong.name = '홍철수'; //값을 바꾸는것은 가능
hong.math = 90;
// delete hong.math;

console.log(hong);
console.log(`name : ${hong.name}`);
console.log(`kor : ${hong.kor}`);
console.log(`eng : ${hong.eng}`);
console.log(`math : ${hong.math}`);