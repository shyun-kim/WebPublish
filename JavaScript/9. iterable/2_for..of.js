/**
 * iterable object를 순회하여 데이터 가져옴
 * - for(const 로컬변수 of 객체) { 실행문; }
 */

//배열의 요소를 교체하는 함수 생성 : for.. of
function replace([...array], origin, target) { //spread 연산자 > Shallow copy 얕은 복사 실행
    let index = 0;
    for(const item of array) {
        if(item === origin) {
            array.splice(index, 1, target)
        }
        index++;
    }
    return array
};

//배열의 요소를 교체하는 함수 생성 : forEach
function replace2(array, origin, target) {
    let copyArray = Array.from(array); //shallow copy

    copyArray.forEach((item, index) => {
        if(item === origin) {
            copyArray.splice(index, 1, target)
        }
    });
    return copyArray
}

//배열의 요소를 교체하는 함수 생성 : map 함수
// function replace3(array, origin, target) {
//     return array.map((item) => {
//         if(item === origin) {
//             // array.splice(index, 1, target)
//             item = target;
//         }
//         return item;
//     });
// }

//3항 연산자 버전
function replace3(array, origin, target) {
    return array.map((item) => (item === origin) ? item = target : item);
}


let fruits = new Array('🍎','🍊','🍋','🍏','🍆');

let fresult = replace(fruits, '🍎', '🥝')
let fresult2 = replace2(fruits, '🍎', '🥐')
let fresult3 = replace3(fruits, '🍎', '🥥')
console.log(fruits);
console.log(fresult);
console.log(fresult2);
console.log(fresult3);
