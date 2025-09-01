/**
 * 함수 정의: 자바스크립트의 함수는 object 이다(heap에 저장됨)
 * 1. 일반적인 함수 정의
 * function 함수명(매개변수) {
 *      실행 코드 생성;
 *      return 반환값
 * }
 * 
 * 함수 호출 : 함수명(파라미터) > 값을 넘길때는 파라미터, 받아온 값을 사용할떄는 매개변수
 * 
 * 2. const 함수명 = (매개변수) => {
 *      실행 코드생성;
 *      return 반환값;
 * }
 * 
 * 3. 자바스크립트 엔진은 빌트인 함수를 포함하고 있다.
 */

// 빌트인 함수 parseInt(정수변환 값);
// let str = '10';
// let number = parseInt(str);
let str = '10.1523'
let float = parseFloat(str);
console.log(str, typeof str);
// console.log(number, typeof number);
console.log(float, typeof float);

//두 수를 입력 받아, 합계를 출력
let num1 = 100;
let num2 = 20;
console.log(`sum = ${num1+num2}`);

//함수 호출 : 호이스팅 작업
sum(1,2);

//함수를 이용하여 합계를 출력
// function sum() {
//     let num1 = 100;
//     let num2 = 20;
//     console.log(`함수호출 :: sum = ${num1+num2}`);
// }
function sum(num1, num2) {
    console.log(`함수호출 :: sum = ${num1+num2}`);
}

//함수 호출 : 호이스팅 작업
sum(100,200);

//Arrow 함수 생성
const sum2 = (num1, num2) => {
    console.log(`함수호출2 :: sum = ${num1+num2}`);
}

sum2(1000,2000);