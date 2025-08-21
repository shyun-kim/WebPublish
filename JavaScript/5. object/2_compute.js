import { setObject, getObject, updateObject, deleteObject } from '../commons/util.js'


const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruits = {
    name: 'apple',
    emoji: '🍎'
}



setObject(person, 'address', '강남구');
console.log(person);

let job = getObject(person, 'job');
console.log(job);

updateObject(person, 'age', 32);
console.log(person);

deleteObject(person, 'job')
console.log(person);

console.log('==================');


setObject(fruits, 'color', 'red');
console.log(fruits);

let e = getObject(fruits, 'emoji');
console.log(e);

updateObject(fruits, 'color', 'green');
console.log(fruits);

deleteObject(fruits, 'emoji')
console.log(fruits);
