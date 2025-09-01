/**
 * ✨✨✨🧨
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 결과를 새로운 배열객체로 반환
 * - 배열.map(콜백함수)
 */

let nArray = [1.2, 2.3, 3.4, 5.6, 6.7];
let numbers = [1, 2, 3, 4, 5];
let objects = [
    {name: '홍길동', age:10},
    {name: '이순신', age:20},
    {name: '김유신', age:30}
];


//nArray 요소 출력
nArray.forEach((item, i) => console.log(`nArray[${i}] = ${item}`));

//nArray 요소의 소수점 절삭 후 데이터 출력 : map()
let nArray2 = nArray.map((item) => {return Math.floor(item)});
nArray2.forEach((item) => {
    console.log(item);    
});


//numbers 요소에 100을 곱하여 새로운 배열객체를 생성하시오
let numbers2 = numbers.map((item) => {
    return item*100;
});
numbers2.forEach((item) => console.log(item));

//object 요소 중 이름이 이순신인 객체를 새로운 배열 객체로 생성
let object2 = objects.map((item) => {
    let resultobj = {};
    if(item.name === '이순신'){
        resultobj = item;
    }
    return resultobj;
})
console.log(object2);

