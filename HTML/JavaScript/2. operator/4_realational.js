/**
 * 비교 연산자: >, <, >=, <=, ==, ===(값+데이터)
 */
console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(3 >= 2); // true
console.log(3 <= 2); // false

console.log(3 == '3'); // 3==3 true //javascript는 타입을 무시하고 값만 비교
console.log(3 === '3'); // 데이터 타입까지 비교 false
console.log(3 == 'A'); // 3 == 12(A의 ASCII 문자값) false
console.log(3 === 'a'); // false

let obj1 = {
    name: "홍길동"
};
let obj2 = {
    name: "홍길동"
};
console.log('참조형-----------------');
console.log(obj1 == obj2); // false, 객체는 참조값을 비교
console.log(obj1.name == obj2.name); // true, 객체의 속성값은 값으로 비교
console.log(typeof obj1 === typeof obj2); // true, 객체의 타입은 동일
console.log(typeof obj1 == typeof obj2);