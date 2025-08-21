let name = '홍길동';
let age2= 20;

// const person = {
//     name: '홍길동',
//     age: 20
// }

const person = { //선언된 변수가 있다면 변수를 넣는것 만으로도 객체 생성 가능
    name, age2
}

console.log(person);
console.log(person.name);
console.log(person.age2);

let x = 0;
let y = 0;
const number = {x, y};
console.log(number);

//사원들의 정보를 입력받아 객체를 생성하는 함수 정의
//사원의 정보: name, age, address
const createEmployee = (name, age, address) => {
    return { name, age, address }
}

let emp1 = createEmployee('홍길동', 20, '서울시');
let emp2 = createEmployee('김철수', 30, '부산시');
console.log(emp1, emp2);