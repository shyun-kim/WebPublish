/**
 * Number 클래스 메소드
 * - valueOf()
 * - toLocaleString()
 */
let a = 100;
let b = new Number(100);


console.log(a == b); //true, 비교 할 때 앞의 값이 기본형이면 뒤에값이 객체(Number 클래스)여도 .valueOf()를 붙여서 값으로 비교해줌
console.log(a == b.valueOf()); //true

let aa = 1234567;
let bb = new Number(1234567);
console.log(aa.toLocaleString());
console.log(bb.toLocaleString());

let aaa = 123.45;
console.log(aaa.toFixed()); //소수점 첫째자리 반올림 후 정수 변환

