/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 제공됨
 * - 배열.forEach(callbackFn);
 */
let fruits = new Array('🍎','🍊','🍋','🍏','🍆');
fruits.forEach((item, index, array) => {
    console.log(item);
    
});

//레몬을 포도로 교체
fruits.forEach((item, index) => {
    if(item === '🍋') {
        fruits.splice(index, 1,'🍇')
    }
});

console.log(fruits);
