/**
 * iterable(순회) object: Iteration Protocol을 준수하고 있는 객체
 * - for..of 구문
 * - ...(Spread operator : 스프레드 연산자) : 블록안에서 객체의 데이터를 전개, 펼쳐놓음
 * - ...(Rest parameter : 나머지 인자) : 매개변수에서 파라미터 매핑
 * - ...(Destructing object : 구조분해 할당) : 객체의 구조를 분해하여 대입하는 변수에 자동으로 매핑
 */

// function test(a, b, ...numbers)

// test(1,2,3,4,5,6,100) //rest parameter, a,b를 제외한 나머지는 numbers 라는 배열에 넣는다

// 문자열 객체 생성 - 'Hello~ JavaScript World!!!'
const str = new String('Hello~ JavaScript World!!!')
console.log(`str.length = ${str.length}`);

// for(요소 of 객체) {}

for(const text of str) { //const 사용 가능 - 블록 내에서는 재 할당 가능
    console.log(text);   
}

console.clear();
const numbers = [1,2,3,4,5];
for (const number of numbers) console.log(number);

//Number 클래스는 iterable object가 아니므로 for..on 사용 불가
console.clear();
const numbers2 = new Number(12345);
for(const number of numbers2) console.log(number);

